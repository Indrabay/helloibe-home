'use client'

import React, { useEffect, useState, useCallback } from 'react'
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
  IconButton,
  Card,
  HStack,
  Avatar,
  Separator
} from '@chakra-ui/react'
import { useColorModeValue } from '@/components/ui/color-mode'
import { toaster } from '@/components/ui/toaster'
import Sidebar from '@/components/Sidebar'
import { 
  FiRefreshCw, 
  FiTrendingUp, 
  FiPackage, 
  FiDollarSign,
  FiUsers,
  FiShoppingCart,
  FiArrowRight,
  FiMenu
} from 'react-icons/fi'

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

  // Color mode values
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.800', 'white')
  const textSecondary = useColorModeValue('gray.600', 'gray.400')

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

  const fetchDashboardData = useCallback(async () => {
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
      
      const objectStoreData = {
        product_count: responseStoreData.data.product_count,
        price_count: responseStoreData.data.price_count,
      } as StoreData
      setStoreData(objectStoreData)

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
      const productDataObject = productsData.data.data.map((product: Product) => ({  
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
  }, [storeId, auth.token])

  useEffect(() => {
    if (auth.token && auth.storeID === parseInt(storeId)) {
      fetchDashboardData()
    }
  }, [auth.token, auth.storeID, storeId, fetchDashboardData])

  const handleRefresh = () => {
    setIsRefreshing(true)
    fetchDashboardData()
  }

  const handleLogout = () => {
    router.push('/login')
  }

  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="100vh" bg={bgColor}>
        <VStack gap={4}>
          <Spinner size="xl" color="var(--color-primary)" />
          <Text color={textSecondary} fontSize="lg">Loading dashboard...</Text>
        </VStack>
      </Flex>
    )
  }

  return (
    <Flex minH="100vh" bg={bgColor} fontFamily={'"Fira Code", monospace !important'}>
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
            bg={cardBg}
            borderRight="1px"
            borderColor={borderColor}
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
        ml={{ base: 0, md: "300px" }} 
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
              color={textColor}
              _hover={{ bg: 'gray.100' }}
            >
              <FiMenu />
            </IconButton>
            <Box>
              <Heading size="lg" mb={2} color={textColor}>Dashboard</Heading>
              <Text color={textSecondary} fontSize={{ base: 'sm', md: 'md' }}>
                Welcome back, {auth.username} 👋
              </Text>
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
            <FiRefreshCw />
            Refresh
          </Button>
        </Flex>

        {/* Stats Cards */}
        {storeData && (
          <Grid 
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} 
            gap={6} 
            mb={8}
          >
            <Card.Root bg={cardBg} border="1px" borderColor={borderColor} borderRadius="xl" p={6}>
              <Card.Body>
                <Box position="relative">
                  <VStack align="flex-start" gap={2}>
                    <Text color={textSecondary} fontSize="sm" fontWeight="medium">
                      Total Products
                    </Text>
                    <Text color="var(--color-primary)" fontSize="3xl" fontWeight="bold">
                      {storeData.product_count}
                    </Text>
                    <HStack gap={1}>
                      <Text color="green.500" fontSize="sm">↗</Text>
                      <Text color="green.500" fontSize="sm">12.5%</Text>
                    </HStack>
                  </VStack>
                  <Box position="absolute" top={0} right={0}>
                    <Box
                      p={3}
                      bg="rgba(24, 242, 178, 0.1)"
                      borderRadius="lg"
                      color="var(--color-primary)"
                    >
                      <FiPackage size={20} />
                    </Box>
                  </Box>
                </Box>
              </Card.Body>
            </Card.Root>

            <Card.Root bg={cardBg} border="1px" borderColor={borderColor} borderRadius="xl" p={6}>
              <Card.Body>
                <Box position="relative">
                  <VStack align="flex-start" gap={2}>
                    <Text color={textSecondary} fontSize="sm" fontWeight="medium">
                      Total Prices
                    </Text>
                    <Text color="var(--color-primary)" fontSize="3xl" fontWeight="bold">
                      {storeData.price_count}
                    </Text>
                    <HStack gap={1}>
                      <Text color="green.500" fontSize="sm">↗</Text>
                      <Text color="green.500" fontSize="sm">8.2%</Text>
                    </HStack>
                  </VStack>
                  <Box position="absolute" top={0} right={0}>
                    <Box
                      p={3}
                      bg="rgba(24, 242, 178, 0.1)"
                      borderRadius="lg"
                      color="var(--color-primary)"
                    >
                      <FiDollarSign size={20} />
                    </Box>
                  </Box>
                </Box>
              </Card.Body>
            </Card.Root>

            <Card.Root bg={cardBg} border="1px" borderColor={borderColor} borderRadius="xl" p={6}>
              <Card.Body>
                <Box position="relative">
                  <VStack align="flex-start" gap={2}>
                    <Text color={textSecondary} fontSize="sm" fontWeight="medium">
                      Active Users
                    </Text>
                    <Text color="var(--color-primary)" fontSize="3xl" fontWeight="bold">
                      24
                    </Text>
                    <HStack gap={1}>
                      <Text color="green.500" fontSize="sm">↗</Text>
                      <Text color="green.500" fontSize="sm">5.3%</Text>
                    </HStack>
                  </VStack>
                  <Box position="absolute" top={0} right={0}>
                    <Box
                      p={3}
                      bg="rgba(24, 242, 178, 0.1)"
                      borderRadius="lg"
                      color="var(--color-primary)"
                    >
                      <FiUsers size={20} />
                    </Box>
                  </Box>
                </Box>
              </Card.Body>
            </Card.Root>

            <Card.Root bg={cardBg} border="1px" borderColor={borderColor} borderRadius="xl" p={6}>
              <Card.Body>
                <Box position="relative">
                  <VStack align="flex-start" gap={2}>
                    <Text color={textSecondary} fontSize="sm" fontWeight="medium">
                      Sales Today
                    </Text>
                    <Text color="var(--color-primary)" fontSize="3xl" fontWeight="bold">
                      ₱45.2K
                    </Text>
                    <HStack gap={1}>
                      <Text color="green.500" fontSize="sm">↗</Text>
                      <Text color="green.500" fontSize="sm">15.7%</Text>
                    </HStack>
                  </VStack>
                  <Box position="absolute" top={0} right={0}>
                    <Box
                      p={3}
                      bg="rgba(24, 242, 178, 0.1)"
                      borderRadius="lg"
                      color="var(--color-primary)"
                    >
                      <FiShoppingCart size={20} />
                    </Box>
                  </Box>
                </Box>
              </Card.Body>
            </Card.Root>
          </Grid>
        )}

        {/* Recent Products */}
        <Card.Root bg={cardBg} border="1px" borderColor={borderColor} borderRadius="xl" p={6}>
          <Card.Header>
            <Flex justify="space-between" align="center">
              <Box>
                <Card.Title color={textColor} fontSize="xl" fontWeight="bold">
                  Recent Products
                </Card.Title>
                <Card.Description color={textSecondary} fontSize="sm">
                  Latest products added to your store
                </Card.Description>
              </Box>
              <Button 
                variant="outline" 
                size="sm" 
                color="var(--color-primary)" 
                borderColor="var(--color-primary)" 
                _hover={{ bg: 'rgba(24, 242, 178, 0.1)' }}
              >
                View All
                <FiArrowRight />
              </Button>
            </Flex>
          </Card.Header>
          <Card.Body>
            {recentProducts.length > 0 ? (
              <VStack gap={4} align="stretch">
                {recentProducts.map((product, index) => (
                  <Box key={product.id}>
                    <Flex 
                      justify="space-between" 
                      align="center" 
                      p={4} 
                      bg="gray.50"
                      borderRadius="lg"
                      _hover={{ bg: 'gray.100' }}
                      transition="all 0.2s"
                    >
                      <HStack gap={4} flex={1}>
                        <Avatar.Root size="sm" bg="var(--color-primary)" color="white">
                          <Avatar.Fallback>{product.name.charAt(0)}</Avatar.Fallback>
                        </Avatar.Root>
                        <Box>
                          <Text fontWeight="semibold" color={textColor} fontSize="md">
                            {product.name}
                          </Text>
                          <Text color={textSecondary} fontSize="sm">
                            SKU: {product.sku} • Barcode: {product.barcode}
                          </Text>
                        </Box>
                      </HStack>
                      <VStack align="flex-end" gap={1}>
                        <Text fontWeight="bold" color="var(--color-primary)" fontSize="lg">
                          ₱{product.selling_price.toLocaleString()}
                        </Text>
                        <Text color={textSecondary} fontSize="xs">
                          Cost: ₱{product.purchase_price.toLocaleString()}
                        </Text>
                        <Badge colorPalette="blue" fontSize="xs">
                          {product.created_by}
                        </Badge>
                      </VStack>
                    </Flex>
                    {index < recentProducts.length - 1 && (
                      <Separator my={2} borderColor={borderColor} />
                    )}
                  </Box>
                ))}
              </VStack>
            ) : (
              <VStack gap={4} py={8}>
                <Box
                  p={6}
                  bg="gray.50"
                  borderRadius="full"
                  color={textSecondary}
                >
                  <FiPackage size={32} />
                </Box>
                <Text color={textSecondary} textAlign="center" fontSize="md">
                  No products found. Add your first product to get started.
                </Text>
                <Button 
                  colorPalette="blue" 
                  variant="outline"
                  size="sm"
                >
                  Add Product
                </Button>
              </VStack>
            )}
          </Card.Body>
        </Card.Root>
      </Box>
    </Flex>
  )
}

export default DashboardPage