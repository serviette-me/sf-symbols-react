import { IconProps } from "../../types"

export default function TugriksignSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM13.5347 19.5643C14.5337 19.5643 15.2717 18.9903 15.2717 17.7873V15.6813L16.9937 15.0663C17.2537 14.9703 17.3907 14.7653 17.3907 14.5333C17.3907 14.2323 17.1587 14.0003 16.8707 14.0003C16.7887 14.0003 16.7207 14.0133 16.6387 14.0413L15.2717 14.5333V13.5353L16.9937 12.9203C17.2537 12.8383 17.3907 12.6192 17.3907 12.3863C17.3907 12.0863 17.1587 11.8532 16.8707 11.8532C16.7887 11.8532 16.7207 11.8813 16.6387 11.8943L15.2717 12.4003V10.7873H17.4727C18.3207 10.7873 18.9087 10.2133 18.9087 9.3653C18.9087 8.5173 18.3207 7.9433 17.4727 7.9433H9.6117C8.7637 7.9433 8.1617 8.5173 8.1617 9.3653C8.1617 10.2133 8.7637 10.7873 9.6117 10.7873H11.7987V13.6033L10.1037 14.2053C9.8577 14.3013 9.7207 14.5063 9.7207 14.7383C9.7207 15.0393 9.9527 15.2713 10.2407 15.2713C10.3087 15.2713 10.3907 15.2443 10.4587 15.2303L11.7987 14.7523V15.7503L10.1037 16.3383C9.8577 16.4333 9.7207 16.6523 9.7207 16.8853C9.7207 17.1722 9.9527 17.4183 10.2407 17.4183C10.3087 17.4183 10.3907 17.3903 10.4587 17.3773L11.7987 16.8853V17.7873C11.7987 18.9903 12.5367 19.5643 13.5347 19.5643Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM13.0707 19.4417C13.8227 19.4417 14.3687 18.9767 14.3687 18.1017V15.5177L16.4067 14.6837C16.6797 14.5737 16.8297 14.3687 16.8297 14.0957C16.8297 13.7537 16.5837 13.5077 16.2427 13.5077C16.1467 13.5077 16.0507 13.5217 15.9547 13.5627L14.3687 14.2187V13.0707L16.4067 12.2367C16.6797 12.1267 16.8297 11.9077 16.8297 11.6487C16.8297 11.3067 16.5837 11.0467 16.2427 11.0467C16.1467 11.0467 16.0507 11.0737 15.9547 11.1147L14.3687 11.7717V9.3647H17.1037C17.7737 9.3647 18.2517 8.9137 18.2517 8.2437C18.2517 7.5737 17.7737 7.1227 17.1037 7.1227H9.0237C8.3537 7.1227 7.8747 7.5737 7.8747 8.2437C7.8747 8.9137 8.3537 9.3647 9.0237 9.3647H11.7437V12.7417L9.7477 13.5627C9.4607 13.6857 9.3247 13.8907 9.3247 14.1507C9.3247 14.4917 9.5707 14.7517 9.9117 14.7517C10.0077 14.7517 10.1037 14.7247 10.1997 14.6837L11.7437 14.0407V15.1897L9.7477 16.0097C9.4607 16.1327 9.3247 16.3377 9.3247 16.6117C9.3247 16.9397 9.5707 17.1987 9.9117 17.1987C10.0077 17.1987 10.1037 17.1717 10.1997 17.1307L11.7437 16.4887V18.1017C11.7437 18.9767 12.3047 19.4417 13.0707 19.4417Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM13.3167 19.5235C14.1917 19.5235 14.8477 18.9905 14.8477 17.9375V15.6135L16.7207 14.9025C16.9807 14.7925 17.1307 14.5875 17.1307 14.3285C17.1307 14.0135 16.8847 13.7675 16.5707 13.7675C16.4887 13.7675 16.4067 13.7945 16.3247 13.8225L14.8477 14.3965V13.3305L16.7207 12.6055C16.9807 12.5095 17.1307 12.2915 17.1307 12.0445C17.1307 11.7305 16.8847 11.4845 16.5707 11.4845C16.4887 11.4845 16.4067 11.5115 16.3247 11.5255L14.8477 12.1135V10.1305H17.2947C18.0607 10.1305 18.5937 9.6115 18.5937 8.8455C18.5937 8.0805 18.0607 7.5605 17.2947 7.5605H9.3247C8.5587 7.5605 8.0257 8.0805 8.0257 8.8455C8.0257 9.6115 8.5587 10.1305 9.3247 10.1305H11.7717V13.2075L9.9397 13.9045C9.6657 14.0135 9.5297 14.2185 9.5297 14.4785C9.5297 14.7795 9.7617 15.0255 10.0897 15.0255C10.1717 15.0255 10.2537 15.0115 10.3357 14.9845L11.7717 14.4235V15.4905L9.9397 16.1875C9.6657 16.2965 9.5297 16.5015 9.5297 16.7615C9.5297 17.0765 9.7617 17.3225 10.0897 17.3225C10.1717 17.3225 10.2537 17.2945 10.3357 17.2675L11.7717 16.7075V17.9375C11.7717 18.9905 12.4277 19.5235 13.3167 19.5235Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM12.3867 18.8945C12.7967 18.8945 13.0837 18.6075 13.0837 18.1695V14.9295L15.4497 13.8765C15.7227 13.7535 15.8317 13.5765 15.8317 13.3435C15.8317 13.0295 15.6137 12.7965 15.2987 12.7965C15.1757 12.7965 15.0527 12.8245 14.9567 12.8655L13.0837 13.7125V12.3045L15.4497 11.2515C15.7227 11.1285 15.8317 10.9515 15.8317 10.7185C15.8317 10.3905 15.6267 10.1715 15.2847 10.1715C15.2027 10.1715 15.0937 10.1995 14.9977 10.2265L13.0837 11.0875V7.6285H16.5157C16.9257 7.6285 17.2127 7.3555 17.2127 6.9725C17.2127 6.5765 16.9257 6.3025 16.5157 6.3025H8.2437C7.8337 6.3025 7.5467 6.5765 7.5467 6.9725C7.5467 7.3555 7.8337 7.6285 8.2437 7.6285H11.6757V11.6895L9.3247 12.7285C9.0367 12.8515 8.9417 13.0155 8.9417 13.2615C8.9417 13.5765 9.1467 13.8085 9.4887 13.8085C9.5837 13.8085 9.6937 13.7815 9.8027 13.7265L11.6757 12.8925V14.3145L9.3247 15.3535C9.0367 15.4765 8.9417 15.6545 8.9417 15.8865C8.9417 16.2015 9.1467 16.4335 9.4887 16.4335C9.5837 16.4335 9.6937 16.4065 9.8027 16.3515L11.6757 15.5175V18.1695C11.6757 18.6075 11.9767 18.8945 12.3867 18.8945Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM12.7697 19.3593C13.3707 19.3593 13.7947 18.9633 13.7947 18.2933V15.4083L16.0237 14.4373C16.3247 14.3003 16.4747 14.0953 16.4747 13.8083C16.4747 13.4393 16.2147 13.1793 15.8457 13.1793C15.7367 13.1793 15.6137 13.2073 15.5037 13.2483L13.7947 14.0133V12.7563L16.0237 11.7853C16.3247 11.6623 16.4747 11.4573 16.4747 11.1703C16.4747 10.8003 16.2147 10.5273 15.8457 10.5273C15.7367 10.5273 15.6267 10.5543 15.5177 10.5953L13.7947 11.3613V8.4633H16.8707C17.4317 8.4633 17.8277 8.0803 17.8277 7.5193C17.8277 6.9723 17.4317 6.5903 16.8707 6.5903H8.6407C8.0797 6.5903 7.6837 6.9723 7.6837 7.5193C7.6837 8.0803 8.0797 8.4633 8.6407 8.4633H11.7167V12.1953L9.5157 13.1383C9.2017 13.2893 9.0777 13.4803 9.0777 13.7673C9.0777 14.1363 9.3247 14.4103 9.6937 14.4103C9.8027 14.4103 9.9257 14.3693 10.0347 14.3283L11.7167 13.5763V14.8343L9.5157 15.7913C9.2017 15.9413 9.0777 16.1333 9.0777 16.4203C9.0777 16.7893 9.3247 17.0493 9.6937 17.0493C9.8027 17.0493 9.9257 17.0213 10.0347 16.9803L11.7167 16.2283V18.2933C11.7167 18.9633 12.1547 19.3593 12.7697 19.3593Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM12.5917 19.3185C13.1117 19.3185 13.4807 18.9625 13.4807 18.4025V15.3395L15.8047 14.3005C16.1187 14.1505 16.2697 13.9455 16.2697 13.6445C16.2697 13.2615 16.0097 12.9885 15.6267 12.9885C15.5037 12.9885 15.3677 13.0295 15.2577 13.0705L13.4807 13.8905V12.5915L15.8047 11.5395C16.1187 11.4025 16.2697 11.1975 16.2697 10.8965C16.2697 10.5135 16.0097 10.2265 15.6137 10.2265C15.5037 10.2265 15.3947 10.2675 15.2717 10.3085L13.4807 11.1425V7.9435H16.7347C17.2407 7.9435 17.5957 7.6015 17.5957 7.1095C17.5957 6.6175 17.2407 6.2895 16.7347 6.2895H8.4357C7.9297 6.2895 7.5747 6.6175 7.5747 7.1095C7.5747 7.6015 7.9297 7.9435 8.4357 7.9435H11.6897V11.8805L9.3927 12.9065C9.0647 13.0705 8.9277 13.2615 8.9277 13.5485C8.9277 13.9315 9.1877 14.2185 9.5837 14.2185C9.6937 14.2185 9.8167 14.1775 9.9397 14.1365L11.6897 13.3165V14.6285L9.3927 15.6675C9.0647 15.8185 8.9277 16.0095 8.9277 16.3105C8.9277 16.6935 9.1877 16.9665 9.5837 16.9665C9.6937 16.9665 9.8167 16.9395 9.9397 16.8845L11.6897 16.0785V18.4025C11.6897 18.9625 12.0587 19.3185 12.5917 19.3185Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM12.8927 19.4C13.5627 19.4 14.0407 18.977 14.0407 18.211V15.449L16.1877 14.547C16.4747 14.424 16.6247 14.219 16.6247 13.932C16.6247 13.576 16.3657 13.316 16.0237 13.316C15.9137 13.316 15.8047 13.344 15.6957 13.385L14.0407 14.109V12.893L16.1877 11.99C16.4747 11.854 16.6247 11.648 16.6247 11.375C16.6247 11.02 16.3787 10.76 16.0097 10.76C15.9137 10.76 15.8187 10.787 15.7087 10.814L14.0407 11.539V8.846H16.9667C17.5817 8.846 18.0197 8.436 18.0197 7.834C18.0197 7.232 17.5817 6.822 16.9667 6.822H8.8047C8.2027 6.822 7.7657 7.232 7.7657 7.834C7.7657 8.436 8.2027 8.846 8.8047 8.846H11.7307V12.428L9.6247 13.33C9.3107 13.467 9.1737 13.658 9.1737 13.932C9.1737 14.287 9.4337 14.561 9.7887 14.561C9.8847 14.561 9.9937 14.52 10.1037 14.492L11.7307 13.781V14.998L9.6247 15.887C9.3107 16.023 9.1737 16.215 9.1737 16.502C9.1737 16.857 9.4337 17.117 9.7887 17.117C9.8847 17.117 9.9937 17.09 10.1037 17.049L11.7307 16.338V18.211C11.7307 18.977 12.2087 19.4 12.8927 19.4Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM12.1137 18.3344C12.3727 18.3344 12.5777 18.1424 12.5777 17.8414V14.3694L14.9707 13.3164C15.1897 13.2204 15.2577 13.0844 15.2577 12.9204C15.2577 12.6874 15.0937 12.5234 14.8617 12.5234C14.7387 12.5234 14.6427 12.5504 14.5607 12.5914L12.5777 13.4664V11.9084L14.9707 10.8694C15.1897 10.7594 15.2577 10.6234 15.2577 10.4594C15.2577 10.2264 15.1077 10.0624 14.8477 10.0624C14.7797 10.0624 14.7107 10.0894 14.6427 10.1034L12.5777 11.0054V7.2184H16.2287C16.5157 7.2184 16.6937 7.0134 16.6937 6.7674C16.6937 6.5074 16.5157 6.3164 16.2287 6.3164H7.9847C7.7107 6.3164 7.5197 6.5074 7.5197 6.7674C7.5197 7.0134 7.7107 7.2184 7.9847 7.2184H11.6347V11.4164L9.2427 12.4554C9.0097 12.5644 8.9417 12.7014 8.9417 12.8514C8.9417 13.0844 9.0917 13.2614 9.3657 13.2614C9.4477 13.2614 9.5297 13.2204 9.6247 13.1794L11.6347 12.3184V13.8774L9.2427 14.9164C9.0097 15.0114 8.9417 15.1484 8.9417 15.3124C8.9417 15.5454 9.0917 15.7094 9.3657 15.7094C9.4477 15.7094 9.5297 15.6814 9.6247 15.6404L11.6347 14.7654V17.8414C11.6347 18.1424 11.8537 18.3344 12.1137 18.3344Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM11.9767 18.033C12.1677 18.033 12.3187 17.897 12.3187 17.678V14.068L14.7247 13.029C14.9157 12.934 14.9707 12.824 14.9707 12.701C14.9707 12.51 14.8337 12.373 14.6427 12.373C14.5197 12.373 14.4377 12.414 14.3557 12.441L12.3187 13.33V11.703L14.7247 10.664C14.9157 10.568 14.9707 10.459 14.9707 10.336C14.9707 10.145 14.8477 10.008 14.6157 10.008C14.5747 10.008 14.5197 10.022 14.4517 10.049L12.3187 10.965V7H16.0777C16.2967 7 16.4337 6.836 16.4337 6.658C16.4337 6.467 16.2967 6.316 16.0777 6.316H7.8617C7.6427 6.316 7.5057 6.467 7.5057 6.658C7.5057 6.836 7.6427 7 7.8617 7H11.6207V11.279L9.1877 12.318C8.9957 12.414 8.9547 12.523 8.9547 12.647C8.9547 12.838 9.0647 12.975 9.2967 12.975C9.3787 12.975 9.4477 12.934 9.5427 12.906L11.6207 12.018V13.645L9.1877 14.684C8.9957 14.779 8.9547 14.889 8.9547 15.012C8.9547 15.203 9.0647 15.34 9.2967 15.34C9.3787 15.34 9.4477 15.299 9.5427 15.272L11.6207 14.383V17.678C11.6207 17.897 11.7847 18.033 11.9767 18.033Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}