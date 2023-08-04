import React from 'react'
import { usePathname } from 'next/navigation';

type Props = {}

export function Summarize_icon({}: Props) {
  
  const pathname = usePathname()

  return (
    <div>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${pathname.endsWith('/Summarize') ? ("hidden") : ("block")}`}>
        <path d="M2.97676 26C2.15684 26 1.45573 25.7081 0.873437 25.1242C0.291146 24.5403 0 23.8384 0 23.0185C0 22.1985 0.291945 21.4974 0.875835 20.9151C1.45972 20.3328 2.16163 20.0417 2.98155 20.0417C3.80147 20.0417 4.50258 20.3336 5.08487 20.9175C5.66716 21.5014 5.95831 22.2033 5.95831 23.0232C5.95831 23.8432 5.66636 24.5443 5.08247 25.1266C4.49858 25.7089 3.79668 26 2.97676 26ZM16.383 26C15.5631 26 14.862 25.7081 14.2797 25.1242C13.6974 24.5403 13.4062 23.8384 13.4062 23.0185C13.4062 22.1985 13.6982 21.4974 14.2821 20.9151C14.866 20.3328 15.5679 20.0417 16.3878 20.0417C17.2077 20.0417 17.9089 20.3336 18.4912 20.9175C19.0735 21.5014 19.3646 22.2033 19.3646 23.0232C19.3646 23.8432 19.0727 24.5443 18.4888 25.1266C17.9049 25.7089 17.203 26 16.383 26ZM9.6122 19.3646C8.79225 19.3646 8.09113 19.0727 7.50884 18.4888C6.92655 17.9049 6.6354 17.203 6.6354 16.383C6.6354 15.5631 6.92735 14.862 7.51124 14.2797C8.09513 13.6974 8.79705 13.4062 9.61699 13.4062C10.4369 13.4062 11.138 13.6982 11.7203 14.2821C12.3026 14.866 12.5937 15.5679 12.5937 16.3878C12.5937 17.2077 12.3018 17.9089 11.7179 18.4912C11.134 19.0735 10.4321 19.3646 9.6122 19.3646ZM23.0184 19.3646C22.1985 19.3646 21.4974 19.0727 20.9151 18.4888C20.3328 17.9049 20.0417 17.203 20.0417 16.383C20.0417 15.5631 20.3336 14.862 20.9175 14.2797C21.5014 13.6974 22.2033 13.4062 23.0232 13.4062C23.8432 13.4062 24.5443 13.6982 25.1266 14.2821C25.7089 14.866 26 15.5679 26 16.3878C26 17.2077 25.7081 17.9089 25.1242 18.4912C24.5403 19.0735 23.8384 19.3646 23.0184 19.3646ZM2.97676 12.5937C2.15684 12.5937 1.45573 12.3018 0.873437 11.7179C0.291146 11.134 0 10.4321 0 9.6122C0 8.79225 0.291945 8.09113 0.875835 7.50884C1.45972 6.92655 2.16163 6.6354 2.98155 6.6354C3.80147 6.6354 4.50258 6.92735 5.08487 7.51124C5.66716 8.09513 5.95831 8.79705 5.95831 9.61699C5.95831 10.4369 5.66636 11.138 5.08247 11.7203C4.49858 12.3026 3.79668 12.5937 2.97676 12.5937ZM16.383 12.5937C15.5631 12.5937 14.862 12.3018 14.2797 11.7179C13.6974 11.134 13.4062 10.4321 13.4062 9.6122C13.4062 8.79225 13.6982 8.09113 14.2821 7.50884C14.866 6.92655 15.5679 6.6354 16.3878 6.6354C17.2077 6.6354 17.9089 6.92735 18.4912 7.51124C19.0735 8.09513 19.3646 8.79705 19.3646 9.61699C19.3646 10.4369 19.0727 11.138 18.4888 11.7203C17.9049 12.3026 17.203 12.5937 16.383 12.5937ZM9.6122 5.95831C8.79225 5.95831 8.09113 5.66636 7.50884 5.08247C6.92655 4.49858 6.6354 3.79668 6.6354 2.97676C6.6354 2.15683 6.92735 1.45573 7.51124 0.873437C8.09513 0.291146 8.79705 0 9.61699 0C10.4369 0 11.138 0.291946 11.7203 0.875835C12.3026 1.45972 12.5937 2.16163 12.5937 2.98155C12.5937 3.80147 12.3018 4.50258 11.7179 5.08487C11.134 5.66716 10.4321 5.95831 9.6122 5.95831ZM23.0184 5.95831C22.1985 5.95831 21.4974 5.66636 20.9151 5.08247C20.3328 4.49858 20.0417 3.79668 20.0417 2.97676C20.0417 2.15683 20.3336 1.45573 20.9175 0.873437C21.5014 0.291146 22.2033 0 23.0232 0C23.8432 0 24.5443 0.291946 25.1266 0.875835C25.7089 1.45972 26 2.16163 26 2.98155C26 3.80147 25.7081 4.50258 25.1242 5.08487C24.5403 5.66716 23.8384 5.95831 23.0184 5.95831Z" fill="#C2C0BC"/>
      </svg>

      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"  className={`${pathname.endsWith('/Summarize') ? ("block") : ("hidden")}`}>
        <path d="M2.97676 26C2.15684 26 1.45573 25.7081 0.873437 25.1242C0.291146 24.5403 0 23.8384 0 23.0185C0 22.1985 0.291945 21.4974 0.875835 20.9151C1.45972 20.3328 2.16163 20.0417 2.98155 20.0417C3.80147 20.0417 4.50258 20.3336 5.08487 20.9175C5.66716 21.5014 5.95831 22.2033 5.95831 23.0232C5.95831 23.8432 5.66636 24.5443 5.08247 25.1266C4.49858 25.7089 3.79668 26 2.97676 26ZM16.383 26C15.5631 26 14.862 25.7081 14.2797 25.1242C13.6974 24.5403 13.4062 23.8384 13.4062 23.0185C13.4062 22.1985 13.6982 21.4974 14.2821 20.9151C14.866 20.3328 15.5679 20.0417 16.3878 20.0417C17.2077 20.0417 17.9089 20.3336 18.4912 20.9175C19.0735 21.5014 19.3646 22.2033 19.3646 23.0232C19.3646 23.8432 19.0727 24.5443 18.4888 25.1266C17.9049 25.7089 17.203 26 16.383 26ZM9.6122 19.3646C8.79225 19.3646 8.09113 19.0727 7.50884 18.4888C6.92655 17.9049 6.6354 17.203 6.6354 16.383C6.6354 15.5631 6.92735 14.862 7.51124 14.2797C8.09513 13.6974 8.79705 13.4062 9.61699 13.4062C10.4369 13.4062 11.138 13.6982 11.7203 14.2821C12.3026 14.866 12.5937 15.5679 12.5937 16.3878C12.5937 17.2077 12.3018 17.9089 11.7179 18.4912C11.134 19.0735 10.4321 19.3646 9.6122 19.3646ZM23.0184 19.3646C22.1985 19.3646 21.4974 19.0727 20.9151 18.4888C20.3328 17.9049 20.0417 17.203 20.0417 16.383C20.0417 15.5631 20.3336 14.862 20.9175 14.2797C21.5014 13.6974 22.2033 13.4062 23.0232 13.4062C23.8432 13.4062 24.5443 13.6982 25.1266 14.2821C25.7089 14.866 26 15.5679 26 16.3878C26 17.2077 25.7081 17.9089 25.1242 18.4912C24.5403 19.0735 23.8384 19.3646 23.0184 19.3646ZM2.97676 12.5937C2.15684 12.5937 1.45573 12.3018 0.873437 11.7179C0.291146 11.134 0 10.4321 0 9.6122C0 8.79225 0.291945 8.09113 0.875835 7.50884C1.45972 6.92655 2.16163 6.6354 2.98155 6.6354C3.80147 6.6354 4.50258 6.92735 5.08487 7.51124C5.66716 8.09513 5.95831 8.79705 5.95831 9.61699C5.95831 10.4369 5.66636 11.138 5.08247 11.7203C4.49858 12.3026 3.79668 12.5937 2.97676 12.5937ZM16.383 12.5937C15.5631 12.5937 14.862 12.3018 14.2797 11.7179C13.6974 11.134 13.4062 10.4321 13.4062 9.6122C13.4062 8.79225 13.6982 8.09113 14.2821 7.50884C14.866 6.92655 15.5679 6.6354 16.3878 6.6354C17.2077 6.6354 17.9089 6.92735 18.4912 7.51124C19.0735 8.09513 19.3646 8.79705 19.3646 9.61699C19.3646 10.4369 19.0727 11.138 18.4888 11.7203C17.9049 12.3026 17.203 12.5937 16.383 12.5937ZM9.6122 5.95831C8.79225 5.95831 8.09113 5.66636 7.50884 5.08247C6.92655 4.49858 6.6354 3.79668 6.6354 2.97676C6.6354 2.15683 6.92735 1.45573 7.51124 0.873437C8.09513 0.291146 8.79705 0 9.61699 0C10.4369 0 11.138 0.291946 11.7203 0.875835C12.3026 1.45972 12.5937 2.16163 12.5937 2.98155C12.5937 3.80147 12.3018 4.50258 11.7179 5.08487C11.134 5.66716 10.4321 5.95831 9.6122 5.95831ZM23.0184 5.95831C22.1985 5.95831 21.4974 5.66636 20.9151 5.08247C20.3328 4.49858 20.0417 3.79668 20.0417 2.97676C20.0417 2.15683 20.3336 1.45573 20.9175 0.873437C21.5014 0.291146 22.2033 0 23.0232 0C23.8432 0 24.5443 0.291946 25.1266 0.875835C25.7089 1.45972 26 2.16163 26 2.98155C26 3.80147 25.7081 4.50258 25.1242 5.08487C24.5403 5.66716 23.8384 5.95831 23.0184 5.95831Z" fill="#636363"/>
      </svg>
    </div>
  )
}

export function Summarize_icon_white() {
  <div>
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.97676 26C2.15684 26 1.45573 25.7081 0.873437 25.1242C0.291146 24.5403 0 23.8384 0 23.0185C0 22.1985 0.291945 21.4974 0.875835 20.9151C1.45972 20.3328 2.16163 20.0417 2.98155 20.0417C3.80147 20.0417 4.50258 20.3336 5.08487 20.9175C5.66716 21.5014 5.95831 22.2033 5.95831 23.0232C5.95831 23.8432 5.66636 24.5443 5.08247 25.1266C4.49858 25.7089 3.79668 26 2.97676 26ZM16.383 26C15.5631 26 14.862 25.7081 14.2797 25.1242C13.6974 24.5403 13.4062 23.8384 13.4062 23.0185C13.4062 22.1985 13.6982 21.4974 14.2821 20.9151C14.866 20.3328 15.5679 20.0417 16.3878 20.0417C17.2077 20.0417 17.9089 20.3336 18.4912 20.9175C19.0735 21.5014 19.3646 22.2033 19.3646 23.0232C19.3646 23.8432 19.0727 24.5443 18.4888 25.1266C17.9049 25.7089 17.203 26 16.383 26ZM9.6122 19.3646C8.79225 19.3646 8.09113 19.0727 7.50884 18.4888C6.92655 17.9049 6.6354 17.203 6.6354 16.383C6.6354 15.5631 6.92735 14.862 7.51124 14.2797C8.09513 13.6974 8.79705 13.4062 9.61699 13.4062C10.4369 13.4062 11.138 13.6982 11.7203 14.2821C12.3026 14.866 12.5937 15.5679 12.5937 16.3878C12.5937 17.2077 12.3018 17.9089 11.7179 18.4912C11.134 19.0735 10.4321 19.3646 9.6122 19.3646ZM23.0184 19.3646C22.1985 19.3646 21.4974 19.0727 20.9151 18.4888C20.3328 17.9049 20.0417 17.203 20.0417 16.383C20.0417 15.5631 20.3336 14.862 20.9175 14.2797C21.5014 13.6974 22.2033 13.4062 23.0232 13.4062C23.8432 13.4062 24.5443 13.6982 25.1266 14.2821C25.7089 14.866 26 15.5679 26 16.3878C26 17.2077 25.7081 17.9089 25.1242 18.4912C24.5403 19.0735 23.8384 19.3646 23.0184 19.3646ZM2.97676 12.5937C2.15684 12.5937 1.45573 12.3018 0.873437 11.7179C0.291146 11.134 0 10.4321 0 9.6122C0 8.79225 0.291945 8.09113 0.875835 7.50884C1.45972 6.92655 2.16163 6.6354 2.98155 6.6354C3.80147 6.6354 4.50258 6.92735 5.08487 7.51124C5.66716 8.09513 5.95831 8.79705 5.95831 9.61699C5.95831 10.4369 5.66636 11.138 5.08247 11.7203C4.49858 12.3026 3.79668 12.5937 2.97676 12.5937ZM16.383 12.5937C15.5631 12.5937 14.862 12.3018 14.2797 11.7179C13.6974 11.134 13.4062 10.4321 13.4062 9.6122C13.4062 8.79225 13.6982 8.09113 14.2821 7.50884C14.866 6.92655 15.5679 6.6354 16.3878 6.6354C17.2077 6.6354 17.9089 6.92735 18.4912 7.51124C19.0735 8.09513 19.3646 8.79705 19.3646 9.61699C19.3646 10.4369 19.0727 11.138 18.4888 11.7203C17.9049 12.3026 17.203 12.5937 16.383 12.5937ZM9.6122 5.95831C8.79225 5.95831 8.09113 5.66636 7.50884 5.08247C6.92655 4.49858 6.6354 3.79668 6.6354 2.97676C6.6354 2.15683 6.92735 1.45573 7.51124 0.873437C8.09513 0.291146 8.79705 0 9.61699 0C10.4369 0 11.138 0.291946 11.7203 0.875835C12.3026 1.45972 12.5937 2.16163 12.5937 2.98155C12.5937 3.80147 12.3018 4.50258 11.7179 5.08487C11.134 5.66716 10.4321 5.95831 9.6122 5.95831ZM23.0184 5.95831C22.1985 5.95831 21.4974 5.66636 20.9151 5.08247C20.3328 4.49858 20.0417 3.79668 20.0417 2.97676C20.0417 2.15683 20.3336 1.45573 20.9175 0.873437C21.5014 0.291146 22.2033 0 23.0232 0C23.8432 0 24.5443 0.291946 25.1266 0.875835C25.7089 1.45972 26 2.16163 26 2.98155C26 3.80147 25.7081 4.50258 25.1242 5.08487C24.5403 5.66716 23.8384 5.95831 23.0184 5.95831Z" fill="white"/>
    </svg>
  </div>
}

