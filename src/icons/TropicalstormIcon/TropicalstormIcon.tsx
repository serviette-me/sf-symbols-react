import { IconProps } from "../../types"

export default function TropicalstormIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.783203125 32.67578125"
          className={className}
        >
          <path
            d="              M-0.0003 30.885C-0.0003 31.869 0.7107 32.676 1.8187 32.676C10.5687 32.676 18.0327 25.758 18.0327 16.338C18.0327 11.867 14.3557 8.189 9.8847 8.189C8.9957 8.189 8.1207 8.34 7.3147 8.627C9.7617 5.482 13.6717 3.596 17.9647 3.596C19.0587 3.596 19.7827 2.816 19.7827 1.777C19.7827 0.793 19.0587 0 17.9647 0C9.2147 0 1.7497 6.918 1.7497 16.338C1.7497 20.809 5.4277 24.486 9.8847 24.486C10.7867 24.486 11.6487 24.336 12.4687 24.049C10.0217 27.18 6.0977 29.08 1.8187 29.08C0.7107 29.08 -0.0003 29.859 -0.0003 30.885ZM5.3457 16.338C5.3457 13.863 7.4237 11.785 9.8847 11.785C12.3597 11.785 14.4377 13.863 14.4377 16.338C14.4377 18.799 12.3597 20.891 9.8847 20.891C7.4237 20.891 5.3457 18.799 5.3457 16.338ZM7.7387 16.338C7.7387 17.486 8.6817 18.43 9.8297 18.43C10.9787 18.43 11.9217 17.473 11.9217 16.338C11.9217 15.189 10.9787 14.246 9.8297 14.246C8.6817 14.246 7.7387 15.189 7.7387 16.338Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.607421875 30.59765625"
          className={className}
        >
          <path
            d="              M-0.0003 29.1899C-0.0003 29.9549 0.5877 30.5979 1.4357 30.5979C9.9117 30.5979 16.8577 24.3499 16.8577 15.2989C16.8577 11.1559 13.4397 7.7379 9.2967 7.7379C8.1487 7.7379 7.0687 8.0389 6.1527 8.5719C8.3667 4.9769 12.4687 2.8299 17.1717 2.8299C18.0197 2.8299 18.6077 2.2009 18.6077 1.4079C18.6077 0.6289 18.0197 -0.0001 17.1717 -0.0001C8.6817 -0.0001 1.7497 6.2479 1.7497 15.2989C1.7497 19.4409 5.1677 22.8589 9.2967 22.8589C10.4457 22.8589 11.5257 22.5589 12.4547 22.0249C10.2267 25.6079 6.1247 27.7679 1.4357 27.7679C0.5877 27.7679 -0.0003 28.3829 -0.0003 29.1899ZM4.5797 15.2989C4.5797 12.7289 6.7267 10.5819 9.2967 10.5819C11.8667 10.5819 14.0137 12.7289 14.0137 15.2989C14.0137 17.8689 11.8667 20.0159 9.2967 20.0159C6.7267 20.0159 4.5797 17.8689 4.5797 15.2989ZM7.2327 15.2989C7.2327 16.4199 8.1487 17.3359 9.2697 17.3359C10.3907 17.3359 11.3067 16.4059 11.3067 15.2989C11.3067 14.1779 10.3907 13.2619 9.2697 13.2619C8.1487 13.2619 7.2327 14.1779 7.2327 15.2989Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.22265625 31.69140625"
          className={className}
        >
          <path
            d="              M-0.0003 30.0778C-0.0003 30.9668 0.6567 31.6918 1.6407 31.6918C10.2677 31.6918 17.4727 25.0878 17.4727 15.8458C17.4727 11.5258 13.9177 7.9708 9.6117 7.9708C8.5997 7.9708 7.6287 8.2028 6.7537 8.5998C9.1057 5.2498 13.0977 3.2268 17.5957 3.2268C18.5667 3.2268 19.2227 2.5288 19.2227 1.5998C19.2227 0.7108 18.5667 -0.0002 17.5957 -0.0002C8.9547 -0.0002 1.7497 6.5898 1.7497 15.8458C1.7497 20.1658 5.3047 23.7208 9.6117 23.7208C10.6367 23.7208 11.5937 23.4878 12.4687 23.0918C10.1167 26.4418 6.1117 28.4508 1.6407 28.4508C0.6567 28.4508 -0.0003 29.1618 -0.0003 30.0778ZM4.9767 15.8458C4.9767 13.3298 7.0957 11.2108 9.6117 11.2108C12.1267 11.2108 14.2457 13.3298 14.2457 15.8458C14.2457 18.3618 12.1267 20.4808 9.6117 20.4808C7.0957 20.4808 4.9767 18.3618 4.9767 15.8458ZM7.4917 15.8458C7.4917 16.9808 8.4217 17.9098 9.5567 17.9098C10.7047 17.9098 11.6347 16.9668 11.6347 15.8458C11.6347 14.7108 10.7047 13.7808 9.5567 13.7808C8.4217 13.7808 7.4917 14.7108 7.4917 15.8458Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.953125 28.0546875"
          className={className}
        >
          <path
            d="              M-0.0003 27.2484C-0.0003 27.6994 0.3557 28.0544 0.8617 28.0544C8.8727 28.0544 15.2167 22.3124 15.2167 14.0274C15.2167 10.3354 12.1547 7.2874 8.4767 7.2874C6.8357 7.2874 5.3457 7.9574 4.2657 9.0094C6.1247 4.5114 10.6637 1.5994 16.0917 1.5994C16.5977 1.5994 16.9527 1.2444 16.9527 0.7934C16.9527 0.3414 16.5977 0.0004 16.0917 0.0004C8.0797 0.0004 1.7497 5.7424 1.7497 14.0274C1.7497 17.7184 4.7987 20.7674 8.4767 20.7674C10.1167 20.7674 11.6207 20.0974 12.6737 19.0314C10.8147 23.5294 6.2757 26.4554 0.8617 26.4554C0.3557 26.4554 -0.0003 26.7964 -0.0003 27.2484ZM3.3497 14.0274C3.3497 11.2244 5.6737 8.9004 8.4767 8.9004C11.2797 8.9004 13.6037 11.2244 13.6037 14.0274C13.6037 16.8304 11.2797 19.1544 8.4767 19.1544C5.6737 19.1544 3.3497 16.8304 3.3497 14.0274ZM6.6307 14.0274C6.6307 15.0394 7.4647 15.8734 8.4767 15.8734C9.5017 15.8734 10.3227 15.0254 10.3227 14.0274C10.3227 13.0024 9.5017 12.1814 8.4767 12.1814C7.4647 12.1814 6.6307 13.0024 6.6307 14.0274Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.841796875 29.2578125"
          className={className}
        >
          <path
            d="              M-0.0003 28.096C-0.0003 28.738 0.5057 29.258 1.1897 29.258C9.5017 29.258 16.1057 23.447 16.1057 14.629C16.1057 10.691 12.8517 7.437 8.9277 7.437C7.6157 7.437 6.3987 7.848 5.4007 8.531C7.4787 4.648 11.6897 2.338 16.6527 2.338C17.3357 2.338 17.8417 1.805 17.8417 1.162C17.8417 0.506 17.3357 0 16.6527 0C8.3537 0 1.7497 5.811 1.7497 14.629C1.7497 18.566 5.0037 21.82 8.9277 21.82C10.2407 21.82 11.4567 21.41 12.4417 20.727C10.3637 24.609 6.1387 26.92 1.1897 26.92C0.5057 26.92 -0.0003 27.439 -0.0003 28.096ZM4.1017 14.629C4.1017 11.99 6.2887 9.803 8.9277 9.803C11.5527 9.803 13.7537 11.99 13.7537 14.629C13.7537 17.268 11.5527 19.455 8.9277 19.455C6.2887 19.455 4.1017 17.268 4.1017 14.629ZM6.9047 14.629C6.9047 15.723 7.8067 16.625 8.9137 16.625C10.0077 16.625 10.9097 15.709 10.9097 14.629C10.9097 13.521 10.0077 12.633 8.9137 12.633C7.8067 12.633 6.9047 13.521 6.9047 14.629Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.41796875 28.51953125"
          className={className}
        >
          <path
            d="              M-0.0003 27.4809C-0.0003 28.0549 0.4507 28.5199 1.0527 28.5199C9.2557 28.5199 15.6817 22.9419 15.6817 14.2599C15.6817 10.4319 12.5237 7.2739 8.7087 7.2739C7.3147 7.2739 6.0157 7.7379 4.9907 8.5179C6.9867 4.4709 11.2517 2.0649 16.3657 2.0649C16.9667 2.0649 17.4177 1.5999 17.4177 1.0259C17.4177 0.4509 16.9667 -0.0001 16.3657 -0.0001C8.1617 -0.0001 1.7497 5.5649 1.7497 14.2599C1.7497 18.0739 4.9077 21.2329 8.7087 21.2329C10.1167 21.2329 11.4027 20.7679 12.4277 20.0019C10.4317 24.0489 6.1527 26.4549 1.0527 26.4549C0.4507 26.4549 -0.0003 26.9059 -0.0003 27.4809ZM3.8277 14.2599C3.8277 11.5799 6.0427 9.3649 8.7087 9.3649C11.3887 9.3649 13.6037 11.5799 13.6037 14.2599C13.6037 16.9259 11.3887 19.1409 8.7087 19.1409C6.0427 19.1409 3.8277 16.9259 3.8277 14.2599ZM6.7267 14.2599C6.7267 15.3399 7.6287 16.2419 8.7087 16.2419C9.8027 16.2419 10.6917 15.3259 10.6917 14.2599C10.6917 13.1659 9.8027 12.2769 8.7087 12.2769C7.6287 12.2769 6.7267 13.1659 6.7267 14.2599Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.169921875 29.83203125"
          className={className}
        >
          <path
            d="              M-0.0003 28.5601C-0.0003 29.2581 0.5467 29.8321 1.2987 29.8321C9.6797 29.8321 16.4197 23.8301 16.4197 14.9161C16.4197 10.8831 13.0977 7.5601 9.0917 7.5601C7.8477 7.5601 6.6857 7.9301 5.7287 8.5451C7.8617 4.7851 12.0177 2.5431 16.8707 2.5431C17.6367 2.5431 18.1697 1.9821 18.1697 1.2711C18.1697 0.5601 17.6367 0.0001 16.8707 0.0001C8.4907 0.0001 1.7497 5.9881 1.7497 14.9161C1.7497 18.9351 5.0727 22.2581 9.0917 22.2581C10.3227 22.2581 11.4847 21.9021 12.4417 21.2731C10.3087 25.0331 6.1387 27.2891 1.2987 27.2891C0.5467 27.2891 -0.0003 27.8361 -0.0003 28.5601ZM4.3067 14.9161C4.3067 12.3051 6.4807 10.1311 9.0917 10.1311C11.6897 10.1311 13.8637 12.3051 13.8637 14.9161C13.8637 17.5271 11.6897 19.7011 9.0917 19.7011C6.4807 19.7011 4.3067 17.5271 4.3067 14.9161ZM7.0547 14.9161C7.0547 16.0231 7.9567 16.9261 9.0647 16.9261C10.1717 16.9261 11.0877 16.0101 11.0877 14.9161C11.0877 13.8081 10.1717 12.8921 9.0647 12.8921C7.9567 12.8921 7.0547 13.8081 7.0547 14.9161Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.337890625 27.439453125"
          className={className}
        >
          <path
            d="              M-0.0003 26.9477C-0.0003 27.2347 0.2187 27.4397 0.6017 27.4397C8.3537 27.4397 14.6017 21.4647 14.6017 13.7267C14.6017 10.1997 11.6897 7.3007 8.1757 7.3007C6.2067 7.3007 4.4437 8.2307 3.3227 9.6797C5.0037 4.5797 9.8987 0.9847 15.7497 0.9847C16.1187 0.9847 16.3377 0.7797 16.3377 0.4927C16.3377 0.2047 16.1187 -0.0003 15.7497 -0.0003C7.9847 -0.0003 1.7497 5.9887 1.7497 13.7267C1.7497 17.2407 4.6617 20.1527 8.1757 20.1527C10.1307 20.1527 11.8947 19.2227 13.0017 17.7737C11.3337 22.8597 6.4397 26.4547 0.6017 26.4547C0.2187 26.4547 -0.0003 26.6607 -0.0003 26.9477ZM2.7347 13.7267C2.7347 10.7457 5.1957 8.2847 8.1757 8.2847C11.1427 8.2847 13.6037 10.7457 13.6037 13.7267C13.6037 16.6937 11.1427 19.1677 8.1757 19.1677C5.1957 19.1677 2.7347 16.6937 2.7347 13.7267ZM6.5077 13.7267C6.5077 14.6287 7.2737 15.3807 8.1757 15.3807C9.0917 15.3807 9.8297 14.6287 9.8297 13.7267C9.8297 12.8107 9.0917 12.0727 8.1757 12.0727C7.2737 12.0727 6.5077 12.8107 6.5077 13.7267Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.0234375 27.125"
          className={className}
        >
          <path
            d="              M-0.0003 26.7836C-0.0003 26.9886 0.1507 27.1246 0.4647 27.1246C8.0937 27.1246 14.2867 21.0276 14.2867 13.5626C14.2867 10.1306 11.4437 7.2876 8.0117 7.2876C5.8927 7.2876 3.9917 8.3676 2.8437 10.0076C4.4157 4.6076 9.5017 0.6696 15.5727 0.6696C15.8727 0.6696 16.0237 0.5336 16.0237 0.3286C16.0237 0.1366 15.8727 -0.0004 15.5727 -0.0004C7.9297 -0.0004 1.7497 6.0976 1.7497 13.5626C1.7497 16.9946 4.5797 19.8246 8.0117 19.8246C10.1447 19.8246 12.0317 18.7576 13.1657 17.1176C11.5937 22.5036 6.5217 26.4546 0.4647 26.4546C0.1507 26.4546 -0.0003 26.5916 -0.0003 26.7836ZM2.4197 13.5626C2.4197 10.4996 4.9487 7.9566 8.0117 7.9566C11.0737 7.9566 13.6167 10.4996 13.6167 13.5626C13.6167 16.6246 11.0737 19.1546 8.0117 19.1546C4.9487 19.1546 2.4197 16.6246 2.4197 13.5626ZM6.4527 13.5626C6.4527 14.4106 7.1637 15.1206 8.0117 15.1206C8.8867 15.1206 9.5837 14.4106 9.5837 13.5626C9.5837 12.6876 8.8867 12.0036 8.0117 12.0036C7.1637 12.0036 6.4527 12.6876 6.4527 13.5626Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}