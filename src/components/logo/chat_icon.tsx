import React from 'react'
import { usePathname } from 'next/navigation';

type Props = {}

export function Chat_icon({}: Props) {
  
  const pathname = usePathname()

  return (
    <div>
        <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${pathname.endsWith('/bok') ? ("hidden") : ("block")}`}>
          <path d="M23.6458 14.4301L22.7511 14.0742C22.6872 14.235 22.6679 14.4101 22.6951 14.5811C22.7224 14.752 22.7953 14.9124 22.9061 15.0454C23.0169 15.1783 23.1615 15.2789 23.3247 15.3366C23.4879 15.3942 23.6636 15.4068 23.8334 15.3729L23.6458 14.4301ZM28.173 13.5297L28.629 12.6822L28.324 12.5186L27.9854 12.586L28.173 13.5297ZM25.2081 10.5022L26.1028 10.8582L26.2596 10.4599L26.071 10.0761L25.2081 10.5022ZM38.0759 7.69607C38.0759 10.8188 35.3313 13.4681 31.794 13.4681V15.3921C36.2587 15.3921 39.9999 12.0116 39.9999 7.69607H38.0759ZM25.5131 7.69607C25.5131 4.57339 28.2586 1.92402 31.795 1.92402V0C27.3303 0 23.5881 3.3805 23.5881 7.69607H25.5131ZM31.795 1.92402C35.3313 1.92402 38.0759 4.57339 38.0759 7.69607H39.9999C39.9999 3.3805 36.2596 0 31.795 0V1.92402ZM31.794 13.4681C30.6348 13.4681 29.5554 13.1795 28.629 12.6822L27.717 14.3763C28.9713 15.0471 30.3716 15.3962 31.794 15.3921V13.4681ZM23.8334 15.3729L28.3606 14.4725L27.9854 12.586L23.4582 13.4864L23.8334 15.3739V15.3729ZM26.071 10.0761C25.7036 9.33648 25.5133 8.5219 25.5131 7.69607H23.5881C23.5881 8.85048 23.8594 9.94525 24.3442 10.9284L26.071 10.0761ZM24.3144 10.1463L22.7511 14.0752L24.5385 14.7851L26.1008 10.8572L24.3134 10.1463H24.3144Z" fill="#C2C0BC"/>
          <path d="M28.4561 8.65839C28.9875 8.65839 29.4182 8.22769 29.4182 7.69638C29.4182 7.16508 28.9875 6.73438 28.4561 6.73438C27.9248 6.73438 27.4941 7.16508 27.4941 7.69638C27.4941 8.22769 27.9248 8.65839 28.4561 8.65839Z" fill="#C2C0BC"/>
          <path d="M31.8228 8.65839C32.3542 8.65839 32.7849 8.22769 32.7849 7.69638C32.7849 7.16508 32.3542 6.73438 31.8228 6.73438C31.2915 6.73438 30.8608 7.16508 30.8608 7.69638C30.8608 8.22769 31.2915 8.65839 31.8228 8.65839Z" fill="#C2C0BC"/>
          <path d="M35.19 8.65839C35.7213 8.65839 36.152 8.22769 36.152 7.69638C36.152 7.16508 35.7213 6.73438 35.19 6.73438C34.6587 6.73438 34.228 7.16508 34.228 7.69638C34.228 8.22769 34.6587 8.65839 35.19 8.65839Z" fill="#C2C0BC"/>
          <rect x="6.6709" y="18.8223" width="23.9236" height="13.3921" rx="4" stroke="#C2C0BC" strokeWidth="2"/>
          <path d="M33.8348 25.9226C33.8348 27.5436 32.5705 28.8693 30.9741 28.9674V22.8779C32.5705 22.9759 33.8348 24.3016 33.8348 25.9226Z" fill="#C2C0BC" stroke="#C2C0BC" strokeWidth="2"/>
          <path d="M3.43034 25.9231C3.43034 24.3021 4.69468 22.9764 6.29102 22.8783L6.29102 28.9678C4.69468 28.8698 3.43034 27.5441 3.43034 25.9231Z" fill="#C2C0BC" stroke="#C2C0BC" strokeWidth="2"/>
          <path d="M3.24023 15.3916L3.24023 26.7332" stroke="#C2C0BC" strokeWidth="2"/>
          <circle cx="3.24045" cy="12.9612" r="2.24045" stroke="#C2C0BC" strokeWidth="2"/>
          <circle cx="14.1772" cy="24.7075" r="1.8354" fill="#C2C0BC" stroke="#C2C0BC" strokeWidth="2"/>
          <circle cx="23.0883" cy="24.7075" r="1.8354" fill="#C2C0BC" stroke="#C2C0BC" strokeWidth="2"/>
        </svg>

        <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${pathname.endsWith('/bok') ? ("block") : ("hidden")}`}>
          <path d="M23.6458 14.4301L22.7511 14.0742C22.6872 14.235 22.6679 14.4101 22.6951 14.5811C22.7224 14.752 22.7953 14.9124 22.9061 15.0454C23.0169 15.1783 23.1615 15.2789 23.3247 15.3366C23.4879 15.3942 23.6636 15.4068 23.8334 15.3729L23.6458 14.4301ZM28.173 13.5297L28.629 12.6822L28.324 12.5186L27.9854 12.586L28.173 13.5297ZM25.2081 10.5022L26.1028 10.8582L26.2596 10.4599L26.071 10.0761L25.2081 10.5022ZM38.0759 7.69607C38.0759 10.8188 35.3313 13.4681 31.794 13.4681V15.3921C36.2587 15.3921 39.9999 12.0116 39.9999 7.69607H38.0759ZM25.5131 7.69607C25.5131 4.57339 28.2586 1.92402 31.795 1.92402V0C27.3303 0 23.5881 3.3805 23.5881 7.69607H25.5131ZM31.795 1.92402C35.3313 1.92402 38.0759 4.57339 38.0759 7.69607H39.9999C39.9999 3.3805 36.2596 0 31.795 0V1.92402ZM31.794 13.4681C30.6348 13.4681 29.5554 13.1795 28.629 12.6822L27.717 14.3763C28.9713 15.0471 30.3716 15.3962 31.794 15.3921V13.4681ZM23.8334 15.3729L28.3606 14.4725L27.9854 12.586L23.4582 13.4864L23.8334 15.3739V15.3729ZM26.071 10.0761C25.7036 9.33648 25.5133 8.5219 25.5131 7.69607H23.5881C23.5881 8.85048 23.8594 9.94525 24.3442 10.9284L26.071 10.0761ZM24.3144 10.1463L22.7511 14.0752L24.5385 14.7851L26.1008 10.8572L24.3134 10.1463H24.3144Z" fill="#636363"/>
          <path d="M28.4561 8.65839C28.9875 8.65839 29.4182 8.22769 29.4182 7.69638C29.4182 7.16508 28.9875 6.73438 28.4561 6.73438C27.9248 6.73438 27.4941 7.16508 27.4941 7.69638C27.4941 8.22769 27.9248 8.65839 28.4561 8.65839Z" fill="#636363"/>
          <path d="M31.8228 8.65839C32.3542 8.65839 32.7849 8.22769 32.7849 7.69638C32.7849 7.16508 32.3542 6.73438 31.8228 6.73438C31.2915 6.73438 30.8608 7.16508 30.8608 7.69638C30.8608 8.22769 31.2915 8.65839 31.8228 8.65839Z" fill="#636363"/>
          <path d="M35.19 8.65839C35.7213 8.65839 36.152 8.22769 36.152 7.69638C36.152 7.16508 35.7213 6.73438 35.19 6.73438C34.6587 6.73438 34.228 7.16508 34.228 7.69638C34.228 8.22769 34.6587 8.65839 35.19 8.65839Z" fill="#636363"/>
          <rect x="6.6709" y="18.8223" width="23.9236" height="13.3921" rx="4" stroke="#636363" strokeWidth="2"/>
          <path d="M33.8348 25.9226C33.8348 27.5436 32.5705 28.8693 30.9741 28.9674V22.8779C32.5705 22.9759 33.8348 24.3016 33.8348 25.9226Z" fill="#636363" stroke="#636363" strokeWidth="2"/>
          <path d="M3.43034 25.9231C3.43034 24.3021 4.69468 22.9764 6.29102 22.8783L6.29102 28.9678C4.69468 28.8698 3.43034 27.5441 3.43034 25.9231Z" fill="#636363" stroke="#636363" strokeWidth="2"/>
          <path d="M3.24023 15.3916L3.24023 26.7332" stroke="#636363" strokeWidth="2"/>
          <circle cx="3.24045" cy="12.9612" r="2.24045" stroke="#636363" strokeWidth="2"/>
          <circle cx="14.1772" cy="24.7075" r="1.8354" fill="#636363" stroke="#636363" strokeWidth="2"/>
          <circle cx="23.0883" cy="24.7075" r="1.8354" fill="#636363" stroke="#636363" strokeWidth="2"/>
        </svg>
    </div>
  )
}
