'use client';

import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { QrCode, UserPlus, Download, Check, Mail } from 'lucide-react';

export default function QrCodeCard() {
  const canvasRef = useRef(null);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+5511974282313';

  // vCard specification (v3.0 format supported by iOS & Android)
  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Mascarenhas;Phelipe;;;',
    'FN:Phelipe Mascarenhas',
    'ORG:PH MASC Soluções em Dados',
    'TITLE:Consultor de IA | Cientista de Dados',
    `TEL;TYPE=CELL,VOICE:${phoneNumber}`,
    'EMAIL;TYPE=INTERNET,WORK:mascarenhas@phmasc.com.br',
    'URL:https://www.phmasc.com.br',
    'URL:https://github.com/phmasc',
    'END:VCARD'
  ].join('\n');

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        vCardData,
        {
          width: 200,
          margin: 1.5,
          color: {
            dark: '#0A0A1A',
            light: '#FFFFFF',
          },
        },
        (error) => {
          if (error) console.error('Error generating vCard QR code:', error);
        }
      );
    }

    // Create a downloadable blob for .vcf file
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);

    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [vCardData]);

  const handleDownloadVCard = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="bg-ph-surface border border-ph-border rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden group hover:border-ph-purple transition-all duration-300">
      <div className="flex items-center gap-2 mb-2 text-ph-blue text-sm font-semibold tracking-wide">
        <UserPlus size={18} className="text-ph-magenta" />
        <span>SALVAR CONTATO NO CELULAR</span>
      </div>

      <p className="text-ph-muted text-xs mb-3">
        Escaneie o QR Code abaixo para salvar o contato direto na agenda do seu smartphone.
      </p>

      {/* QR Code Canvas */}
      <div className="bg-white p-2.5 rounded-lg shadow-inner my-1 border border-ph-border">
        <canvas ref={canvasRef} className="block rounded-sm max-w-full" />
      </div>

      <div className="text-xs text-ph-muted mt-2 mb-4 space-y-1">
        <p className="font-semibold text-white">Phelipe Mascarenhas</p>
        <p className="flex items-center justify-center gap-1 text-ph-blue">
          <Mail size={12} />
          <span>mascarenhas@phmasc.com.br</span>
        </p>
      </div>

      {/* Action Button: Download .vcf file directly for mobile visitors */}
      {downloadUrl && (
        <a
          href={downloadUrl}
          download="Phelipe_Mascarenhas_PHMasc.vcf"
          onClick={handleDownloadVCard}
          className="w-full py-3 px-4 rounded-lg bg-btn-gradient text-white font-semibold text-sm hover:brightness-110 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
        >
          {downloaded ? (
            <>
              <Check size={18} />
              <span>Contato Baixado!</span>
            </>
          ) : (
            <>
              <Download size={18} />
              <span>Baixar Cartão de Contato (.vcf)</span>
            </>
          )}
        </a>
      )}
    </div>
  );
}
