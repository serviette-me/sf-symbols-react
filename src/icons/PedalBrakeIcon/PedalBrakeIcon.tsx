import { IconProps } from "../../types"

export default function PedalBrakeIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.8846590243783 27.17184264289797"
          className={className}
        >
          <path
            d="              M5.3727 27.172H22.3807C27.4397 27.172 29.9137 24.615 30.6117 18.777C30.9937 15.578 30.9937 12.338 30.4887 8.059C29.8047 1.797 26.5777 -0.609 19.9747 0.129L5.9067 1.715C2.1187 2.139 -0.0003 4.504 -0.0003 8.291V21.812C-0.0003 25.244 1.9417 27.172 5.3727 27.172ZM6.1117 22.318C5.3047 22.318 4.8537 21.867 4.8537 21.074V8.291C4.8537 7.279 5.4137 6.637 6.4117 6.527L20.4937 4.969C23.7757 4.6 25.3477 5.639 25.6757 8.318C26.1547 12.461 26.1547 15.455 25.7987 18.518C25.4567 21.197 24.4867 22.318 22.3807 22.318ZM8.6677 11.203H22.1617C22.9007 11.203 23.4747 10.629 23.4747 9.904C23.4747 9.18 22.9007 8.605 22.1617 8.605H8.6677C7.9567 8.605 7.3967 9.18 7.3967 9.904C7.3967 10.629 7.9567 11.203 8.6677 11.203ZM8.6677 15.592H22.1617C22.9007 15.592 23.4747 15.018 23.4747 14.307C23.4747 13.568 22.9007 13.008 22.1617 13.008H8.6677C7.9567 13.008 7.3967 13.568 7.3967 14.307C7.3967 15.018 7.9567 15.592 8.6677 15.592ZM8.6677 19.967H22.1617C22.9007 19.967 23.4747 19.406 23.4747 18.682C23.4747 17.943 22.9007 17.383 22.1617 17.383H8.6677C7.9567 17.383 7.3967 17.943 7.3967 18.682C7.3967 19.406 7.9567 19.967 8.6677 19.967Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.083440707203692 25.44420565131784"
          className={className}
        >
          <path
            d="              M4.8537 25.444H21.3557C26.1677 25.444 28.1917 23.038 28.8207 17.733C29.1897 14.643 29.1897 11.526 28.6977 7.37C28.0687 1.71 25.0607 -0.546 19.0587 0.11L5.4007 1.655C1.9007 2.052 -0.0003 4.13 -0.0003 7.52V20.604C-0.0003 23.681 1.7777 25.444 4.8537 25.444ZM5.2227 21.917C4.1697 21.917 3.5137 21.288 3.5137 20.235V7.52C3.5137 6.153 4.3067 5.306 5.7557 5.155L19.4277 3.624C23.0507 3.214 24.8557 4.444 25.2107 7.507C25.6897 11.595 25.6897 14.575 25.3207 17.597C24.9377 20.823 24.1447 21.917 21.3557 21.917ZM7.5197 10.077H21.4517C22.0667 10.077 22.5447 9.598 22.5447 8.997C22.5447 8.382 22.0667 7.889 21.4517 7.889H7.5197C6.9047 7.889 6.4257 8.382 6.4257 8.997C6.4257 9.598 6.9047 10.077 7.5197 10.077ZM7.5197 14.548H21.4517C22.0667 14.548 22.5447 14.069 22.5447 13.454C22.5447 12.839 22.0667 12.36 21.4517 12.36H7.5197C6.9047 12.36 6.4257 12.839 6.4257 13.454C6.4257 14.069 6.9047 14.548 7.5197 14.548ZM7.5197 19.005H21.4517C22.0667 19.005 22.5447 18.526 22.5447 17.911C22.5447 17.296 22.0667 16.817 21.4517 16.817H7.5197C6.9047 16.817 6.4257 17.296 6.4257 17.911C6.4257 18.526 6.9047 19.005 7.5197 19.005Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.037002774378294 26.369240524042635"
          className={className}
        >
          <path
            d="              M5.1267 26.3695H21.8887C26.8377 26.3695 29.1077 23.8675 29.7637 18.2895C30.1467 15.1445 30.1467 11.9595 29.6407 7.7345C28.9847 1.7595 25.8537 -0.5785 19.5367 0.1195L5.6737 1.6915C2.0237 2.1015 -0.0003 4.3305 -0.0003 7.9395V21.2425C-0.0003 24.5095 1.8597 26.3695 5.1267 26.3695ZM5.6877 22.1445C4.7717 22.1445 4.2247 21.5975 4.2247 20.6815V7.9395C4.2247 6.7505 4.8947 6.0115 6.0977 5.8755L19.9887 4.3305C23.4337 3.9475 25.1157 5.0685 25.4567 7.9395C25.9357 12.0545 25.9357 15.0355 25.5797 18.0845C25.2107 21.0235 24.3227 22.1445 21.8887 22.1445ZM8.1207 10.6735H21.8207C22.5037 10.6735 23.0367 10.1405 23.0367 9.4845C23.0367 8.8005 22.5037 8.2675 21.8207 8.2675H8.1207C7.4647 8.2675 6.9457 8.8005 6.9457 9.4845C6.9457 10.1405 7.4647 10.6735 8.1207 10.6735ZM8.1207 15.1035H21.8207C22.5037 15.1035 23.0367 14.5705 23.0367 13.9145C23.0367 13.2305 22.5037 12.6975 21.8207 12.6975H8.1207C7.4647 12.6975 6.9457 13.2305 6.9457 13.9145C6.9457 14.5705 7.4647 15.1035 8.1207 15.1035ZM8.1207 19.5195H21.8207C22.5037 19.5195 23.0367 18.9865 23.0367 18.3165C23.0367 17.6465 22.5037 17.1135 21.8207 17.1135H8.1207C7.4647 17.1135 6.9457 17.6465 6.9457 18.3165C6.9457 18.9865 7.4647 19.5195 8.1207 19.5195Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.776366409309368 23.20715116954929"
          className={className}
        >
          <path
            d="              M4.0057 23.2074H20.0707C24.5137 23.2074 25.9767 21.1154 26.5237 16.4254C26.8787 13.4314 26.8787 10.4784 26.4007 6.4454C25.8397 1.4554 23.2427 -0.4866 17.9097 0.1014L4.6617 1.6054C1.5997 1.9474 -0.0003 3.6294 -0.0003 6.5004V19.2284C-0.0003 21.7444 1.4627 23.2074 4.0057 23.2074ZM4.0197 21.5254C2.5837 21.5254 1.6677 20.6644 1.6677 19.2014V6.5004C1.6677 4.5994 2.7617 3.5064 4.8397 3.2734L18.1017 1.7834C22.2987 1.3184 24.3087 2.7404 24.7327 6.4864C25.1977 10.5064 25.1977 13.4184 24.8557 16.3844C24.3907 20.3494 23.6657 21.5254 20.0707 21.5254ZM6.1117 8.5374H20.5217C20.9177 8.5374 21.2327 8.2094 21.2327 7.8264C21.2327 7.4294 20.9177 7.1154 20.5217 7.1154H6.1117C5.7287 7.1154 5.4007 7.4294 5.4007 7.8264C5.4007 8.2094 5.7287 8.5374 6.1117 8.5374ZM6.1117 13.0764H20.5217C20.9177 13.0764 21.2327 12.7484 21.2327 12.3654C21.2327 11.9684 20.9177 11.6544 20.5217 11.6544H6.1117C5.7287 11.6544 5.4007 11.9684 5.4007 12.3654C5.4007 12.7484 5.7287 13.0764 6.1117 13.0764ZM6.1117 17.6014H20.5217C20.9177 17.6014 21.2327 17.2874 21.2327 16.8904C21.2327 16.5084 20.9177 16.1934 20.5217 16.1934H6.1117C5.7287 16.1934 5.4007 16.5084 5.4007 16.8904C5.4007 17.2874 5.7287 17.6014 6.1117 17.6014Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.92617595317467 24.328406552358828"
          className={className}
        >
          <path
            d="              M4.5257 24.3284H20.6997C25.3617 24.3284 27.0977 22.0174 27.6717 17.0684C28.0277 14.0334 28.0277 11.0124 27.5627 6.9104C26.9607 1.6464 24.0767 -0.5136 18.4707 0.1014L5.0727 1.6194C1.7777 1.9744 -0.0003 3.8894 -0.0003 7.0194V19.8444C-0.0003 22.6744 1.6677 24.3284 4.5257 24.3284ZM4.6617 21.6624C3.4457 21.6624 2.6527 20.8964 2.6527 19.7074V7.0194C2.6527 5.4204 3.6097 4.4494 5.3457 4.2584L18.7577 2.7674C22.5857 2.3304 24.5277 3.6704 24.9097 6.9784C25.3747 11.0394 25.3747 14.0064 25.0337 17.0144C24.6097 20.5684 23.9257 21.6624 20.6997 21.6624ZM6.7817 9.3714H20.9867C21.5197 9.3714 21.9567 8.9334 21.9567 8.4004C21.9567 7.8674 21.5197 7.4304 20.9867 7.4304H6.7817C6.2477 7.4304 5.8107 7.8674 5.8107 8.4004C5.8107 8.9334 6.2477 9.3714 6.7817 9.3714ZM6.7817 13.8694H20.9867C21.5197 13.8694 21.9567 13.4454 21.9567 12.9124C21.9567 12.3794 21.5197 11.9414 20.9867 11.9414H6.7817C6.2477 11.9414 5.8107 12.3794 5.8107 12.9124C5.8107 13.4454 6.2477 13.8694 6.7817 13.8694ZM6.7817 18.3814H20.9867C21.5197 18.3814 21.9567 17.9574 21.9567 17.4244C21.9567 16.8774 21.5197 16.4534 20.9867 16.4534H6.7817C6.2477 16.4534 5.8107 16.8774 5.8107 17.4244C5.8107 17.9574 6.2477 18.3814 6.7817 18.3814Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.282225784309365 23.703296244170055"
          className={className}
        >
          <path
            d="              M4.3337 23.7035H20.3297C24.8967 23.7035 26.4827 21.4475 27.0297 16.7035C27.3847 13.6955 27.3847 10.7155 26.9067 6.6685C26.3457 1.6235 23.5297 -0.4825 18.1427 0.0925L4.8947 1.5955C1.6957 1.9515 -0.0003 3.7565 -0.0003 6.7505V19.4105C-0.0003 22.1175 1.6137 23.7035 4.3337 23.7035ZM4.3477 21.5155C3.0347 21.5155 2.1737 20.6955 2.1737 19.4105V6.7505C2.1737 5.0275 3.2127 3.9885 5.1137 3.7695L18.3747 2.2795C22.3267 1.8425 24.3497 3.2365 24.7327 6.6815C25.2107 10.7285 25.2107 13.6955 24.8557 16.6895C24.4177 20.4355 23.8027 21.5155 20.3297 21.5155ZM6.3577 8.9655H20.7267C21.2187 8.9655 21.6157 8.5685 21.6157 8.0765C21.6157 7.5845 21.2187 7.1745 20.7267 7.1745H6.3577C5.8657 7.1745 5.4687 7.5845 5.4687 8.0765C5.4687 8.5685 5.8657 8.9655 6.3577 8.9655ZM6.3577 13.5045H20.7267C21.2187 13.5045 21.6157 13.1075 21.6157 12.6155C21.6157 12.1235 21.2187 11.7135 20.7267 11.7135H6.3577C5.8657 11.7135 5.4687 12.1235 5.4687 12.6155C5.4687 13.1075 5.8657 13.5045 6.3577 13.5045ZM6.3577 18.0435H20.7267C21.2187 18.0435 21.6157 17.6465 21.6157 17.1405C21.6157 16.6485 21.2187 16.2525 20.7267 16.2525H6.3577C5.8657 16.2525 5.4687 16.6485 5.4687 17.1405C5.4687 17.6465 5.8657 18.0435 6.3577 18.0435Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.43066328430936 24.809358211518973"
          className={className}
        >
          <path
            d="              M4.6617 24.8093H20.9867C25.7027 24.8093 27.5767 22.4583 28.1777 17.3583C28.5337 14.2953 28.5337 11.2333 28.0547 7.1043C27.4397 1.6763 24.4997 -0.5247 18.7167 0.1043L5.2227 1.6353C1.8317 2.0043 -0.0003 4.0003 -0.0003 7.2413V20.1743C-0.0003 23.1143 1.7087 24.8093 4.6617 24.8093ZM4.9087 21.7743C3.7597 21.7743 3.0217 21.0633 3.0217 19.9283V7.2413C3.0217 5.7373 3.9097 4.8213 5.5237 4.6433L19.0447 3.1393C22.7907 2.7153 24.6637 4.0003 25.0337 7.2003C25.5117 11.2743 25.5117 14.2543 25.1567 17.2623C24.7457 20.6803 24.0217 21.7743 20.9867 21.7743ZM7.0957 9.6743H21.1777C21.7517 9.6743 22.2027 9.2233 22.2027 8.6493C22.2027 8.0883 21.7517 7.6243 21.1777 7.6243H7.0957C6.5347 7.6243 6.0837 8.0883 6.0837 8.6493C6.0837 9.2233 6.5347 9.6743 7.0957 9.6743ZM7.0957 14.1723H21.1777C21.7517 14.1723 22.2027 13.7073 22.2027 13.1473C22.2027 12.5733 21.7517 12.1223 21.1777 12.1223H7.0957C6.5347 12.1223 6.0837 12.5733 6.0837 13.1473C6.0837 13.7073 6.5347 14.1723 7.0957 14.1723ZM7.0957 18.6573H21.1777C21.7517 18.6573 22.2027 18.1923 22.2027 17.6313C22.2027 17.0573 21.7517 16.6063 21.1777 16.6063H7.0957C6.5347 16.6063 6.0837 17.0573 6.0837 17.6313C6.0837 18.1923 6.5347 18.6573 7.0957 18.6573Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.09624898107869 22.532348002896626"
          className={className}
        >
          <path
            d="              M3.5687 22.5324H19.7427C23.9937 22.5324 25.3207 20.6594 25.8537 16.0514C26.1957 13.0854 26.1957 10.1734 25.7307 6.1394C25.1837 1.2454 22.8457 -0.4776 17.6097 0.1104L4.3617 1.6004C1.4627 1.9284 -0.0003 3.4734 -0.0003 6.1674V18.9644C-0.0003 21.2334 1.2717 22.5324 3.5687 22.5324ZM3.5957 21.5204C1.9687 21.5204 1.0117 20.6184 1.0117 18.9364V6.1674C1.0117 4.0484 2.1597 2.8854 4.4707 2.6124L17.7327 1.1224C22.2577 0.6164 24.2537 2.0654 24.7187 6.2214C25.1837 10.2004 25.1837 13.0574 24.8417 15.9834C24.3497 20.2354 23.4747 21.5204 19.7427 21.5204ZM5.7837 7.9584H20.2617C20.5217 7.9584 20.7267 7.7394 20.7267 7.4934C20.7267 7.2334 20.5217 7.0284 20.2617 7.0284H5.7837C5.5367 7.0284 5.3187 7.2334 5.3187 7.4934C5.3187 7.7394 5.5367 7.9584 5.7837 7.9584ZM5.7837 12.4974H20.2617C20.5217 12.4974 20.7267 12.2784 20.7267 12.0324C20.7267 11.7724 20.5217 11.5674 20.2617 11.5674H5.7837C5.5367 11.5674 5.3187 11.7724 5.3187 12.0324C5.3187 12.2784 5.5367 12.4974 5.7837 12.4974ZM5.7837 17.0224H20.2617C20.5217 17.0224 20.7267 16.8174 20.7267 16.5574C20.7267 16.3114 20.5217 16.1064 20.2617 16.1064H5.7837C5.5367 16.1064 5.3187 16.3114 5.3187 16.5574C5.3187 16.8174 5.5367 17.0224 5.7837 17.0224Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.750975784309365 22.19544475741907"
          className={className}
        >
          <path
            d="              M3.3497 22.1952H19.5647C23.7347 22.1952 24.9787 20.4322 25.4977 15.8792C25.8537 12.9122 25.8537 10.0142 25.3747 6.0082C24.8417 1.1412 22.6547 -0.4728 17.4587 0.1152L4.2107 1.6192C1.3947 1.9332 -0.0003 3.3962 -0.0003 6.0082V18.8462C-0.0003 20.9922 1.1757 22.1952 3.3497 22.1952ZM3.3907 21.5252C1.6547 21.5252 0.6697 20.6092 0.6697 18.8182V6.0082C0.6697 3.7792 1.8597 2.5762 4.2797 2.2892L17.5407 0.7852C22.2307 0.2662 24.2127 1.7282 24.7047 6.0902C25.1837 10.0552 25.1837 12.8852 24.8277 15.7972C24.3227 20.1852 23.3787 21.5252 19.5647 21.5252ZM5.6187 7.6762H20.1247C20.3167 7.6762 20.4667 7.5122 20.4667 7.3342C20.4667 7.1422 20.3167 6.9922 20.1247 6.9922H5.6187C5.4417 6.9922 5.2907 7.1422 5.2907 7.3342C5.2907 7.5122 5.4417 7.6762 5.6187 7.6762ZM5.6187 12.2012H20.1247C20.3167 12.2012 20.4667 12.0512 20.4667 11.8732C20.4667 11.6822 20.3167 11.5312 20.1247 11.5312H5.6187C5.4417 11.5312 5.2907 11.6822 5.2907 11.8732C5.2907 12.0512 5.4417 12.2012 5.6187 12.2012ZM5.6187 16.7402H20.1247C20.3167 16.7402 20.4667 16.5902 20.4667 16.3982C20.4667 16.2212 20.3167 16.0702 20.1247 16.0702H5.6187C5.4417 16.0702 5.2907 16.2212 5.2907 16.3982C5.2907 16.5902 5.4417 16.7402 5.6187 16.7402Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}