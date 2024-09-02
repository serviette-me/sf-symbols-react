import { IconProps } from "../../types"

export default function TagSquareIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM10.5407 20.1662C11.5527 21.1913 12.7697 21.4513 13.8227 20.3983L20.0707 14.1503C20.5347 13.6853 20.7407 13.3853 20.7407 12.6333V10.2543C20.7407 9.5563 20.6177 9.1873 20.1387 8.7093L18.7717 7.3423C18.3067 6.8773 17.9237 6.7403 17.2267 6.7403H14.8337C14.1097 6.7403 13.7817 6.9593 13.3297 7.4103L7.1097 13.6313C6.0567 14.6833 6.2757 15.9143 7.3007 16.9393ZM15.2717 12.1953C14.7797 11.7173 14.7657 10.8692 15.2847 10.3773C15.7907 9.8713 16.5977 9.8713 17.1037 10.3773C17.5817 10.8553 17.6097 11.6893 17.1037 12.1953C16.5837 12.6873 15.7637 12.6873 15.2717 12.1953Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM10.1587 19.9337C11.0747 20.8497 12.0997 20.9867 13.0427 20.0297L19.4827 13.6307C19.9747 13.1527 20.2757 12.8107 20.2757 12.0177V9.5427C20.2757 8.8867 20.1247 8.5317 19.6737 8.0797L18.4027 6.8087C17.9647 6.3707 17.5957 6.1657 16.9397 6.1657H14.4097C13.6307 6.1657 13.2887 6.4667 12.7967 6.9587L6.4117 13.3847C5.4687 14.3277 5.5777 15.3397 6.5077 16.2697ZM15.1487 11.2797C14.7107 10.8557 14.7107 10.1167 15.1617 9.6797C15.5997 9.2417 16.3107 9.2417 16.7477 9.6797C17.1857 10.1037 17.1997 10.8277 16.7477 11.2657C16.2967 11.7167 15.5857 11.7167 15.1487 11.2797Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM10.3637 20.0705C11.3337 21.0415 12.4547 21.2325 13.4527 20.2345L19.7967 13.9175C20.2757 13.4395 20.5217 13.1245 20.5217 12.3455V9.9255C20.5217 9.2425 20.3847 8.8865 19.9197 8.4215L18.6077 7.0955C18.1427 6.6445 17.7737 6.4805 17.0897 6.4805H14.6287C13.8767 6.4805 13.5487 6.7265 13.0707 7.2055L6.7817 13.5215C5.7837 14.5335 5.9477 15.6545 6.9317 16.6245ZM15.2167 11.7715C14.7517 11.3065 14.7387 10.5275 15.2167 10.0485C15.7087 9.5835 16.4607 9.5835 16.9397 10.0485C17.3907 10.5135 17.4177 11.2925 16.9257 11.7575C16.4477 12.2365 15.6817 12.2365 15.2167 11.7715Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM9.8297 19.5095C10.5277 20.2075 11.2387 20.2205 11.9767 19.4965L18.7847 12.7425C19.2637 12.2635 19.6057 11.9215 19.6057 11.1425V8.5175C19.6057 7.9435 19.4417 7.6155 19.0587 7.2185L17.8277 6.0155C17.4317 5.6325 17.1037 5.4005 16.5157 5.4005H13.8357C13.0837 5.4005 12.7147 5.7425 12.2367 6.2205L5.4957 13.0155C4.7717 13.7535 4.7847 14.4515 5.4827 15.1485ZM15.0117 9.9805C14.6567 9.6385 14.6567 9.0645 15.0117 8.6955C15.3397 8.3395 15.9277 8.3395 16.2837 8.6955C16.6387 9.0375 16.6387 9.6115 16.2697 9.9805C15.9277 10.3355 15.3537 10.3225 15.0117 9.9805Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.525390625"
          className={className}
        >
          <path
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM9.9117 19.7693C10.7737 20.6313 11.6617 20.6853 12.5507 19.7973L19.0997 13.2893C19.6187 12.7973 19.9747 12.4273 19.9747 11.6073V9.0783C19.9747 8.4493 19.8107 8.0933 19.3867 7.6563L18.1697 6.4533C17.7457 6.0293 17.3767 5.7833 16.7477 5.7833H14.1367C13.3297 5.7833 12.9607 6.1523 12.4547 6.6583L5.9747 13.2073C5.0857 14.0953 5.1267 14.9703 5.9887 15.8323ZM15.0667 10.6913C14.6697 10.2953 14.6697 9.6253 15.0797 9.2283C15.4767 8.8183 16.1187 8.8183 16.5297 9.2283C16.9257 9.6113 16.9257 10.2673 16.5157 10.6773C16.1187 11.0883 15.4627 11.0883 15.0667 10.6913Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM9.7757 19.6735C10.6097 20.4945 11.4297 20.5075 12.2777 19.6605L18.8807 13.0975C19.4137 12.5915 19.7967 12.2225 19.7967 11.3885V8.8185C19.7967 8.2035 19.6327 7.8475 19.2227 7.4235L18.0337 6.2475C17.6097 5.8375 17.2537 5.5785 16.6387 5.5785H13.9867C13.1657 5.5785 12.7837 5.9605 12.2637 6.4945L5.7147 13.1115C4.8807 13.9585 4.8807 14.7655 5.7017 15.5855ZM15.0257 10.3495C14.6427 9.9805 14.6427 9.3515 15.0257 8.9685C15.3947 8.5855 16.0237 8.5855 16.3927 8.9685C16.7757 9.3375 16.7757 9.9535 16.3927 10.3355C16.0097 10.7325 15.4087 10.7325 15.0257 10.3495Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM10.0217 19.838C10.9097 20.727 11.8537 20.809 12.7697 19.906L19.2637 13.439C19.7697 12.947 20.0977 12.592 20.0977 11.785V9.283C20.0977 8.641 19.9477 8.285 19.5097 7.834L18.2657 6.604C17.8417 6.18 17.4727 5.947 16.8297 5.947H14.2597C13.4667 5.947 13.0977 6.289 12.6057 6.795L6.1657 13.289C5.2497 14.191 5.3317 15.135 6.2067 16.023ZM15.1077 10.937C14.6977 10.541 14.6837 9.844 15.1077 9.42C15.5317 9.01 16.2017 9.01 16.6247 9.42C17.0347 9.83 17.0487 10.514 16.6247 10.937C16.1877 11.361 15.5177 11.361 15.1077 10.937Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM9.8987 19.2774C10.4317 19.7974 11.0057 19.8384 11.5797 19.2634L18.6347 12.2504C19.0857 11.8264 19.3457 11.4984 19.3457 10.8144V8.1214C19.3457 7.5744 19.1957 7.2874 18.8267 6.9314L17.5547 5.6874C17.1857 5.3324 16.8987 5.1544 16.3657 5.1544H13.6447C12.9747 5.1544 12.6467 5.4144 12.1957 5.8654L5.2087 12.8924C4.6347 13.4664 4.6487 14.0274 5.1817 14.5474ZM14.9847 9.4884C14.6567 9.1874 14.6567 8.6684 14.9847 8.3264C15.2717 8.0114 15.8187 8.0114 16.1327 8.3264C16.4607 8.6274 16.4477 9.1324 16.1187 9.4744C15.8317 9.8024 15.2847 9.7894 14.9847 9.4884Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.912109375"
          className={className}
        >
          <path
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM9.9397 19.141C10.3767 19.592 10.8827 19.633 11.3887 19.141L18.5667 12.004C18.9767 11.594 19.2087 11.293 19.2087 10.65V7.902C19.2087 7.383 19.0727 7.123 18.7167 6.768L17.4047 5.51C17.0627 5.182 16.8027 5.031 16.2837 5.031H13.5347C12.9197 5.031 12.6057 5.25 12.1817 5.674L5.0587 12.811C4.5667 13.316 4.5937 13.795 5.0317 14.246ZM14.9707 9.229C14.6697 8.941 14.6697 8.463 14.9707 8.135C15.2307 7.834 15.7637 7.834 16.0507 8.135C16.3657 8.408 16.3517 8.887 16.0367 9.229C15.7777 9.516 15.2577 9.502 14.9707 9.229Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}