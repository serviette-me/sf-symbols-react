import { IconProps } from "../../types"

export default function CheckmarkRectanglePortraitIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.484375 30.87109375"
          className={className}
        >
          <path
            d="              M-0.0003 25.498C-0.0003 28.889 1.9827 30.871 5.3597 30.871H20.1247C23.5157 30.871 25.4847 28.889 25.4847 25.498V5.373C25.4847 1.982 23.5157 0 20.1247 0H5.3597C1.9827 0 -0.0003 1.982 -0.0003 5.373ZM4.8537 24.76V6.111C4.8537 5.264 5.1957 4.854 6.1117 4.854H19.3867C20.2887 4.854 20.6307 5.264 20.6307 6.111V24.76C20.6307 25.607 20.2887 26.018 19.3867 26.018H6.1117C5.1957 26.018 4.8537 25.607 4.8537 24.76ZM11.3747 21.957C12.0447 21.957 12.6737 21.602 13.0567 21.027L18.5527 12.742C18.8267 12.346 18.9497 11.949 18.9497 11.607C18.9497 10.609 18.0747 9.885 17.1037 9.885C16.4477 9.885 15.9277 10.213 15.5037 10.91L11.3747 17.609L9.5157 15.49C9.1467 15.08 8.7367 14.834 8.1897 14.834C7.2047 14.834 6.3707 15.627 6.3707 16.611C6.3707 17.076 6.5077 17.418 6.8907 17.883L9.6657 21.082C10.1307 21.615 10.6777 21.957 11.3747 21.957Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.240234375 30.091796875"
          className={className}
        >
          <path
            d="              M-0.0003 25.2652C-0.0003 28.3962 1.6957 30.0922 4.7987 30.0922H19.4417C22.5447 30.0922 24.2407 28.3962 24.2407 25.2652V4.8262C24.2407 1.7092 22.5447 0.0002 19.4417 0.0002H4.7987C1.6957 0.0002 -0.0003 1.7092 -0.0003 4.8262ZM3.5277 24.8832V5.2222C3.5277 4.1152 4.0607 3.5272 5.2227 3.5272H19.0177C20.1797 3.5272 20.7127 4.1152 20.7127 5.2222V24.8832C20.7127 25.9762 20.1797 26.5642 19.0177 26.5642H5.2227C4.0607 26.5642 3.5277 25.9762 3.5277 24.8832ZM10.7047 21.5472C11.2657 21.5472 11.7577 21.2602 12.0857 20.7672L17.9647 11.7032C18.1837 11.3752 18.3207 11.0332 18.3207 10.7052C18.3207 9.8982 17.6097 9.3382 16.8437 9.3382C16.3377 9.3382 15.9137 9.6112 15.5727 10.1582L10.6637 18.0602L8.3947 15.2582C8.0387 14.8342 7.6837 14.6562 7.2187 14.6562C6.4257 14.6562 5.7837 15.2852 5.7837 16.0782C5.7837 16.4612 5.9197 16.7892 6.2067 17.1442L9.2557 20.7952C9.6657 21.2872 10.1177 21.5472 10.7047 21.5472Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.896484375 30.48828125"
          className={className}
        >
          <path
            d="              M-0.0003 25.3746C-0.0003 28.6426 1.8457 30.4886 5.0997 30.4886H19.8107C23.0507 30.4886 24.8967 28.6426 24.8967 25.3746V5.0996C24.8967 1.8456 23.0507 -0.0004 19.8107 -0.0004H5.0997C1.8457 -0.0004 -0.0003 1.8456 -0.0003 5.0996ZM4.2247 24.8146V5.6736C4.2247 4.7166 4.6617 4.2246 5.6877 4.2246H19.2087C20.2347 4.2246 20.6717 4.7166 20.6717 5.6736V24.8146C20.6717 25.7716 20.2347 26.2636 19.2087 26.2636H5.6877C4.6617 26.2636 4.2247 25.7716 4.2247 24.8146ZM11.0607 21.7516C11.6757 21.7516 12.2497 21.4376 12.5917 20.8906L18.2797 12.2496C18.5257 11.8806 18.6487 11.5116 18.6487 11.1696C18.6487 10.2676 17.8557 9.6246 16.9807 9.6246C16.3927 9.6246 15.9277 9.9126 15.5447 10.5406L11.0337 17.8146L8.9827 15.3676C8.6267 14.9566 8.2437 14.7386 7.7387 14.7386C6.8357 14.7386 6.0977 15.4496 6.0977 16.3516C6.0977 16.7756 6.2347 17.1036 6.5767 17.5136L9.4747 20.9316C9.9117 21.4516 10.4177 21.7516 11.0607 21.7516Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.599609375 29.134765625"
          className={className}
        >
          <path
            d="              M-0.0003 25.102C-0.0003 27.768 1.3537 29.135 3.9927 29.135H18.6077C21.2597 29.135 22.5997 27.768 22.5997 25.102V4.02C22.5997 1.354 21.2597 0 18.6077 0H3.9927C1.3537 0 -0.0003 1.354 -0.0003 4.02ZM1.6957 25.061V4.061C1.6957 2.516 2.5017 1.682 4.0877 1.682H18.5257C20.0977 1.682 20.9177 2.516 20.9177 4.061V25.061C20.9177 26.606 20.0977 27.439 18.5257 27.439H4.0877C2.5017 27.439 1.6957 26.606 1.6957 25.061ZM9.8297 21.041C10.1857 21.041 10.4727 20.863 10.6777 20.549L17.3227 10.172C17.4457 9.98 17.5687 9.734 17.5687 9.516C17.5687 9.051 17.1447 8.736 16.7067 8.736C16.4337 8.736 16.1737 8.9 15.9687 9.201L9.7887 18.977L6.6307 15.094C6.3987 14.766 6.1527 14.67 5.8657 14.67C5.4137 14.67 5.0447 15.039 5.0447 15.504C5.0447 15.736 5.1407 15.969 5.2907 16.174L8.9417 20.549C9.2147 20.891 9.4747 21.041 9.8297 21.041Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.447265625 29.599609375"
          className={className}
        >
          <path
            d="              M-0.0003 25.1151C-0.0003 28.0681 1.5177 29.6001 4.4437 29.6001H19.0037C21.9297 29.6001 23.4477 28.0681 23.4477 25.1151V4.4841C23.4477 1.5451 21.9297 0.0001 19.0037 0.0001H4.4437C1.5177 0.0001 -0.0003 1.5451 -0.0003 4.4841ZM2.6797 24.9511V4.6481C2.6797 3.3771 3.3357 2.6801 4.6617 2.6801H18.7717C20.0977 2.6801 20.7677 3.3771 20.7677 4.6481V24.9511C20.7677 26.2231 20.0977 26.9201 18.7717 26.9201H4.6617C3.3357 26.9201 2.6797 26.2231 2.6797 24.9511ZM10.2677 21.2871C10.7597 21.2871 11.1837 21.0411 11.4707 20.6031L17.5817 11.0471C17.7597 10.7601 17.9237 10.4321 17.9237 10.1171C17.9237 9.4471 17.3227 8.9961 16.6797 8.9961C16.2697 8.9961 15.9007 9.2151 15.6137 9.6801L10.2127 18.3481L7.6697 15.1071C7.3417 14.6841 7.0137 14.5331 6.6037 14.5331C5.9337 14.5331 5.4137 15.0661 5.4137 15.7501C5.4137 16.0781 5.5367 16.3791 5.7697 16.6661L8.9957 20.6031C9.3657 21.0821 9.7617 21.2871 10.2677 21.2871Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.99609375 29.3125"
          className={className}
        >
          <path
            d="              M-0.0003 25.0333C-0.0003 27.8903 1.4087 29.3123 4.2387 29.3123H18.7577C21.5877 29.3123 22.9957 27.8903 22.9957 25.0333V4.2933C22.9957 1.4493 21.5877 0.0003 18.7577 0.0003H4.2387C1.4087 0.0003 -0.0003 1.4493 -0.0003 4.2933ZM2.2017 24.9923V4.3343C2.2017 2.9663 2.9257 2.2013 4.3477 2.2013H18.6487C20.0707 2.2013 20.7947 2.9663 20.7947 4.3343V24.9923C20.7947 26.3593 20.0707 27.1113 18.6487 27.1113H4.3477C2.9257 27.1113 2.2017 26.3593 2.2017 24.9923ZM10.0217 21.1503C10.4727 21.1503 10.8557 20.9313 11.1157 20.5073L17.3637 10.6773C17.5277 10.4043 17.7047 10.1033 17.7047 9.8023C17.7047 9.1873 17.1587 8.7913 16.5837 8.7913C16.2287 8.7913 15.8867 9.0093 15.6407 9.4063L9.9527 18.5113L7.2597 15.0253C6.9457 14.5883 6.6307 14.4783 6.2617 14.4783C5.6597 14.4783 5.2087 14.9573 5.2087 15.5583C5.2087 15.8593 5.3187 16.1463 5.5097 16.4063L8.8457 20.5073C9.2017 20.9593 9.5567 21.1503 10.0217 21.1503Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.7890625 29.8046875"
          className={className}
        >
          <path
            d="              M-0.0003 25.1698C-0.0003 28.1918 1.5857 29.8048 4.5937 29.8048H19.1957C22.1897 29.8048 23.7887 28.1918 23.7887 25.1698V4.6208C23.7887 1.5998 22.1897 -0.0002 19.1957 -0.0002H4.5937C1.5857 -0.0002 -0.0003 1.5998 -0.0003 4.6208ZM3.0487 24.9098V4.8808C3.0487 3.6918 3.6507 3.0348 4.9087 3.0348H18.8807C20.1387 3.0348 20.7407 3.6918 20.7407 4.8808V24.9098C20.7407 26.1138 20.1387 26.7558 18.8807 26.7558H4.9087C3.6507 26.7558 3.0487 26.1138 3.0487 24.9098ZM10.4457 21.3968C10.9787 21.3968 11.4297 21.1228 11.7307 20.6578L17.7457 11.3208C17.9377 11.0198 18.0877 10.6778 18.0877 10.3638C18.0877 9.6248 17.4457 9.1328 16.7477 9.1328C16.2967 9.1328 15.9007 9.3788 15.5997 9.8708L10.4047 18.2108L7.9847 15.1618C7.6427 14.7388 7.3007 14.5738 6.8767 14.5738C6.1527 14.5738 5.5777 15.1488 5.5777 15.8868C5.5777 16.2288 5.7017 16.5428 5.9607 16.8578L9.1057 20.6718C9.5017 21.1508 9.9117 21.3968 10.4457 21.3968Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.09375 28.90234375"
          className={className}
        >
          <path
            d="              M-0.0003 25.2109C-0.0003 27.6449 1.2577 28.9019 3.6777 28.9019H18.4157C20.8227 28.9019 22.0937 27.6449 22.0937 25.2109V3.6909C22.0937 1.2719 20.8227 -0.0001 18.4157 -0.0001H3.6777C1.2577 -0.0001 -0.0003 1.2719 -0.0003 3.6909ZM1.0117 25.1839V3.7189C1.0117 1.9409 1.9417 1.0119 3.7327 1.0119H18.3617C20.1527 1.0119 21.0817 1.9409 21.0817 3.7189V25.1839C21.0817 26.9609 20.1527 27.8909 18.3617 27.8909H3.7327C1.9417 27.8909 1.0117 26.9609 1.0117 25.1839ZM9.5977 20.9179C9.8027 20.9179 9.9667 20.8089 10.1037 20.6449L17.2677 9.5289C17.3227 9.4199 17.3907 9.2699 17.3907 9.1599C17.3907 8.8869 17.1307 8.6679 16.8707 8.6679C16.7067 8.6679 16.5297 8.7769 16.4197 8.9549L9.5707 19.6189L5.8107 15.2029C5.6737 15.0249 5.5237 14.9569 5.3317 14.9569C5.0727 14.9569 4.8397 15.1759 4.8397 15.4629C4.8397 15.6129 4.9087 15.7499 5.0037 15.8869L9.0777 20.6449C9.2287 20.8359 9.3787 20.9179 9.5977 20.9179Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.8203125 28.779296875"
          className={className}
        >
          <path
            d="              M-0.0003 25.2656C-0.0003 27.5626 1.2167 28.7796 3.5137 28.7796H18.3207C20.6037 28.7796 21.8207 27.5626 21.8207 25.2656V3.5136C21.8207 1.2166 20.6037 -0.0004 18.3207 -0.0004H3.5137C1.2167 -0.0004 -0.0003 1.2166 -0.0003 3.5136ZM0.6697 25.2386V3.5406C0.6697 1.6546 1.6547 0.6696 3.5407 0.6696H18.2797C20.1797 0.6696 21.1507 1.6546 21.1507 3.5406V25.2386C21.1507 27.1246 20.1797 28.1096 18.2797 28.1096H3.5407C1.6547 28.1096 0.6697 27.1246 0.6697 25.2386ZM9.4747 20.8496C9.6117 20.8496 9.7067 20.7816 9.8027 20.6856L17.2267 9.2016C17.2677 9.1326 17.2947 9.0376 17.2947 8.9686C17.2947 8.8046 17.1307 8.6266 16.9667 8.6266C16.8437 8.6266 16.7207 8.7226 16.6387 8.8186L9.4607 19.9336L5.3867 15.2576C5.3047 15.1486 5.1957 15.1076 5.0587 15.1076C4.8947 15.1076 4.7307 15.2306 4.7307 15.4356C4.7307 15.5446 4.7847 15.6406 4.8537 15.7366L9.1467 20.6856C9.2427 20.7946 9.3247 20.8496 9.4747 20.8496Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}