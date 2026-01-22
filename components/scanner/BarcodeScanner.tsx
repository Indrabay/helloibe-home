// @ts-ignore
// If you want, you can move this to a global.d.ts file:
'use client'

import React, { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export interface BarcodeScannerProps {
  onScan: (value: string) => void;
  onError?: (error: any) => void;
  style?: React.CSSProperties;
  className?: string;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({
  onScan,
  onError,
  style,
  className,
}) => {
  const scannerRef = useRef<HTMLDivElement>(null);
  const html5QrcodeRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    if (!scannerRef.current) return;
    const scannerId = scannerRef.current.id || 'html5-qrcode';
    // Clean up any previous scanner
    if (html5QrcodeRef.current) {
      const stop = html5QrcodeRef.current.stop;
      const clear = html5QrcodeRef.current.clear;
      if (typeof stop === 'function') {
        Promise.resolve(stop.call(html5QrcodeRef.current)).catch(() => {});
      }
      if (typeof clear === 'function') {
        Promise.resolve(clear.call(html5QrcodeRef.current)).catch(() => {});
      }
      html5QrcodeRef.current = null;
    }

    const html5Qrcode = new Html5Qrcode(scannerId);
    html5QrcodeRef.current = html5Qrcode;

    html5Qrcode.start(
      { facingMode: 'environment' },
      {
        fps: 15,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0,
      },
      (decodedText: string) => {
        setTimeout(() => onScan(decodedText), 0);
      },
      (error: any) => {
        if (onError) setTimeout(() => onError(error), 0);
      }
    ).catch((err) => {
      if (onError) setTimeout(() => onError(err), 0);
    });

    return () => {
      if (html5QrcodeRef.current) {
        const stop = html5QrcodeRef.current.stop;
        const clear = html5QrcodeRef.current.clear;
        if (typeof stop === 'function') {
          Promise.resolve(stop.call(html5QrcodeRef.current)).catch(() => {});
        }
        if (typeof clear === 'function') {
          Promise.resolve(clear.call(html5QrcodeRef.current)).catch(() => {});
        }
        html5QrcodeRef.current = null;
      }
    };
  }, [onScan, onError]);

  return (
    <div
      ref={scannerRef}
      id="html5-qrcode"
      style={style}
      className={className}
    />
  );
};

export default BarcodeScanner; 