'use client'

import React, { useState } from 'react'
import { 
  Box, 
  VStack, 
  HStack, 
  Heading, 
  Text, 
  Button, 
  IconButton
} from '@chakra-ui/react'

interface SidebarProps {
  storeId: string
  username: string
  activeMenu: string
  onMenuChange: (menuId: string) => void
  onLogout: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ 
  storeId, 
  username, 
  activeMenu, 
  onMenuChange, 
  onLogout 
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false)

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'prices', label: 'Prices', icon: '💰' },
    { id: 'categories', label: 'Categories', icon: '🏷️' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <Box w="250px" bg="rgba(255, 255, 255, 0.1)" borderRight="1px" borderColor="rgba(255, 255, 255, 0.2)" position="fixed" h="100vh" zIndex={10} backdropFilter="blur(10px)">
      <VStack h="full" gap={0}>
        {/* Logo/Header */}
        <Box p={6} w="full" borderBottom="1px" borderColor="rgba(255, 255, 255, 0.2)">
          <Heading size="md" color="var(--color-primary)">
            <Text as="span" color="var(--color-primary)">{'{'}</Text> helloibe <Text as="span" color="var(--color-primary)">{'}'}</Text>
          </Heading>
          <Text fontSize="sm" color="rgba(255, 255, 255, 0.7)" mt={1}>Store Management</Text>
        </Box>

        {/* Menu Items */}
        <VStack gap={1} w="full" p={4} flex={1}>
          {menuItems.map((item) => (
            <Button
              key={item.id}
              w="full"
              justifyContent="flex-start"
              variant={activeMenu === item.id ? 'solid' : 'ghost'}
              bg={activeMenu === item.id ? 'var(--color-primary)' : 'transparent'}
              color={activeMenu === item.id ? 'var(--color-primary-background)' : 'rgba(255, 255, 255, 0.8)'}
              _hover={{
                bg: activeMenu === item.id ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.1)'
              }}
              onClick={() => onMenuChange(item.id)}
            >
              <Text mr={2}>{item.icon}</Text>
              {item.label}
            </Button>
          ))}
        </VStack>

        {/* User Info */}
        <Box p={4} w="full" borderTop="1px" borderColor="rgba(255, 255, 255, 0.2)">
          <VStack gap={2}>
            <HStack w="full" justify="space-between">
              <VStack align="flex-start" gap={0}>
                <Text fontSize="sm" fontWeight="medium" color="rgba(255, 255, 255, 0.9)">{username}</Text>
                <Text fontSize="xs" color="rgba(255, 255, 255, 0.6)">Store ID: {storeId}</Text>
              </VStack>
              <IconButton
                size="sm"
                aria-label="User menu"
                onClick={() => setShowUserMenu(!showUserMenu)}
                color="rgba(255, 255, 255, 0.8)"
                _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
              >
                👤
              </IconButton>
            </HStack>
            {showUserMenu && (
              <Box
                position="absolute"
                bottom="100%"
                right={4}
                mb={2}
                bg="rgba(255, 255, 255, 0.95)"
                border="1px"
                borderColor="rgba(255, 255, 255, 0.2)"
                borderRadius="md"
                boxShadow="lg"
                zIndex={20}
                minW="150px"
                backdropFilter="blur(10px)"
              >
                <VStack>
                  <Button variant="ghost" size="sm" w="full" justifyContent="flex-start" px={4} py={2}>
                    Profile
                  </Button>
                  <Button variant="ghost" size="sm" w="full" justifyContent="flex-start" px={4} py={2}>
                    Settings
                  </Button>
                  <Button variant="ghost" size="sm" w="full" justifyContent="flex-start" px={4} py={2} onClick={onLogout}>
                    Logout
                  </Button>
                </VStack>
              </Box>
            )}
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default Sidebar 