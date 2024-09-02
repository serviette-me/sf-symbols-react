import { IconProps } from "../../types"

export default function PlusCircleFillIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM8.2027 14.9161C8.2027 13.7541 9.0507 12.8791 10.1857 12.8791H12.8927V10.1581C12.8927 9.0371 13.7817 8.1761 14.9297 8.1761C16.0917 8.1761 16.9667 9.0371 16.9667 10.1581V12.8791H19.6877C20.8227 12.8791 21.6697 13.7541 21.6697 14.9161C21.6697 16.0781 20.8227 16.9531 19.6877 16.9531H16.9667V19.6741C16.9667 20.7951 16.0917 21.6421 14.9297 21.6421C13.7817 21.6421 12.8927 20.7951 12.8927 19.6741V16.9531H10.1857C9.0507 16.9531 8.2027 16.0781 8.2027 14.9161Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM7.7387 14.4376C7.7387 13.5076 8.4077 12.8246 9.3237 12.8246H12.8237V9.3246C12.8237 8.4086 13.5077 7.7246 14.4377 7.7246C15.3667 7.7246 16.0507 8.4086 16.0507 9.3246V12.8246H19.5647C20.4667 12.8246 21.1507 13.5076 21.1507 14.4376C21.1507 15.3676 20.4667 16.0506 19.5647 16.0506H16.0507V19.5506C16.0507 20.4666 15.3667 21.1366 14.4377 21.1366C13.5077 21.1366 12.8237 20.4666 12.8237 19.5506V16.0506H9.3237C8.4077 16.0506 7.7387 15.3676 7.7387 14.4376Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM7.9847 14.6974C7.9847 13.6444 8.7497 12.8654 9.7757 12.8654H12.8657V9.7754C12.8657 8.7364 13.6447 7.9704 14.6977 7.9704C15.7497 7.9704 16.5427 8.7364 16.5427 9.7754V12.8654H19.6327C20.6577 12.8654 21.4237 13.6444 21.4237 14.6974C21.4237 15.7504 20.6577 16.5294 19.6327 16.5294H16.5427V19.6194C16.5427 20.6444 15.7497 21.4104 14.6977 21.4104C13.6447 21.4104 12.8657 20.6444 12.8657 19.6194V16.5294H9.7757C8.7497 16.5294 7.9847 15.7504 7.9847 14.6974Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM7.2737 13.727C7.2737 13.18 7.6567 12.797 8.2027 12.797H12.8107V8.189C12.8107 7.656 13.1797 7.26 13.6987 7.26C14.2457 7.26 14.6287 7.643 14.6287 8.189V12.797H19.2367C19.7697 12.797 20.1527 13.18 20.1527 13.727C20.1527 14.232 19.7557 14.615 19.2367 14.615H14.6287V19.223C14.6287 19.756 14.2457 20.139 13.6987 20.139C13.1797 20.139 12.8107 19.742 12.8107 19.223V14.615H8.2027C7.6697 14.615 7.2737 14.232 7.2737 13.727Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM7.4377 14.1371C7.4377 13.3441 7.9977 12.7831 8.7907 12.7831H12.7827V8.7771C12.7827 7.9981 13.3297 7.4241 14.1097 7.4241C14.9027 7.4241 15.4627 7.9981 15.4627 8.7771V12.7831H19.4687C20.2477 12.7831 20.8087 13.3441 20.8087 14.1371C20.8087 14.9161 20.2477 15.4631 19.4687 15.4631H15.4627V19.4691C15.4627 20.2481 14.9027 20.8081 14.1097 20.8081C13.3297 20.8081 12.7827 20.2481 12.7827 19.4691V15.4631H8.7907C7.9977 15.4631 7.4377 14.9161 7.4377 14.1371Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM7.2737 13.9594C7.2737 13.2484 7.7657 12.7554 8.4767 12.7554H12.7557V8.4764C12.7557 7.7654 13.2347 7.2594 13.9317 7.2594C14.6427 7.2594 15.1347 7.7654 15.1347 8.4764V12.7554H19.4277C20.1247 12.7554 20.6307 13.2484 20.6307 13.9594C20.6307 14.6564 20.1247 15.1214 19.4277 15.1214H15.1347V19.4144C15.1347 20.1254 14.6427 20.6174 13.9317 20.6174C13.2347 20.6174 12.7557 20.1114 12.7557 19.4144V15.1214H8.4767C7.7657 15.1214 7.2737 14.6564 7.2737 13.9594Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM7.5607 14.2739C7.5607 13.4119 8.1757 12.7969 9.0237 12.7969H12.8107V9.0099C12.8107 8.1759 13.4117 7.5609 14.2457 7.5609C15.1077 7.5609 15.7227 8.1759 15.7227 9.0099V12.7969H19.5097C20.3437 12.7969 20.9587 13.4119 20.9587 14.2739C20.9587 15.1079 20.3437 15.7089 19.5097 15.7089H15.7227V19.5099C15.7227 20.3439 15.1077 20.9449 14.2457 20.9449C13.4117 20.9449 12.8107 20.3439 12.8107 19.5099V15.7089H9.0237C8.1757 15.7089 7.5607 15.1079 7.5607 14.2739Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM7.2867 13.4122C7.2867 13.0972 7.5197 12.8512 7.8337 12.8512H12.8657V7.8202C12.8657 7.5192 13.1117 7.2732 13.3847 7.2732C13.7127 7.2732 13.9457 7.5062 13.9457 7.8202V12.8512H18.9907C19.2907 12.8512 19.5237 13.0972 19.5237 13.4122C19.5237 13.6992 19.2777 13.9312 18.9907 13.9312H13.9457V18.9762C13.9457 19.2912 13.7127 19.5102 13.3847 19.5102C13.1117 19.5102 12.8657 19.2632 12.8657 18.9762V13.9312H7.8337C7.5327 13.9312 7.2867 13.6992 7.2867 13.4122Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM7.3007 13.2481C7.3007 13.0431 7.4507 12.8791 7.6427 12.8791H12.9067V7.6291C12.9067 7.4371 13.0707 7.2731 13.2347 7.2731C13.4397 7.2731 13.6037 7.4241 13.6037 7.6291V12.8791H18.8537C19.0587 12.8791 19.2087 13.0431 19.2087 13.2481C19.2087 13.4121 19.0317 13.5761 18.8537 13.5761H13.6037V18.8261C13.6037 19.0311 13.4397 19.1811 13.2347 19.1811C13.0707 19.1811 12.9067 19.0171 12.9067 18.8261V13.5761H7.6427C7.4647 13.5761 7.3007 13.4121 7.3007 13.2481Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
