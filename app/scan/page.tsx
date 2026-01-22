'use client'
import React, { useState, useRef } from 'react';
import BarcodeScanner from '../../components/scanner/BarcodeScanner';
import { Box, Portal, Stack } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import routes from '@/routes';
import Navbar from '@/components/navbar/Navbar';

const TestView = () => {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const lastScanRef = useRef<string | null>(null);

  return (
    <Box>
      <Box>
        <Sidebar routes={routes}></Sidebar>
        <Box
          float='right'
          minHeight='100vh'
          h='100%'
          overflow='auto'
          position='relative'
          w={{ base: '100%', lg: 'calc(100% - 290px)' }}
          maxW={{ base: '100%', lg: 'calc(100% - 290px)' }}
          transition='all 0.15s cubic-bezier(0.685, 0.0473, 0.346, 1)'
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box position='fixed' top='0' left='0' right='0' zIndex='100'>
              <Navbar />
            </Box>
          </Portal>
          <Box
            mx="auto"
            p={{ base: '20px', md: '30px' }}
            pe="20px"
            minH="100vh"
            bgColor='#031e3f'
            pt="50px"
          >
            <Box mt='75px'>
              <Stack w='full' gap='5'>
                <div style={{ marginTop: 16 }}>
                  <div><strong>Scanned Value:</strong> {result}</div>
                  {error && <div style={{ color: 'red' }}><strong>Error:</strong> {error}</div>}
                </div>
                <BarcodeScanner
                  onScan={(value) => {
                    if (lastScanRef.current === value) return;
                    lastScanRef.current = value;
                    setResult(value);
                    setError(null);
                  }}
                  onError={(err) => setError(String(err))}
                  style={{ width: '100%', aspectRatio: '1/1', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TestView