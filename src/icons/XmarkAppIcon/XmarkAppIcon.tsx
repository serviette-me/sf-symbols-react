import { IconProps } from "../../types"

export default function XmarkAppIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.796875 26.796875"
          className={className}
        >
          <path
            d="              M24.8557 1.9555C23.3927 0.5055 21.5197 -0.0005 18.3337 -0.0005H8.4627C5.2907 -0.0005 3.4047 0.5055 1.9417 1.9555C0.4927 3.4045 -0.0003 5.2495 -0.0003 8.4625V18.3335C-0.0003 21.5465 0.4927 23.3925 1.9417 24.8415C3.4177 26.2905 5.2907 26.7965 8.4627 26.7965H18.3337C21.5197 26.7965 23.4067 26.2905 24.8557 24.8415C26.3047 23.3785 26.7967 21.5465 26.7967 18.3335V8.4625C26.7967 5.2495 26.3047 3.3905 24.8557 1.9555ZM21.9437 8.0805V18.7165C21.9437 20.1935 21.7517 20.8085 21.2867 21.2735C20.8227 21.7245 20.1937 21.9435 18.7307 21.9435H8.0797C6.6177 21.9435 5.9747 21.7245 5.5097 21.2735C5.0587 20.8085 4.8537 20.1935 4.8537 18.7165V8.0805C4.8537 6.5895 5.0587 5.9885 5.5097 5.5235C5.9747 5.0725 6.6177 4.8535 8.0797 4.8535H18.7307C20.1937 4.8535 20.8227 5.0725 21.2867 5.5235C21.7517 5.9885 21.9437 6.5895 21.9437 8.0805ZM9.6657 18.9625C10.2407 18.9625 10.6917 18.7855 11.0607 18.4155L13.4117 16.0785L15.7777 18.4155C16.1467 18.7855 16.5977 18.9625 17.1717 18.9625C18.2247 18.9625 19.0177 18.1565 19.0177 17.0895C19.0177 16.6245 18.8127 16.1735 18.4567 15.8185L16.0777 13.4125L18.4567 11.0055C18.8127 10.6505 19.0177 10.1995 19.0177 9.7345C19.0177 8.6675 18.2247 7.8745 17.1717 7.8745C16.5977 7.8745 16.1597 8.0395 15.7907 8.4085L13.4117 10.7735L11.0467 8.4085C10.6777 8.0395 10.2407 7.8745 9.6657 7.8745C8.6137 7.8745 7.8207 8.6675 7.8207 9.7345C7.8207 10.1995 8.0257 10.6505 8.3807 11.0055L10.7867 13.4125L8.3807 15.8185C8.0257 16.1735 7.8207 16.6245 7.8207 17.0895C7.8207 18.1565 8.6137 18.9625 9.6657 18.9625Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.00390625 26.00390625"
          className={className}
        >
          <path
            d="              M24.2267 1.791C22.8047 0.369 20.8767 0 18.1287 0H7.8617C5.1267 0 3.1997 0.369 1.7777 1.791C0.3557 3.213 -0.0003 5.113 -0.0003 7.861V18.129C-0.0003 20.891 0.3417 22.805 1.7777 24.213C3.1997 25.635 5.1267 26.004 7.8747 26.004H18.1287C20.8767 26.004 22.8047 25.635 24.2267 24.213C25.6617 22.791 26.0037 20.891 26.0037 18.129V7.875C26.0037 5.1 25.6617 3.199 24.2267 1.791ZM22.4767 7.492V18.512C22.4767 19.947 22.2847 20.986 21.6427 21.629C20.9997 22.271 19.9477 22.477 18.5117 22.477H7.4927C6.0567 22.477 5.0037 22.271 4.3617 21.629C3.7187 20.986 3.5277 19.947 3.5277 18.512V7.519C3.5277 6.057 3.7187 5.018 4.3617 4.375C5.0037 3.732 6.0707 3.527 7.5197 3.527H18.5117C19.9477 3.527 20.9997 3.732 21.6427 4.375C22.2847 5.018 22.4767 6.057 22.4767 7.492ZM8.8047 18.676C9.2427 18.676 9.6117 18.525 9.8987 18.238L13.0157 15.121L16.1467 18.238C16.4337 18.525 16.7887 18.676 17.2267 18.676C18.0607 18.676 18.7027 18.019 18.7027 17.185C18.7027 16.803 18.5387 16.447 18.2517 16.16L15.1207 13.016L18.2657 9.857C18.5527 9.57 18.7027 9.215 18.7027 8.846C18.7027 7.998 18.0607 7.355 17.2407 7.355C16.8027 7.355 16.4607 7.492 16.1597 7.807L13.0157 10.937L9.8847 7.807C9.5977 7.519 9.2427 7.383 8.8047 7.383C7.9847 7.383 7.3417 8.012 7.3417 8.846C7.3417 9.228 7.4927 9.584 7.7797 9.871L10.9237 13.016L7.7797 16.174C7.4927 16.447 7.3417 16.803 7.3417 17.185C7.3417 18.019 7.9847 18.676 8.8047 18.676Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.427734375 26.427734375"
          className={className}
        >
          <path
            d="              M24.5687 1.8868C23.1057 0.4508 21.2187 -0.0002 18.2387 -0.0002H8.1757C5.2087 -0.0002 3.3087 0.4508 1.8597 1.8868C0.4237 3.3218 -0.0003 5.1958 -0.0003 8.1898V18.2518C-0.0003 21.2458 0.4237 23.1188 1.8597 24.5548C3.3227 25.9898 5.2087 26.4278 8.1897 26.4278H18.2387C21.2187 26.4278 23.1187 25.9898 24.5687 24.5548C26.0037 23.1058 26.4277 21.2458 26.4277 18.2518V8.1898C26.4277 5.1958 26.0037 3.3088 24.5687 1.8868ZM22.2027 7.8068V18.6208C22.2027 20.0838 21.9977 20.8908 21.4647 21.4508C20.9047 21.9978 20.0707 22.2028 18.6207 22.2028H7.8067C6.3577 22.2028 5.5237 21.9848 4.9627 21.4508C4.4297 20.8908 4.2247 20.0838 4.2247 18.6208V7.8208C4.2247 6.3438 4.4297 5.5368 4.9627 4.9898C5.5237 4.4438 6.3577 4.2378 7.8067 4.2378H18.6207C20.0707 4.2378 20.9047 4.4438 21.4647 4.9898C21.9977 5.5368 22.2027 6.3438 22.2027 7.8068ZM9.2697 18.8398C9.7757 18.8398 10.1717 18.6758 10.5137 18.3338L13.2207 15.6408L15.9547 18.3338C16.2837 18.6758 16.6797 18.8398 17.1997 18.8398C18.1427 18.8398 18.8677 18.1018 18.8677 17.1448C18.8677 16.7208 18.6897 16.3108 18.3617 15.9828L15.6267 13.2348L18.3617 10.4728C18.6897 10.1448 18.8677 9.7478 18.8677 9.3238C18.8677 8.3668 18.1427 7.6428 17.1997 7.6428C16.6937 7.6428 16.3107 7.7928 15.9687 8.1348L13.2207 10.8558L10.4997 8.1348C10.1717 7.8068 9.7757 7.6428 9.2697 7.6428C8.3127 7.6428 7.5877 8.3668 7.5877 9.3238C7.5877 9.7478 7.7797 10.1578 8.0937 10.4868L10.8557 13.2348L8.0937 15.9958C7.7797 16.3108 7.5877 16.7208 7.5877 17.1448C7.5877 18.1018 8.3127 18.8398 9.2697 18.8398Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.6640625 24.6640625"
          className={className}
        >
          <path
            d="              M23.1327 1.5451C21.8617 0.2731 20.0977 0.0001 17.6227 0.0001H6.9457C4.5667 0.0001 2.8027 0.2871 1.5317 1.5451C0.2737 2.8161 -0.0003 4.5661 -0.0003 6.9451V17.6231C-0.0003 20.1111 0.2597 21.8611 1.5177 23.1191C2.8027 24.3771 4.5527 24.6641 7.0277 24.6641H17.6227C20.0977 24.6641 21.8747 24.3771 23.1327 23.1191C24.4047 21.8481 24.6637 20.1111 24.6637 17.6231V7.0271C24.6637 4.5531 24.4047 2.8031 23.1327 1.5451ZM22.9687 6.6721V17.9921C22.9687 19.6191 22.7227 21.0411 21.8887 21.8751C21.0547 22.7231 19.6057 22.9691 17.9927 22.9691H6.6587C5.0587 22.9691 3.6097 22.7091 2.7617 21.8751C1.9277 21.0411 1.6957 19.6191 1.6957 17.9921V6.7541C1.6957 5.0581 1.9277 3.6091 2.7617 2.7751C3.5957 1.9281 5.0727 1.6951 6.7537 1.6951H17.9927C19.6057 1.6951 21.0547 1.9551 21.8887 2.7891C22.7227 3.6231 22.9687 5.0451 22.9687 6.6721ZM7.5747 17.9781C7.8207 17.9781 8.0257 17.8831 8.2027 17.7051L12.3317 13.5621L16.4887 17.7051C16.6657 17.8831 16.8707 17.9781 17.1177 17.9781C17.5957 17.9781 17.9787 17.5961 17.9787 17.1171C17.9787 16.8711 17.8827 16.6801 17.7047 16.5021L13.5487 12.3461L17.7187 8.1761C17.9097 7.9841 17.9787 7.8071 17.9787 7.5601C17.9787 7.0961 17.5957 6.7131 17.1177 6.7131C16.8847 6.7131 16.7067 6.7951 16.5157 7.0001L12.3317 11.1421L8.1897 7.0001C8.0117 6.8221 7.8207 6.7401 7.5747 6.7401C7.0957 6.7401 6.7127 7.0961 6.7127 7.5741C6.7127 7.8071 6.7947 8.0121 6.9727 8.1891L11.1287 12.3461L6.9727 16.5151C6.7947 16.6801 6.7127 16.8851 6.7127 17.1171C6.7127 17.5961 7.0957 17.9781 7.5747 17.9781Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.498046875 25.484375"
          className={className}
        >
          <path
            d="              M23.8297 1.6683C22.4217 0.2593 20.4807 0.0003 17.9927 0.0003H7.4647C5.0177 0.0003 3.0627 0.2733 1.6677 1.6683C0.2597 3.0763 -0.0003 5.0043 -0.0003 7.4653V17.9783C-0.0003 20.4803 0.2597 22.4083 1.6547 23.8163C3.0767 25.2113 5.0177 25.4843 7.5057 25.4843H17.9927C20.4807 25.4843 22.4217 25.2113 23.8297 23.8163C25.2387 22.4083 25.4977 20.4803 25.4977 17.9783V7.4923C25.4977 5.0043 25.2387 3.0763 23.8297 1.6683ZM22.8187 7.1233V18.3613C22.8187 19.7833 22.6267 21.0823 21.8747 21.8473C21.1097 22.6133 19.7837 22.8043 18.3747 22.8043H7.1227C5.7147 22.8043 4.3887 22.6133 3.6227 21.8473C2.8577 21.0823 2.6797 19.7833 2.6797 18.3613V7.1503C2.6797 5.7013 2.8577 4.3883 3.6097 3.6233C4.3747 2.8573 5.7147 2.6663 7.1507 2.6663H18.3747C19.7837 2.6663 21.1097 2.8713 21.8747 3.6363C22.6407 4.3883 22.8187 5.7013 22.8187 7.1233ZM8.2577 18.4843C8.6137 18.4843 8.9137 18.3613 9.1467 18.1153L12.7557 14.5063L16.3787 18.1153C16.6117 18.3473 16.8987 18.4843 17.2677 18.4843C17.9517 18.4843 18.4977 17.9373 18.4977 17.2403C18.4977 16.8983 18.3617 16.6113 18.1287 16.3793L14.5057 12.7563L18.1427 9.1193C18.3887 8.8593 18.5117 8.5863 18.5117 8.2583C18.5117 7.5743 17.9647 7.0273 17.2817 7.0273C16.9397 7.0273 16.6657 7.1503 16.4067 7.3963L12.7557 11.0333L9.1327 7.4103C8.9007 7.1643 8.6137 7.0543 8.2577 7.0543C7.5747 7.0543 7.0277 7.5883 7.0277 8.2713C7.0277 8.5993 7.1637 8.9003 7.3967 9.1333L11.0197 12.7563L7.3967 16.3923C7.1637 16.6113 7.0277 16.9123 7.0277 17.2403C7.0277 17.9373 7.5747 18.4843 8.2577 18.4843Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.2109375 25.2109375"
          className={className}
        >
          <path
            d="              M23.6117 1.6136C22.2167 0.2186 20.2477 -0.0004 17.9097 -0.0004H7.2597C4.9627 -0.0004 2.9937 0.2186 1.5997 1.6136C0.2047 3.0076 -0.0003 4.9626 -0.0003 7.2596V17.9106C-0.0003 20.2476 0.2047 22.2036 1.5997 23.5976C2.9937 24.9926 4.9627 25.2106 7.2867 25.2106H17.9097C20.2477 25.2106 22.2167 24.9926 23.6117 23.5976C25.0057 22.2036 25.2107 20.2476 25.2107 17.9106V7.2876C25.2107 4.9496 25.0057 3.0076 23.6117 1.6136ZM23.0097 6.9176V18.2926C23.0097 19.7016 22.8317 21.1636 21.9977 21.9846C21.1777 22.8186 19.7017 23.0096 18.2927 23.0096H6.9177C5.5097 23.0096 4.0337 22.8186 3.1997 21.9846C2.3787 21.1636 2.2017 19.7016 2.2017 18.2926V6.9586C2.2017 5.5096 2.3787 4.0466 3.1997 3.2126C4.0337 2.3926 5.5237 2.2016 6.9587 2.2016H18.2927C19.7017 2.2016 21.1777 2.3926 21.9977 3.2266C22.8317 4.0466 23.0097 5.5096 23.0097 6.9176ZM7.9567 18.3886C8.2577 18.3886 8.5317 18.2656 8.7367 18.0466L12.6057 14.1636L16.5017 18.0466C16.7067 18.2516 16.9667 18.3886 17.2817 18.3886C17.8967 18.3886 18.3887 17.8966 18.3887 17.2816C18.3887 16.9666 18.2657 16.7206 18.0467 16.5016L14.1637 12.6196L18.0607 8.7086C18.2927 8.4766 18.4027 8.2446 18.4027 7.9436C18.4027 7.3416 17.9097 6.8496 17.2947 6.8496C17.0077 6.8496 16.7757 6.9586 16.5427 7.1916L12.6057 11.0876L8.7087 7.2056C8.5037 6.9866 8.2577 6.8766 7.9567 6.8766C7.3417 6.8766 6.8497 7.3556 6.8497 7.9566C6.8497 8.2576 6.9727 8.5176 7.1917 8.7226L11.0747 12.6196L7.1917 16.5156C6.9727 16.7206 6.8497 16.9806 6.8497 17.2816C6.8497 17.8966 7.3417 18.3886 7.9567 18.3886Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.716796875 25.716796875"
          className={className}
        >
          <path
            d="              M24.0077 1.7363C22.5857 0.3143 20.6447 0.0003 18.0467 0.0003H7.6427C5.0727 0.0003 3.1177 0.3143 1.7087 1.7363C0.3007 3.1443 -0.0003 5.0583 -0.0003 7.6423V18.0603C-0.0003 20.6723 0.3007 22.5863 1.7087 23.9943C3.1307 25.4023 5.0587 25.7163 7.6697 25.7163H18.0467C20.6447 25.7163 22.5857 25.4023 24.0077 23.9943C25.4157 22.5863 25.7167 20.6723 25.7167 18.0603V7.6703C25.7167 5.0583 25.4157 3.1313 24.0077 1.7363ZM22.6677 7.2873V18.4293C22.6677 19.8653 22.4767 21.0543 21.7797 21.7653C21.0687 22.4763 19.8517 22.6813 18.4297 22.6813H7.2867C5.8657 22.6813 4.6487 22.4763 3.9377 21.7653C3.2267 21.0543 3.0487 19.8653 3.0487 18.4293V7.3143C3.0487 5.8653 3.2267 4.6753 3.9377 3.9653C4.6487 3.2543 5.8657 3.0483 7.3147 3.0483H18.4297C19.8517 3.0483 21.0687 3.2543 21.7797 3.9653C22.4907 4.6753 22.6677 5.8653 22.6677 7.2873ZM8.5037 18.5803C8.8867 18.5803 9.2147 18.4433 9.4747 18.1703L12.8657 14.7793L16.2697 18.1703C16.5297 18.4293 16.8577 18.5803 17.2537 18.5803C17.9927 18.5803 18.5797 17.9783 18.5797 17.2263C18.5797 16.8713 18.4437 16.5563 18.1837 16.2973L14.7797 12.8793L18.1977 9.4473C18.4567 9.1733 18.5937 8.8733 18.5937 8.5173C18.5937 7.7653 18.0057 7.1773 17.2537 7.1773C16.8847 7.1773 16.5837 7.3143 16.2967 7.5883L12.8657 10.9923L9.4477 7.6013C9.2017 7.3283 8.8867 7.2053 8.5037 7.2053C7.7517 7.2053 7.1637 7.7793 7.1637 8.5313C7.1637 8.8863 7.3007 9.2153 7.5607 9.4613L10.9787 12.8793L7.5607 16.2973C7.3007 16.5563 7.1637 16.8843 7.1637 17.2263C7.1637 17.9783 7.7517 18.5803 8.5037 18.5803Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.939453125 23.92578125"
          className={className}
        >
          <path
            d="              M22.5037 1.436C21.3967 0.342 19.9197 0 17.2407 0H6.5487C4.0467 0 2.5297 0.355 1.4357 1.449C0.3417 2.543 -0.0003 4.033 -0.0003 6.535V17.24C-0.0003 19.92 0.3277 21.41 1.4217 22.49C2.5297 23.584 4.0197 23.926 6.6857 23.926H17.2407C19.9197 23.926 21.4097 23.584 22.5037 22.49C23.5977 21.396 23.9397 19.92 23.9397 17.24V6.686C23.9397 4.006 23.5977 2.516 22.5037 1.436ZM22.9137 6.33V17.596C22.9137 19.482 22.5727 20.877 21.7387 21.725C20.8907 22.586 19.4827 22.914 17.5957 22.914H6.3297C4.4567 22.914 3.0347 22.572 2.1877 21.725C1.3397 20.877 1.0117 19.482 1.0117 17.596V6.467C1.0117 4.457 1.3397 3.035 2.1737 2.188C3.0217 1.326 4.4847 1.012 6.4807 1.012H17.5957C19.4827 1.012 20.8907 1.354 21.7387 2.201C22.5857 3.049 22.9137 4.43 22.9137 6.33ZM7.0687 17.418C7.2457 17.418 7.3557 17.377 7.4927 17.227L11.9767 12.742L16.4607 17.227C16.5977 17.363 16.7207 17.418 16.8847 17.418C17.1997 17.418 17.4317 17.199 17.4317 16.898C17.4317 16.734 17.3767 16.611 17.2537 16.488L12.7427 11.977L17.2537 7.465C17.3907 7.328 17.4317 7.219 17.4317 7.055C17.4317 6.768 17.1997 6.535 16.8847 6.535C16.7347 6.535 16.6117 6.59 16.4607 6.727L11.9767 11.211L7.4927 6.727C7.3557 6.59 7.2457 6.535 7.0687 6.535C6.7677 6.535 6.5217 6.768 6.5217 7.055C6.5217 7.219 6.5767 7.342 6.6997 7.465L11.2107 11.977L6.6997 16.488C6.5767 16.611 6.5217 16.734 6.5217 16.898C6.5217 17.199 6.7677 17.418 7.0687 17.418Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.556640625 23.5703125"
          className={className}
        >
          <path
            d="              M22.1897 1.3942C21.1637 0.3833 19.8107 0.0003 17.0487 0.0003H6.3297C3.7867 0.0003 2.3927 0.4103 1.3947 1.4082C0.3827 2.4202 -0.0003 3.7602 -0.0003 6.3302V17.0493C-0.0003 19.8383 0.3687 21.1913 1.3807 22.1763C2.3927 23.1743 3.7457 23.5703 6.5077 23.5703H17.0487C19.8107 23.5703 21.1777 23.1743 22.1897 22.1763C23.1877 21.1643 23.5567 19.8383 23.5567 17.0493V6.5083C23.5567 3.7323 23.1877 2.3792 22.1897 1.3942ZM22.8867 6.1663V17.4043C22.8867 19.4413 22.5037 20.7953 21.6697 21.6563C20.8087 22.5313 19.4137 22.9003 17.4047 22.9003H6.1657C4.1427 22.9003 2.7477 22.5043 1.9007 21.6563C1.0387 20.7953 0.6697 19.4413 0.6697 17.4043V6.3432C0.6697 4.1702 1.0387 2.7482 1.8727 1.9002C2.7347 1.0252 4.1837 0.6702 6.3437 0.6702H17.4047C19.4137 0.6702 20.8087 1.0523 21.6697 1.9142C22.5177 2.7752 22.8867 4.1292 22.8867 6.1663ZM6.8087 17.1443C6.9457 17.1443 7.0137 17.1172 7.1367 16.9943L11.7847 12.3453L16.4477 16.9943C16.5707 17.1172 16.6527 17.1443 16.7757 17.1443C16.9937 17.1443 17.1587 16.9943 17.1587 16.8023C17.1587 16.6793 17.1307 16.5973 17.0217 16.4883L12.3317 11.7993L17.0217 7.1093C17.1177 7.0133 17.1587 6.9183 17.1587 6.8082C17.1587 6.6032 16.9937 6.4533 16.7757 6.4533C16.6527 6.4533 16.5707 6.4803 16.4477 6.6032L11.7847 11.2653L7.1367 6.6032C7.0137 6.4803 6.9457 6.4533 6.8087 6.4533C6.5897 6.4533 6.4257 6.6032 6.4257 6.8082C6.4257 6.9183 6.4527 7.0003 6.5627 7.1093L11.2517 11.7993L6.5627 16.4883C6.4527 16.5973 6.4257 16.6793 6.4257 16.8023C6.4257 16.9943 6.5897 17.1443 6.8087 17.1443Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
