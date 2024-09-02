import { IconProps } from "../../types"

export default function DropFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.6015625 30.337890625"
          className={className}
        >
          <path
            d="              M10.8007 30.3375C17.3087 30.3245 21.6017 26.0995 21.6017 19.7555C21.6017 16.8025 20.3167 13.3165 18.4977 9.8575C17.1307 7.1915 15.4077 4.4565 13.6577 1.8315C12.8377 0.5745 11.9357 -0.0005 10.8007 -0.0005C9.6657 -0.0005 8.7777 0.5745 7.9567 1.8315C6.0707 4.6345 4.2247 7.5875 2.8167 10.4175C1.1617 13.6855 -0.0003 16.9535 -0.0003 19.7555C-0.0003 26.0995 4.3067 30.3245 10.8007 30.3375Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.275390625 29.01171875"
          className={className}
        >
          <path
            d="              M10.1447 29.0116C16.2287 28.9976 20.2757 25.0466 20.2757 19.0996C20.2757 16.2426 19.0997 13.1386 17.7867 10.4996C16.3787 7.5196 14.2597 4.3476 12.3187 1.3946C11.7027 0.4516 10.9787 -0.0004 10.1447 -0.0004C9.2967 -0.0004 8.5857 0.4516 7.9707 1.3946C5.9607 4.4296 3.7737 7.7246 2.3517 10.7866C1.1207 13.3296 -0.0003 16.3246 -0.0003 19.0996C-0.0003 25.0466 4.0467 28.9976 10.1447 29.0116Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.986328125 29.708984375"
          className={className}
        >
          <path
            d="              M10.4867 29.7091C16.8027 29.6951 20.9867 25.6071 20.9867 19.4551C20.9867 16.5431 19.7417 13.2341 18.1697 10.1581C16.7757 7.3421 14.8617 4.4021 13.0157 1.6271C12.3047 0.5191 11.4847 0.0001 10.4867 0.0001C9.4887 0.0001 8.6817 0.5191 7.9567 1.6271C6.0297 4.5391 4.0197 7.6561 2.5977 10.5821C1.1487 13.5211 -0.0003 16.6661 -0.0003 19.4551C-0.0003 25.6071 4.1837 29.6951 10.4867 29.7091Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.443359375 27.1796875"
          className={className}
        >
          <path
            d="              M9.2287 27.1793C14.7517 27.1793 18.4437 23.5703 18.4437 18.1833C18.4437 15.6683 17.4457 12.9613 16.4747 10.8143C15.0257 7.6013 12.7007 4.0883 10.6097 0.8883C10.2407 0.3143 9.7757 0.0003 9.2287 0.0003C8.6677 0.0003 8.2027 0.3143 7.8337 0.8883C5.7417 4.0883 3.4177 7.6013 1.9687 10.8143C0.9977 12.9613 -0.0003 15.6683 -0.0003 18.1833C-0.0003 23.5703 3.6917 27.1793 9.2287 27.1793Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.427734375 28.150390625"
          className={className}
        >
          <path
            d="              M9.7207 28.1501C15.5447 28.1501 19.4277 24.3491 19.4277 18.6621C19.4277 15.8871 18.3207 13.0291 17.3357 10.9101C15.8867 7.7241 13.5217 4.2651 11.4567 1.1071C10.9787 0.3691 10.3767 0.0001 9.7207 0.0001C9.0507 0.0001 8.4487 0.3691 7.9707 1.1071C5.8927 4.2931 3.4997 7.7931 2.0507 11.0191C1.0937 13.0841 -0.0003 15.9141 -0.0003 18.6621C-0.0003 24.3491 3.8827 28.1501 9.7207 28.1501Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.94921875 27.685546875"
          className={className}
        >
          <path
            d="              M9.4747 27.6857C15.1617 27.6857 18.9487 23.9807 18.9487 18.4297C18.9487 15.6957 17.8827 12.9747 17.0757 11.1567C15.6137 7.8617 13.0977 4.2387 10.9787 0.9567C10.5687 0.3417 10.0347 -0.0003 9.4747 -0.0003C8.9277 -0.0003 8.3807 0.3417 7.9707 0.9567C5.8517 4.2387 3.3357 7.8617 1.8727 11.1567C1.0797 12.9747 -0.0003 15.6957 -0.0003 18.4297C-0.0003 23.9807 3.7867 27.6857 9.4747 27.6857Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.796875 28.51953125"
          className={className}
        >
          <path
            d="              M9.8987 28.5195C15.8457 28.5195 19.7967 24.6505 19.7967 18.8535C19.7967 16.0505 18.6487 13.0835 17.5277 10.7325C16.1057 7.6425 13.8357 4.3065 11.8257 1.2305C11.2927 0.4105 10.6367 -0.0005 9.8987 -0.0005C9.1597 -0.0005 8.5037 0.4105 7.9707 1.2305C5.9197 4.3615 3.6227 7.7655 2.1737 10.9105C1.1077 13.1935 -0.0003 16.0915 -0.0003 18.8535C-0.0003 24.6505 3.9507 28.5195 9.8987 28.5195Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.7734375 26.49609375"
          className={className}
        >
          <path
            d="              M8.8867 26.4961C14.2187 26.4961 17.7737 23.0231 17.7737 17.8421C17.7737 15.5991 16.8707 12.9471 15.6677 10.3491C14.2327 7.2461 12.1547 3.8961 10.1307 0.7931C9.8027 0.2731 9.4337 0.0001 8.8867 0.0001C8.3397 0.0001 7.9707 0.2731 7.6287 0.7931C5.6187 3.8961 3.5407 7.2461 2.1057 10.3491C0.9027 12.9471 -0.0003 15.5991 -0.0003 17.8421C-0.0003 23.0231 3.5547 26.4961 8.8867 26.4961Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.41796875 26.154296875"
          className={className}
        >
          <path
            d="              M8.7087 26.1544C13.9317 26.1544 17.4177 22.7634 17.4177 17.6644C17.4177 15.5864 16.5707 12.9614 15.2577 10.1304C13.8227 7.0824 11.8807 3.8004 9.8987 0.7524C9.5837 0.2734 9.2557 0.0004 8.7087 0.0004C8.1757 0.0004 7.8477 0.2734 7.5327 0.7524C5.5367 3.8004 3.5957 7.0824 2.1737 10.1304C0.8477 12.9614 -0.0003 15.5864 -0.0003 17.6644C-0.0003 22.7634 3.4867 26.1544 8.7087 26.1544Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
