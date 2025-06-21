'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useAppSelector } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { 
  Box, 
  Heading, 
  Text, 
  Grid, 
  Stack, 
  Spinner, 
  Flex,
  Button,
  Badge,
  VStack,
  IconButton
} from '@chakra-ui/react'
import { toaster } from '@/components/ui/toaster'
import Sidebar from '@/components/Sidebar'

interface StoreData {
  product_count: number
  price_count: number
}

interface Product {
  id: string
  name: string
  sku: string
  barcode: string
  store_id: number
  created_at: string
  updated_at: string
  created_by: string
  updated_by: string
  purchase_price: number
  selling_price: number
}

const DashboardPage = () => {
  const params = useParams()
  const storeId = params.storeid as string
  const auth = useAppSelector((state) => state.authReducer.value)
  const router = useRouter()
  
  const [storeData, setStoreData] = useState<StoreData | null>(null)
  const [recentProducts, setRecentProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // Check if user is authenticated and has access to this store
  useEffect(() => {
    if (!auth.token) {
      router.push('/login')
      return
    }
    
    if (auth.storeID !== parseInt(storeId)) {
      toaster.create({
        title: "Access Denied",
        description: "You don't have access to this store",
      })
      router.push('/login')
      return
    }
  }, [auth, storeId, router])

  const fetchDashboardData = async () => {
    try {
      // Fetch store data (product count and price count)
      const storeResponse = await fetch(`http://localhost:9999/warung/${storeId}`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`,
          'Content-Type': 'application/json',
        },
      })

      if (!storeResponse.ok) {
        throw new Error(`Failed to fetch store data: ${storeResponse.status}`)
      }

      const responseStoreData = await storeResponse.json()
      console.log('API Response:', responseStoreData)
      
      var objectStoreData = {
        product_count: responseStoreData.data.product_count,
        price_count: responseStoreData.data.price_count,
      } as StoreData
      setStoreData(objectStoreData)
      console.log('Processed store data:', objectStoreData)

      // Fetch recent products
      const productsResponse = await fetch(`http://localhost:9999/warung/${storeId}/products/prices?limit=5`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`,
          'Content-Type': 'application/json',
        },
      })

      if (!productsResponse.ok) {
        throw new Error(`Failed to fetch products: ${productsResponse.status}`)
      }

      const productsData = await productsResponse.json()
      console.log(productsData.data)
      const productDataObject = productsData.data.data.map((product: any) => ({  
        id: product.id,
        name: product.name,
        sku: product.sku,
        barcode: product.barcode,
        store_id: product.store_id,
        selling_price: product.selling_price,
        purchase_price: product.purchase_price,
        created_at: product.created_at,
        updated_at: product.updated_at,
        created_by: product.created_by,
        updated_by: product.updated_by,
      }))
      setRecentProducts(productDataObject)

    } catch (error) {
      console.error('Dashboard data fetch error:', error)
      toaster.create({
        title: "Error",
        description: "Failed to load dashboard data. Please try again.",
      })
    } finally {
      setIsLoading(false)
      setIsRefreshing(false)
    }
  }

  useEffect(() => {
    if (auth.token && auth.storeID === parseInt(storeId)) {
      fetchDashboardData()
    }
  }, [auth.token, storeId])

  // Monitor storeData state changes
  useEffect(() => {
    console.log('StoreData state updated:', storeData)
  }, [storeData])

  const handleRefresh = () => {
    setIsRefreshing(true)
    fetchDashboardData()
  }

  const handleLogout = () => {
    router.push('/login')
  }

  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="100vh" fontFamily={'"Fira Code", monospace !important'}>
        <Spinner size="xl" />
      </Flex>
    )
  }

  return (
    <Flex minH="100vh" bg="var(--color-primary-background)" fontFamily={'"Fira Code", monospace !important'}>
      {/* Desktop Sidebar - Hidden on mobile */}
      <Box display={{ base: 'none', md: 'block' }}>
        <Sidebar
          storeId={storeId}
          username={auth.username}
          activeMenu={activeMenu}
          onMenuChange={setActiveMenu}
          onLogout={handleLogout}
        />
      </Box>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.8)"
          zIndex={50}
          onClick={() => setShowMobileMenu(false)}
        >
          <Box
            position="fixed"
            top={0}
            left={0}
            w="280px"
            h="100vh"
            bg="rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            borderRight="1px"
            borderColor="rgba(255, 255, 255, 0.2)"
            zIndex={51}
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar
              storeId={storeId}
              username={auth.username}
              activeMenu={activeMenu}
              onMenuChange={(menu) => {
                setActiveMenu(menu)
                setShowMobileMenu(false)
              }}
              onLogout={handleLogout}
            />
          </Box>
        </Box>
      )}

      {/* Main Content */}
      <Box 
        ml={{ base: 0, md: "250px" }} 
        flex={1} 
        p={{ base: 4, md: 8 }}
        w="full"
      >
        {/* Header */}
        <Flex justify="space-between" align="center" mb={8}>
          <Flex align="center" gap={4}>
            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              onClick={() => setShowMobileMenu(true)}
              variant="ghost"
              color="white"
              _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
            >
              ☰
            </IconButton>
            <Box>
              <Heading size="lg" mb={2} color="white">Store Dashboard</Heading>
              <Text color="rgba(255, 255, 255, 0.7)" fontSize={{ base: 'sm', md: 'md' }}>Welcome back, {auth.username}</Text>
            </Box>
          </Flex>
          <Button 
            variant="outline" 
            onClick={handleRefresh} 
            loading={isRefreshing} 
            color="var(--color-primary)" 
            borderColor="var(--color-primary)" 
            _hover={{ bg: 'rgba(24, 242, 178, 0.1)' }}
            size={{ base: 'sm', md: 'md' }}
          >
            Refresh
          </Button>
        </Flex>

        {/* Store Data Cards */}
        {storeData && (
          <Grid 
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} 
            gap={{ base: 4, md: 6 }} 
            mb={8}
          >
            <Box p={{ base: 4, md: 6 }} border="1px" borderColor="rgba(255, 255, 255, 0.2)" borderRadius="md" bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(10px)">
              <Stack gap={2}>
                <Text fontSize="sm" color="rgba(255, 255, 255, 0.7)">Total Products</Text>
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="var(--color-primary)">{storeData.product_count}</Text>
              </Stack>
            </Box>

            <Box p={{ base: 4, md: 6 }} border="1px" borderColor="rgba(255, 255, 255, 0.2)" borderRadius="md" bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(10px)">
              <Stack gap={2}>
                <Text fontSize="sm" color="rgba(255, 255, 255, 0.7)">Total Prices</Text>
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="var(--color-primary)">{storeData.price_count}</Text>
              </Stack>
            </Box>
          </Grid>
        )}

        {/* Recent Products */}
        <Box p={{ base: 4, md: 6 }} border="1px" borderColor="rgba(255, 255, 255, 0.2)" borderRadius="md" bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(10px)">
          <Flex justify="space-between" align="center" mb={6}>
            <Heading size="md" color="white">Recent Products</Heading>
            <Button 
              variant="outline" 
              size="sm" 
              color="var(--color-primary)" 
              borderColor="var(--color-primary)" 
              _hover={{ bg: 'rgba(24, 242, 178, 0.1)' }}
            >
              View All Products
            </Button>
          </Flex>

          {recentProducts.length > 0 ? (
            <Stack gap={4}>
              {recentProducts.map((product) => (
                <Flex 
                  key={product.id} 
                  direction={{ base: 'column', md: 'row' }}
                  justify="space-between" 
                  align={{ base: 'flex-start', md: 'center' }} 
                  p={4} 
                  border="1px" 
                  borderColor="rgba(255, 255, 255, 0.2)" 
                  borderRadius="md" 
                  bg="rgba(255, 255, 255, 0.05)"
                  gap={{ base: 3, md: 4 }}
                >
                  <Box flex={1}>
                    <Text fontWeight="medium" color="white" fontSize={{ base: 'sm', md: 'md' }}>{product.name}</Text>
                    <Text color="rgba(255, 255, 255, 0.6)" fontSize={{ base: 'xs', md: 'sm' }}>
                      SKU: {product.sku} | Barcode: {product.barcode}
                    </Text>
                  </Box>
                  <Flex 
                    direction={{ base: 'column', md: 'row' }}
                    align={{ base: 'flex-start', md: 'center' }} 
                    gap={{ base: 2, md: 4 }}
                    w={{ base: 'full', md: 'auto' }}
                  >
                    <VStack align={{ base: 'flex-start', md: 'flex-end' }} gap={1}>
                      <Text fontWeight="medium" color="var(--color-primary)" fontSize={{ base: 'xs', md: 'sm' }}>
                        Harga Jual: Rp {product.selling_price}
                      </Text>
                      <Text color="rgba(255, 255, 255, 0.6)" fontSize={{ base: 'xs', md: 'xs' }}>
                        Harga Beli: Rp {product.purchase_price}
                      </Text>
                    </VStack>
                    <Badge colorScheme="blue" fontSize={{ base: 'xs', md: 'sm' }}>
                      {product.created_by}
                    </Badge>
                  </Flex>
                </Flex>
              ))}
            </Stack>
          ) : (
            <Text color="rgba(255, 255, 255, 0.5)" textAlign="center" py={8}>
              No products found. Add your first product to get started.
            </Text>
          )}
        </Box>
      </Box>
    </Flex>
  )
}

export default DashboardPage