import { IconProps } from "../../types"

export default function IpadCaseIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.44140625 34.26171875"
          className={className}
        >
          <path
            d="              M-0.0003 28.9706C-0.0003 32.2796 1.9827 34.2616 5.3047 34.2616H21.1367C24.4587 34.2616 26.4417 32.2796 26.4417 28.9706V5.2906C26.4417 1.9826 24.4587 -0.0004 21.1367 -0.0004H5.3047C1.9827 -0.0004 -0.0003 1.9826 -0.0003 5.2906ZM10.8557 28.9436C10.0217 28.9436 9.2967 28.2326 9.2967 27.3846V6.8766C9.2967 6.0296 10.0217 5.3186 10.8557 5.3186C11.7307 5.3186 12.4137 6.0296 12.4137 6.8766V27.3846C12.4137 28.2326 11.7307 28.9436 10.8557 28.9436ZM19.1267 28.9436C18.2517 28.9436 17.5687 28.2326 17.5687 27.3846V6.8766C17.5687 6.0296 18.2517 5.3186 19.1267 5.3186C19.9607 5.3186 20.6857 6.0296 20.6857 6.8766V27.3846C20.6857 28.2326 19.9607 28.9436 19.1267 28.9436Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.650390625 32.525390625"
          className={className}
        >
          <path
            d="              M-0.0003 28.0686C-0.0003 30.8166 1.7497 32.5256 4.5527 32.5256H20.0977C22.8867 32.5256 24.6507 30.8166 24.6507 28.0686V4.4566C24.6507 1.7086 22.8867 -0.0004 20.0977 -0.0004H4.5527C1.7497 -0.0004 -0.0003 1.7086 -0.0003 4.4566ZM10.2537 27.7676C9.5977 27.7676 9.0237 27.2206 9.0237 26.5506V5.9746C9.0237 5.3046 9.5977 4.7576 10.2537 4.7576C10.9377 4.7576 11.4847 5.3046 11.4847 5.9746V26.5506C11.4847 27.2206 10.9377 27.7676 10.2537 27.7676ZM17.8687 27.7676C17.1857 27.7676 16.6527 27.2206 16.6527 26.5506V5.9746C16.6527 5.3046 17.1857 4.7576 17.8687 4.7576C18.5387 4.7576 19.0997 5.3046 19.0997 5.9746V26.5506C19.0997 27.2206 18.5387 27.7676 17.8687 27.7676Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.59375 33.455078125"
          className={className}
        >
          <path
            d="              M-0.0003 28.5465C-0.0003 31.5955 1.8727 33.4555 4.9497 33.4555H20.6447C23.7207 33.4555 25.5937 31.5955 25.5937 28.5465V4.8945C25.5937 1.8595 23.7207 0.0005 20.6447 0.0005H4.9497C1.8727 0.0005 -0.0003 1.8595 -0.0003 4.8945ZM10.5687 28.3965C9.8167 28.3965 9.1737 27.7535 9.1737 26.9885V6.4535C9.1737 5.7015 9.8167 5.0585 10.5687 5.0585C11.3617 5.0585 11.9767 5.7015 11.9767 6.4535V26.9885C11.9767 27.7535 11.3617 28.3965 10.5687 28.3965ZM18.5387 28.3965C17.7457 28.3965 17.1307 27.7535 17.1307 26.9885V6.4535C17.1307 5.7015 17.7457 5.0585 18.5387 5.0585C19.2907 5.0585 19.9337 5.7015 19.9337 6.4535V26.9885C19.9337 27.7535 19.2907 28.3965 18.5387 28.3965Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.271484375 30.119140625"
          className={className}
        >
          <path
            d="              M-0.0003 26.5368C-0.0003 28.7518 1.4217 30.1188 3.6917 30.1188H18.5667C20.8497 30.1188 22.2717 28.7518 22.2717 26.5368V3.5958C22.2717 1.3808 20.8497 -0.0002 18.5667 -0.0002H3.6917C1.4217 -0.0002 -0.0003 1.3808 -0.0003 3.5958ZM9.5977 26.1408C9.2017 26.1408 8.8867 25.8258 8.8867 25.4298V4.7028C8.8867 4.3068 9.2017 3.9918 9.5977 3.9918C9.9807 3.9918 10.3087 4.3068 10.3087 4.7028V25.4298C10.3087 25.8258 9.9807 26.1408 9.5977 26.1408ZM16.3247 26.1408C15.9417 26.1408 15.6137 25.8258 15.6137 25.4298V4.7028C15.6137 4.3068 15.9417 3.9918 16.3247 3.9918C16.7207 3.9918 17.0347 4.3068 17.0347 4.7028V25.4298C17.0347 25.8258 16.7207 26.1408 16.3247 26.1408Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.48828125 31.431640625"
          className={className}
        >
          <path
            d="              M-0.0003 27.5078C-0.0003 29.8868 1.5997 31.4318 4.0607 31.4318H19.4277C21.8887 31.4318 23.4887 29.8868 23.4887 27.5078V3.9237C23.4887 1.5587 21.8887 -0.0003 19.4277 -0.0003H4.0607C1.5997 -0.0003 -0.0003 1.5587 -0.0003 3.9237ZM9.8707 27.0428C9.3107 27.0428 8.8597 26.5778 8.8597 26.0178V5.4138C8.8597 4.8668 9.3107 4.4028 9.8707 4.4028C10.4317 4.4028 10.8827 4.8668 10.8827 5.4138V26.0178C10.8827 26.5778 10.4317 27.0428 9.8707 27.0428ZM17.0767 27.0428C16.5017 27.0428 16.0507 26.5778 16.0507 26.0178V5.4138C16.0507 4.8668 16.5017 4.4028 17.0767 4.4028C17.6227 4.4028 18.0877 4.8668 18.0877 5.4138V26.0178C18.0877 26.5778 17.6227 27.0428 17.0767 27.0428Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.845703125 30.802734375"
          className={className}
        >
          <path
            d="              M-0.0003 27.1933C-0.0003 29.3533 1.5177 30.8023 3.7867 30.8023H19.0587C21.3277 30.8023 22.8457 29.3533 22.8457 27.1933V3.6233C22.8457 1.4633 21.3277 0.0003 19.0587 0.0003H3.7867C1.5177 0.0003 -0.0003 1.4633 -0.0003 3.6233ZM9.6527 26.6193C9.1597 26.6193 8.7637 26.2093 8.7637 25.7173V5.0993C8.7637 4.6073 9.1597 4.1973 9.6527 4.1973C10.1447 4.1973 10.5547 4.6073 10.5547 5.0993V25.7173C10.5547 26.2093 10.1447 26.6193 9.6527 26.6193ZM16.6247 26.6193C16.1327 26.6193 15.7227 26.2093 15.7227 25.7173V5.0993C15.7227 4.6073 16.1327 4.1973 16.6247 4.1973C17.1177 4.1973 17.5137 4.6073 17.5137 5.0993V25.7173C17.5137 26.2093 17.1177 26.6193 16.6247 26.6193Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.994140625 31.896484375"
          className={className}
        >
          <path
            d="              M-0.0003 27.7542C-0.0003 30.2832 1.6677 31.8962 4.2657 31.8962H19.7147C22.3127 31.8962 23.9937 30.2832 23.9937 27.7542V4.1562C23.9937 1.6272 22.3127 0.0002 19.7147 0.0002H4.2657C1.6677 0.0002 -0.0003 1.6272 -0.0003 4.1562ZM10.0347 27.3572C9.4337 27.3572 8.9277 26.8512 8.9277 26.2502V5.6602C8.9277 5.0452 9.4337 4.5532 10.0347 4.5532C10.6507 4.5532 11.1427 5.0452 11.1427 5.6602V26.2502C11.1427 26.8512 10.6507 27.3572 10.0347 27.3572ZM17.4177 27.3572C16.8027 27.3572 16.3107 26.8512 16.3107 26.2502V5.6602C16.3107 5.0452 16.8027 4.5532 17.4177 4.5532C18.0197 4.5532 18.5257 5.0452 18.5257 5.6602V26.2502C18.5257 26.8512 18.0197 27.3572 17.4177 27.3572Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.505859375 29.216796875"
          className={className}
        >
          <path
            d="              M-0.0003 25.676C-0.0003 27.959 1.2847 29.217 3.5817 29.217H17.9237C20.2207 29.217 21.5057 27.959 21.5057 25.676V3.555C21.5057 1.271 20.2207 0 17.9237 0H3.5817C1.2847 0 -0.0003 1.271 -0.0003 3.555ZM9.5157 25.512C9.2557 25.512 9.0507 25.307 9.0507 25.047V4.17C9.0507 3.924 9.2557 3.705 9.5157 3.705C9.7757 3.705 9.9807 3.924 9.9807 4.17V25.047C9.9807 25.307 9.7757 25.512 9.5157 25.512ZM15.9417 25.512C15.6817 25.512 15.4767 25.307 15.4767 25.047V4.17C15.4767 3.924 15.6817 3.705 15.9417 3.705C16.2017 3.705 16.4067 3.924 16.4067 4.17V25.047C16.4067 25.307 16.2017 25.512 15.9417 25.512Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.123046875 28.751953125"
          className={className}
        >
          <path
            d="              M-0.0003 25.2249C-0.0003 27.5349 1.2167 28.7519 3.5137 28.7519H17.5957C19.9067 28.7519 21.1227 27.5349 21.1227 25.2249V3.5269C21.1227 1.2169 19.9067 -0.0001 17.5957 -0.0001H3.5137C1.2167 -0.0001 -0.0003 1.2169 -0.0003 3.5269ZM9.4747 25.1839C9.2837 25.1839 9.1327 25.0329 9.1327 24.8559V3.8969C9.1327 3.7189 9.2837 3.5679 9.4747 3.5679C9.6527 3.5679 9.8167 3.7189 9.8167 3.8969V24.8559C9.8167 25.0329 9.6527 25.1839 9.4747 25.1839ZM15.7367 25.1839C15.5587 25.1839 15.4087 25.0329 15.4087 24.8559V3.8969C15.4087 3.7189 15.5587 3.5679 15.7367 3.5679C15.9277 3.5679 16.0777 3.7189 16.0777 3.8969V24.8559C16.0777 25.0329 15.9277 25.1839 15.7367 25.1839Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}