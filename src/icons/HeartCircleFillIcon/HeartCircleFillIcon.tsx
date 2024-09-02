import { IconProps } from "../../types"

export default function HeartCircleFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM11.6757 8.9551C13.2887 8.9551 14.3827 9.8981 14.9157 10.8141C15.4627 9.8981 16.5567 8.9551 18.1697 8.9551C20.3027 8.9551 22.0797 10.6371 22.0797 13.2341C22.0797 17.8691 16.6247 21.0551 15.8457 21.4511C15.5727 21.5881 15.2167 21.7931 14.9297 21.7931C14.6427 21.7931 14.2597 21.5881 13.9867 21.4511C13.2347 21.0271 7.7657 17.8691 7.7657 13.2341C7.7657 10.6371 9.5427 8.9551 11.6757 8.9551Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM11.1157 8.3396C12.6737 8.3396 13.8087 9.2426 14.4377 10.3496C15.0527 9.2426 16.1877 8.3396 17.7457 8.3396C20.0157 8.3396 21.7657 10.0896 21.7657 12.6326C21.7657 16.8026 17.0627 20.0836 15.2437 21.2186C14.9977 21.3556 14.6837 21.5466 14.4507 21.5466C14.2187 21.5466 13.8637 21.3556 13.6167 21.2186C11.7987 20.0836 7.0957 16.8026 7.0957 12.6326C7.0957 10.0896 8.8457 8.3396 11.1157 8.3396Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM11.4157 8.6684C13.0017 8.6684 14.1097 9.5974 14.6837 10.5954C15.2717 9.5974 16.3787 8.6684 17.9647 8.6684C20.1657 8.6684 21.9297 10.3904 21.9297 12.9614C21.9297 17.3774 16.8297 20.6034 15.5727 21.3554C15.2987 21.4784 14.9567 21.6834 14.6977 21.6834C14.4377 21.6834 14.0687 21.4784 13.8087 21.3554C12.5507 20.5894 7.4507 17.3774 7.4507 12.9614C7.4507 10.3904 9.2147 8.6684 11.4157 8.6684Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM10.3637 7.506C11.8537 7.506 13.0427 8.395 13.7127 9.611C14.3827 8.395 15.5857 7.506 17.0627 7.506C19.4007 7.506 21.1097 9.283 21.1097 11.703C21.1097 15.504 16.9397 18.84 14.3147 20.617C14.1227 20.754 13.8907 20.904 13.7267 20.904C13.5757 20.904 13.3167 20.754 13.0977 20.617C10.4177 18.922 6.3167 15.504 6.3167 11.703C6.3167 9.283 8.0117 7.506 10.3637 7.506Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM10.7597 7.9431C12.2907 7.9431 13.4397 8.8181 14.1227 10.0351C14.7927 8.8181 15.9547 7.9431 17.4867 7.9431C19.8237 7.9431 21.5607 9.7211 21.5607 12.2501C21.5607 16.1051 17.3497 19.4411 14.8617 21.0551C14.6287 21.2051 14.3417 21.3831 14.1367 21.3831C13.9457 21.3831 13.6167 21.2051 13.3707 21.0551C10.8687 19.4691 6.6717 16.1051 6.6717 12.2501C6.6717 9.7211 8.4077 7.9431 10.7597 7.9431Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM10.5547 7.7114C12.0727 7.7114 13.2347 8.5724 13.9457 9.8574C14.6427 8.5724 15.8317 7.7114 17.3357 7.7114C19.7147 7.7114 21.4507 9.5154 21.4507 12.0174C21.4507 15.7094 17.5137 19.0864 14.6427 20.9594C14.4237 21.1234 14.1507 21.3004 13.9727 21.3004C13.7947 21.3004 13.4807 21.1094 13.2347 20.9594C10.3497 19.1274 6.4397 15.7094 6.4397 12.0174C6.4397 9.5154 8.1617 7.7114 10.5547 7.7114Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM10.9097 8.1209C12.4547 8.1209 13.6037 9.0099 14.2597 10.1719C14.9027 9.0099 16.0647 8.1209 17.5957 8.1209C19.9067 8.1209 21.6427 9.8849 21.6427 12.4139C21.6427 16.4059 17.2267 19.7149 15.0257 21.1229C14.7927 21.2739 14.4917 21.4649 14.2737 21.4649C14.0687 21.4649 13.7267 21.2739 13.4807 21.1229C11.2657 19.7419 6.8637 16.4059 6.8637 12.4139C6.8637 9.8849 8.5997 8.1209 10.9097 8.1209Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM10.1037 7.2322C11.5667 7.2322 12.7697 8.1622 13.4117 9.2832C14.0407 8.1622 15.2717 7.2322 16.7067 7.2322C18.9907 7.2322 20.6577 8.9692 20.6577 11.2792C20.6577 15.2302 16.2007 18.4982 13.8907 20.1792C13.7267 20.2892 13.5347 20.3852 13.4117 20.3852C13.2887 20.3852 13.0837 20.2752 12.9337 20.1792C10.5137 18.6622 6.1527 15.2302 6.1527 11.2792C6.1527 8.9692 7.8207 7.2322 10.1037 7.2322Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM9.9667 7.0821C11.4157 7.0821 12.6467 8.0251 13.2477 9.1051C13.8637 8.0251 15.0937 7.0821 16.5297 7.0821C18.7717 7.0821 20.4397 8.7911 20.4397 11.0601C20.4397 15.0801 15.8187 18.3201 13.6577 19.9471C13.5217 20.0431 13.3577 20.1111 13.2477 20.1111C13.1527 20.1111 12.9747 20.0291 12.8377 19.9471C10.5687 18.5121 6.0707 15.0801 6.0707 11.0601C6.0707 8.7911 7.7247 7.0821 9.9667 7.0821Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}