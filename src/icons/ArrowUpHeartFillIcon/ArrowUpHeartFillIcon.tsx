import { IconProps } from "../../types"

export default function ArrowUpHeartFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.75 27.7265625"
          className={className}
        >
          <path
            d="              M14.8747 27.7265C15.5037 27.7265 16.4607 27.1245 17.4177 26.4965C24.7597 21.5745 29.7497 15.6265 29.7497 9.7065C29.7497 3.8145 25.5937 -0.0005 20.9457 -0.0005C18.0337 -0.0005 16.0367 1.5995 14.8747 3.8005C13.7127 1.5995 11.7307 -0.0005 8.8047 -0.0005C4.1567 -0.0005 -0.0003 3.8145 -0.0003 9.7065C-0.0003 15.6265 4.9907 21.5745 12.3317 26.4965C13.2887 27.1245 14.2457 27.7265 14.8747 27.7265ZM16.4067 17.7735C16.4067 18.9085 15.5037 19.6055 14.3967 19.6055C13.2887 19.6055 12.3867 18.9085 12.3867 17.7735V15.3945L12.5917 13.5765L12.0037 14.2595L11.7847 14.5335C11.4977 14.9025 11.0337 15.1755 10.5407 15.1755C9.5707 15.1755 8.8457 14.4785 8.8457 13.5625C8.8457 13.0295 8.9827 12.6605 9.4477 12.2635L12.7147 9.3375C13.1937 8.9145 13.7127 8.5995 14.3967 8.5995C15.0797 8.5995 15.5997 8.9145 16.0777 9.3375L19.3457 12.2635C19.8107 12.6605 19.9607 13.0295 19.9607 13.5625C19.9607 14.4785 19.2227 15.1755 18.2517 15.1755C17.8007 15.1755 17.2537 14.9025 17.0217 14.5335L16.8027 14.2595L16.2017 13.5765L16.4067 15.3945Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.451171875 26.4140625"
          className={className}
        >
          <path
            d="              M14.2327 26.4143C14.6837 26.4143 15.3677 26.0173 15.9957 25.6073C23.5157 20.6993 28.4517 14.8473 28.4517 8.9823C28.4517 3.6093 24.7187 0.0003 20.2477 0.0003C17.4457 0.0003 15.4357 1.5313 14.2327 3.7733C13.0297 1.5453 11.0057 0.0003 8.2167 0.0003C3.7457 0.0003 -0.0003 3.6093 -0.0003 8.9823C-0.0003 14.8473 4.9357 20.6993 12.4687 25.6073C13.0837 26.0173 13.7677 26.4143 14.2327 26.4143ZM15.4767 17.7053C15.4767 18.5523 14.7797 19.1403 13.9317 19.1403C13.0837 19.1403 12.3867 18.5523 12.3867 17.7053V13.9863L12.5237 11.9353L11.6487 12.8923L10.9097 13.6583C10.6777 13.9313 10.2947 14.1363 9.9257 14.1363C9.1467 14.1363 8.5727 13.5903 8.5727 12.8383C8.5727 12.4143 8.7087 12.1133 9.0507 11.8123L12.7017 8.5043C13.0837 8.1623 13.4527 7.9573 13.9317 7.9573C14.4097 7.9573 14.7797 8.1623 15.1617 8.5043L18.8127 11.8123C19.1547 12.1133 19.2907 12.4143 19.2907 12.8383C19.2907 13.5903 18.7027 14.1363 17.9517 14.1363C17.5687 14.1363 17.1717 13.9313 16.9527 13.6583L16.2287 12.8923L15.3397 11.9353L15.4767 13.9863Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.134765625 27.111328125"
          className={className}
        >
          <path
            d="              M14.5747 27.1118C15.1207 27.1118 15.9417 26.6188 16.7477 26.0858C24.1717 21.1638 29.1347 15.2718 29.1347 9.3788C29.1347 3.7328 25.1837 -0.0002 20.6177 -0.0002C17.7597 -0.0002 15.7497 1.5718 14.5747 3.8008C13.3987 1.5718 11.3887 -0.0002 8.5317 -0.0002C3.9647 -0.0002 -0.0003 3.7328 -0.0003 9.3788C-0.0003 15.2718 4.9627 21.1638 12.4007 26.0858C13.1937 26.6188 14.0137 27.1118 14.5747 27.1118ZM15.9687 17.7458C15.9687 18.7438 15.1617 19.4008 14.1777 19.4008C13.1937 19.4008 12.3867 18.7438 12.3867 17.7458V14.7388L12.5647 12.8108L11.8397 13.6308L11.3747 14.1368C11.1157 14.4508 10.6777 14.6968 10.2407 14.6968C9.3657 14.6968 8.7087 14.0688 8.7087 13.2348C8.7087 12.7418 8.8457 12.4138 9.2557 12.0588L12.7147 8.9548C13.1527 8.5718 13.5897 8.2988 14.1777 8.2988C14.7657 8.2988 15.2167 8.5718 15.6407 8.9548L19.0997 12.0588C19.5097 12.4138 19.6467 12.7418 19.6467 13.2348C19.6467 14.0688 18.9767 14.6968 18.1157 14.6968C17.6917 14.6968 17.2127 14.4508 16.9807 14.1368L16.5297 13.6308L15.7907 12.8108L15.9687 14.7388Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.646484375 24.47265625"
          className={className}
        >
          <path
            d="              M13.3297 24.473C13.5767 24.473 13.9177 24.322 14.1637 24.172C21.6697 19.305 26.6467 13.713 26.6467 8.012C26.6467 3.336 23.4337 0 19.2087 0C16.6527 0 14.5057 1.449 13.3297 3.691C12.1677 1.463 10.0077 0 7.4377 0C3.2267 0 -0.0003 3.336 -0.0003 8.012C-0.0003 13.713 4.9767 19.305 12.4827 24.172C12.7287 24.322 13.0837 24.473 13.3297 24.473ZM13.9047 17.76C13.9047 18.197 13.5217 18.566 13.0707 18.566C12.6187 18.566 12.2367 18.197 12.2367 17.76V11.949L12.3047 9.42L10.5277 11.252L9.3927 12.414C9.2427 12.564 9.0237 12.66 8.8047 12.66C8.3537 12.66 8.0257 12.346 8.0257 11.881C8.0257 11.594 8.1617 11.416 8.3537 11.238L12.4547 7.356C12.6877 7.15 12.8657 7.068 13.0707 7.068C13.2887 7.068 13.4667 7.15 13.6857 7.356L17.8007 11.238C17.9787 11.416 18.1287 11.594 18.1287 11.881C18.1287 12.346 17.7737 12.66 17.3357 12.66C17.1177 12.66 16.9117 12.564 16.7617 12.414L15.6267 11.252L13.8357 9.42L13.9047 11.949Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.630859375 25.580078125"
          className={className}
        >
          <path
            d="              M13.8087 25.5801C14.1637 25.5801 14.6697 25.3201 15.0797 25.0601C22.7227 20.1391 27.6307 14.3691 27.6307 8.5171C27.6307 3.5001 24.1587 0.0001 19.7967 0.0001C17.0767 0.0001 15.0387 1.5041 13.8087 3.7601C12.6057 1.5171 10.5547 0.0001 7.8337 0.0001C3.4727 0.0001 -0.0003 3.5001 -0.0003 8.5171C-0.0003 14.3691 4.9087 20.1391 12.5507 25.0601C12.9607 25.3201 13.4667 25.5801 13.8087 25.5801ZM14.8887 17.6781C14.8887 18.3481 14.3147 18.8531 13.6307 18.8531C12.9477 18.8531 12.3867 18.3481 12.3867 17.6781V13.0981L12.4957 10.8961L11.4157 12.0171L10.3637 13.0981C10.1447 13.3301 9.8297 13.4801 9.5297 13.4801C8.8727 13.4801 8.3947 13.0291 8.3947 12.3871C8.3947 12.0311 8.5317 11.7711 8.7907 11.5251L12.6877 7.9841C13.0157 7.6831 13.2887 7.5471 13.6307 7.5471C13.9867 7.5471 14.2597 7.6831 14.5877 7.9841L18.4707 11.5251C18.7307 11.7711 18.8807 12.0311 18.8807 12.3871C18.8807 13.0291 18.3747 13.4801 17.7457 13.4801C17.4317 13.4801 17.1177 13.3301 16.9117 13.0981L15.8457 12.0171L14.7797 10.8961L14.8887 13.0981Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.166015625 25.1015625"
          className={className}
        >
          <path
            d="              M13.5767 25.102C13.8637 25.102 14.2737 24.91 14.5747 24.732C22.2847 19.81 27.1657 14.082 27.1657 8.258C27.1657 3.418 23.8437 0 19.5367 0C16.8707 0 14.8207 1.477 13.5767 3.732C12.3597 1.49 10.2947 0 7.6157 0C3.3227 0 -0.0003 3.418 -0.0003 8.258C-0.0003 14.082 4.8807 19.81 12.5917 24.732C12.8787 24.91 13.3027 25.102 13.5767 25.102ZM14.5607 17.637C14.5607 18.211 14.0547 18.689 13.4667 18.689C12.8787 18.689 12.3867 18.211 12.3867 17.637V12.578L12.4687 10.295L11.2927 11.512L10.0487 12.783C9.8577 12.975 9.5707 13.098 9.2967 13.098C8.7087 13.098 8.2987 12.701 8.2987 12.113C8.2987 11.799 8.4357 11.566 8.6547 11.361L12.6737 7.67C12.9747 7.396 13.1937 7.301 13.4667 7.301C13.7407 7.301 13.9587 7.396 14.2597 7.67L18.2797 11.361C18.4977 11.566 18.6347 11.799 18.6347 12.113C18.6347 12.701 18.1977 13.098 17.6367 13.098C17.3497 13.098 17.0897 12.975 16.8847 12.783L15.6407 11.512L14.4647 10.295L14.5607 12.578Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.986328125 25.935546875"
          className={className}
        >
          <path
            d="              M13.9997 25.9359C14.3827 25.9359 14.9707 25.6209 15.4767 25.2929C23.0647 20.3709 27.9867 14.5739 27.9867 8.7229C27.9867 3.5549 24.4047 -0.0001 19.9887 -0.0001C17.2407 -0.0001 15.2027 1.5179 13.9997 3.7599C12.7837 1.5309 10.7457 -0.0001 7.9977 -0.0001C3.5817 -0.0001 -0.0003 3.5549 -0.0003 8.7229C-0.0003 14.5739 4.9217 20.3709 12.5097 25.2929C13.0157 25.6209 13.6037 25.9359 13.9997 25.9359ZM15.1487 17.6919C15.1487 18.4429 14.5197 18.9899 13.7677 18.9899C13.0017 18.9899 12.3867 18.4429 12.3867 17.6919V13.4809L12.5097 11.3479L11.5257 12.4009L10.6097 13.3439C10.3767 13.5899 10.0347 13.7679 9.6937 13.7679C8.9827 13.7679 8.4627 13.2759 8.4627 12.5779C8.4627 12.1949 8.6137 11.9219 8.9007 11.6489L12.6877 8.2029C13.0427 7.8889 13.3577 7.7249 13.7677 7.7249C14.1637 7.7249 14.4787 7.8889 14.8337 8.2029L18.6207 11.6489C18.9217 11.9219 19.0587 12.1949 19.0587 12.5779C19.0587 13.2759 18.5257 13.7679 17.8277 13.7679C17.4997 13.7679 17.1447 13.5899 16.9257 13.3439L16.0097 12.4009L15.0257 11.3479L15.1487 13.4809Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.9765625 23.638671875"
          className={className}
        >
          <path
            d="              M12.9887 23.6392C13.1937 23.6392 13.4397 23.5292 13.6307 23.4062C20.8637 18.6212 25.9767 13.2072 25.9767 7.6702C25.9767 3.1992 22.8867 0.0002 18.7717 0.0002C16.3517 0.0002 14.0817 1.4082 12.9887 3.6092C11.9087 1.4222 9.6247 0.0002 7.2047 0.0002C3.0897 0.0002 -0.0003 3.1992 -0.0003 7.6702C-0.0003 13.2072 5.1137 18.6212 12.3597 23.4062C12.5367 23.5292 12.7967 23.6392 12.9887 23.6392ZM13.0567 17.8962C13.0567 18.1702 12.8247 18.3892 12.5507 18.3892C12.2777 18.3892 12.0447 18.1702 12.0447 17.8962V11.1152L12.0997 8.2582L9.5017 10.8832L8.5177 11.9082C8.4357 11.9902 8.2847 12.0582 8.1487 12.0582C7.8747 12.0582 7.6567 11.8532 7.6567 11.5662C7.6567 11.3202 7.8067 11.2112 7.9437 11.0742L12.1817 6.9182C12.2907 6.8082 12.4277 6.7402 12.5507 6.7402C12.6737 6.7402 12.8107 6.8082 12.9197 6.9182L17.1587 11.0742C17.3087 11.2112 17.4457 11.3202 17.4457 11.5662C17.4457 11.8532 17.2267 12.0582 16.9527 12.0582C16.8167 12.0582 16.6797 11.9902 16.5837 11.9082L15.5997 10.8832L13.0157 8.2582L13.0567 11.1152Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.634765625 23.201171875"
          className={className}
        >
          <path
            d="              M12.8107 23.2014C12.9887 23.2014 13.1937 23.1194 13.3437 23.0234C20.4527 18.2794 25.6347 12.9474 25.6347 7.4924C25.6347 3.1304 22.6137 0.0004 18.5527 0.0004C16.2017 0.0004 13.8637 1.3944 12.8107 3.5684C11.7717 1.3944 9.4337 0.0004 7.0817 0.0004C3.0217 0.0004 -0.0003 3.1304 -0.0003 7.4924C-0.0003 12.9474 5.1677 18.2794 12.2777 23.0234C12.4417 23.1194 12.6467 23.2014 12.8107 23.2014ZM12.6187 17.9644C12.6187 18.1424 12.4687 18.2934 12.2907 18.2934C12.0997 18.2934 11.9497 18.1424 11.9497 17.9644V10.6774L11.9907 7.6564L8.9827 10.6914L8.0667 11.6484C8.0117 11.7034 7.9157 11.7444 7.8067 11.7444C7.6287 11.7444 7.4787 11.5934 7.4787 11.3884C7.4787 11.1694 7.6157 11.1014 7.7387 10.9784L12.0317 6.6994C12.0997 6.6304 12.1957 6.5764 12.2907 6.5764C12.3727 6.5764 12.4687 6.6304 12.5367 6.6994L16.8297 10.9784C16.9527 11.1014 17.0897 11.1694 17.0897 11.3884C17.0897 11.5934 16.9397 11.7444 16.7617 11.7444C16.6527 11.7444 16.5567 11.7034 16.5017 11.6484L15.5857 10.6914L12.5917 7.6564L12.6187 10.6774Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}