import { IconProps } from "../../types"

export default function PesosignSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM8.4087 13.2343C8.4087 13.5623 8.5857 13.7673 8.9687 13.7673H9.5017V17.8693C9.5017 19.0723 10.2407 19.6193 11.2387 19.6193C12.2087 19.6193 12.9477 19.0723 12.9477 17.8693V16.8983H14.3967C16.5837 16.8983 18.0467 15.5993 18.5387 13.7673H19.1547C19.5367 13.7673 19.7147 13.5623 19.7147 13.2343C19.7147 12.9063 19.5367 12.7013 19.1547 12.7013H18.6897C18.7167 12.6463 18.7307 12.5373 18.7307 12.4142C18.7307 12.2913 18.7307 12.1953 18.7167 12.1133H19.1547C19.5367 12.1133 19.7147 11.9083 19.7147 11.5803C19.7147 11.2653 19.5367 11.0603 19.1547 11.0603H18.5527C18.1017 9.2973 16.6937 7.9703 14.6017 7.9703H11.3477C10.1587 7.9703 9.5017 8.6273 9.5017 9.8163V11.0603H8.9687C8.5857 11.0603 8.4087 11.2653 8.4087 11.5803C8.4087 11.9083 8.5857 12.1133 8.9687 12.1133H9.5017V12.7013H8.9687C8.5857 12.7013 8.4087 12.9063 8.4087 13.2343ZM12.9747 11.0603V10.5683H13.7947C14.2187 10.5683 14.6157 10.7183 14.8887 11.0603ZM12.9747 12.7013V12.1133H15.2437C15.2577 12.2223 15.2577 12.2773 15.2577 12.4003C15.2577 12.5233 15.2577 12.6463 15.2437 12.7013ZM12.9747 14.3423V13.7673H14.9157C14.6567 14.1773 14.2327 14.3553 13.7817 14.3553Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM7.9847 12.5097C7.9847 12.8647 8.2307 13.1117 8.5997 13.1117H9.2837V18.2107C9.2837 19.0727 9.8577 19.5237 10.6097 19.5237C11.3617 19.5237 11.9087 19.0727 11.9087 18.2107V15.9687H13.8227C15.8457 15.9687 17.3087 14.8207 17.8557 13.1117H18.6207C19.0037 13.1117 19.2367 12.8647 19.2367 12.5097C19.2367 12.1547 19.0037 11.9077 18.6207 11.9077H18.0747C18.1017 11.8127 18.1157 11.6897 18.1157 11.5527C18.1157 11.4157 18.1017 11.3067 18.0877 11.1837H18.6207C19.0037 11.1837 19.2367 10.9237 19.2367 10.5817C19.2367 10.2127 19.0037 9.9807 18.6207 9.9807H17.8557C17.3227 8.3257 15.9007 7.1637 13.9317 7.1637H10.6507C9.7887 7.1637 9.2837 7.6697 9.2837 8.5447V9.9807H8.5997C8.2307 9.9807 7.9847 10.2127 7.9847 10.5817C7.9847 10.9237 8.2307 11.1837 8.5997 11.1837H9.2837V11.9077H8.5997C8.2307 11.9077 7.9847 12.1547 7.9847 12.5097ZM11.9217 9.9807V9.2697H13.3847C14.0957 9.2697 14.6567 9.5157 15.0257 9.9807ZM11.9217 11.9077V11.1837H15.4767C15.4907 11.3067 15.4907 11.4027 15.4907 11.5387C15.4907 11.6757 15.4907 11.8127 15.4767 11.9077ZM11.9217 13.8767V13.1117H15.0527C14.6837 13.6167 14.0957 13.8907 13.3707 13.8907Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM8.2027 12.9065C8.2027 13.2345 8.4217 13.4665 8.7907 13.4665H9.3927V18.0335C9.3927 19.0855 10.0627 19.5915 10.9377 19.5915C11.8127 19.5915 12.4547 19.0855 12.4547 18.0335V16.4605H14.1227C16.2427 16.4605 17.7047 15.2305 18.2107 13.4665H18.9087C19.2777 13.4665 19.4957 13.2345 19.4957 12.9065C19.4957 12.5505 19.2777 12.3325 18.9087 12.3325H18.4027C18.4157 12.2635 18.4297 12.1405 18.4297 12.0175C18.4297 11.8945 18.4297 11.7855 18.4157 11.6755H18.9087C19.2777 11.6755 19.4957 11.4575 19.4957 11.1155C19.4957 10.7735 19.2777 10.5545 18.9087 10.5545H18.2247C17.7327 8.8455 16.3247 7.6015 14.2867 7.6015H11.0197C9.9807 7.6015 9.3927 8.1895 9.3927 9.2285V10.5545H8.7907C8.4217 10.5545 8.2027 10.7735 8.2027 11.1155C8.2027 11.4575 8.4217 11.6755 8.7907 11.6755H9.3927V12.3325H8.7907C8.4217 12.3325 8.2027 12.5505 8.2027 12.9065ZM12.4687 10.5545V9.9535H13.6037C14.1507 9.9535 14.6287 10.1585 14.9567 10.5545ZM12.4687 12.3325V11.6755H15.3537C15.3677 11.7985 15.3677 11.8675 15.3677 12.0035C15.3677 12.1265 15.3677 12.2635 15.3537 12.3325ZM12.4687 14.1235V13.4665H14.9847C14.6697 13.9175 14.1637 14.1365 13.5897 14.1365Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM7.6427 11.4845C7.6427 11.8125 7.8887 12.0585 8.2027 12.0585H9.0097V18.2655C9.0097 18.6895 9.3107 18.9765 9.7207 18.9765C10.1447 18.9765 10.4177 18.6895 10.4177 18.2655V14.4785H12.8517C14.6837 14.4785 16.0647 13.5485 16.6247 12.0585H17.5687C17.8967 12.0585 18.1287 11.8125 18.1287 11.4845C18.1287 11.1565 17.8967 10.9235 17.5687 10.9235H16.8847C16.9117 10.7595 16.9117 10.5955 16.9117 10.4175C16.9117 10.2535 16.9117 10.1035 16.8847 9.9255H17.5687C17.8967 9.9255 18.1287 9.6795 18.1287 9.3515C18.1287 9.0235 17.8967 8.7915 17.5687 8.7915H16.6247C16.0647 7.3145 14.6837 6.3845 12.8517 6.3845H9.7067C9.2837 6.3845 9.0097 6.6715 9.0097 7.1095V8.7915H8.2027C7.8887 8.7915 7.6427 9.0235 7.6427 9.3515C7.6427 9.6795 7.8887 9.9255 8.2027 9.9255H9.0097V10.9235H8.2027C7.8887 10.9235 7.6427 11.1565 7.6427 11.4845ZM10.4317 8.7915V7.6835H12.6597C13.7677 7.6835 14.5877 8.0935 15.0387 8.7915ZM10.4317 10.9235V9.9255H15.4767C15.5037 10.0765 15.5177 10.2405 15.5177 10.4175C15.5177 10.5955 15.5037 10.7595 15.4767 10.9235ZM10.4317 13.1665V12.0585H15.0387C14.5877 12.7695 13.7677 13.1665 12.6597 13.1665Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM7.7247 12.0453C7.7247 12.4143 7.9977 12.6873 8.3677 12.6873H9.1467V18.4023C9.1467 19.0583 9.6117 19.4553 10.2127 19.4553C10.8147 19.4553 11.2387 19.0583 11.2387 18.4023V15.3673H13.4667C15.3807 15.3673 16.8297 14.3143 17.4177 12.6873H18.2797C18.6617 12.6873 18.9217 12.4143 18.9217 12.0453C18.9217 11.6623 18.6617 11.3883 18.2797 11.3883H17.6917C17.7047 11.2653 17.7187 11.1293 17.7187 10.9923C17.7187 10.8553 17.7047 10.7323 17.6917 10.5823H18.2797C18.6617 10.5823 18.9217 10.2953 18.9217 9.9253C18.9217 9.5433 18.6617 9.2833 18.2797 9.2833H17.4047C16.8297 7.6973 15.3947 6.6443 13.5077 6.6443H10.1997C9.5567 6.6443 9.1467 7.0543 9.1467 7.7243V9.2833H8.3677C7.9977 9.2833 7.7247 9.5433 7.7247 9.9253C7.7247 10.2953 7.9977 10.5823 8.3677 10.5823H9.1467V11.3883H8.3677C7.9977 11.3883 7.7247 11.6623 7.7247 12.0453ZM11.2517 9.2833V8.4353H13.1247C14.0137 8.4353 14.6837 8.7363 15.1077 9.2833ZM11.2517 11.3883V10.5823H15.6137C15.6407 10.7053 15.6407 10.8423 15.6407 10.9923C15.6407 11.1293 15.6407 11.2653 15.6137 11.3883ZM11.2517 13.5763V12.6873H15.1207C14.7107 13.2613 14.0137 13.5763 13.1117 13.5763Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM7.5747 11.7855C7.5747 12.1545 7.8617 12.4555 8.2437 12.4555H9.0777V18.5255C9.0777 19.0445 9.4747 19.4145 9.9807 19.4145C10.4997 19.4145 10.8687 19.0445 10.8687 18.5255V15.0255H13.2617C15.1207 15.0255 16.5567 14.0275 17.1717 12.4555H18.0877C18.4847 12.4555 18.7577 12.1545 18.7577 11.7855C18.7577 11.3745 18.4847 11.1015 18.0877 11.1015H17.4727C17.4867 10.9645 17.4867 10.8145 17.4867 10.6775C17.4867 10.5275 17.4867 10.4045 17.4727 10.2405H18.0877C18.4847 10.2405 18.7577 9.9395 18.7577 9.5565C18.7577 9.1605 18.4847 8.8865 18.0877 8.8865H17.1587C16.5567 7.3415 15.1207 6.3435 13.2617 6.3435H9.9527C9.4197 6.3435 9.0777 6.6995 9.0777 7.2595V8.8865H8.2437C7.8617 8.8865 7.5747 9.1605 7.5747 9.5565C7.5747 9.9395 7.8617 10.2405 8.2437 10.2405H9.0777V11.1015H8.2437C7.8617 11.1015 7.5747 11.3745 7.5747 11.7855ZM10.8827 8.8865V7.9705H12.9747C13.9587 7.9705 14.7107 8.2985 15.1617 8.8865ZM10.8827 11.1015V10.2405H15.7087C15.7227 10.3765 15.7227 10.5135 15.7227 10.6775C15.7227 10.8145 15.7227 10.9645 15.7087 11.1015ZM10.8827 13.3985V12.4555H15.1757C14.7107 13.0565 13.9587 13.3985 12.9747 13.3985Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM7.8337 12.25C7.8337 12.605 8.0937 12.879 8.4767 12.879H9.2147V18.32C9.2147 19.059 9.7207 19.496 10.3767 19.496C11.0467 19.496 11.5257 19.059 11.5257 18.32V15.627H13.6177C15.5857 15.627 17.0347 14.533 17.6097 12.879H18.4297C18.8127 12.879 19.0587 12.605 19.0587 12.25C19.0587 11.867 18.8127 11.621 18.4297 11.621H17.8557C17.8827 11.498 17.8827 11.375 17.8827 11.238C17.8827 11.102 17.8827 10.979 17.8687 10.842H18.4297C18.8127 10.842 19.0587 10.568 19.0587 10.213C19.0587 9.83 18.8127 9.584 18.4297 9.584H17.5957C17.0487 7.957 15.6137 6.863 13.6857 6.863H10.3907C9.6527 6.863 9.2147 7.314 9.2147 8.08V9.584H8.4767C8.0937 9.584 7.8337 9.83 7.8337 10.213C7.8337 10.568 8.0937 10.842 8.4767 10.842H9.2147V11.621H8.4767C8.0937 11.621 7.8337 11.867 7.8337 12.25ZM11.5387 9.584V8.791H13.2347C14.0407 8.791 14.6697 9.078 15.0797 9.584ZM11.5387 11.621V10.842H15.5587C15.5727 10.965 15.5857 11.088 15.5857 11.225C15.5857 11.361 15.5727 11.498 15.5587 11.621ZM11.5387 13.699V12.879H15.0937C14.6977 13.412 14.0547 13.713 13.2347 13.713Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM7.7247 11.0884C7.7247 11.3344 7.9027 11.5114 8.1487 11.5114H8.9137V17.8964C8.9137 18.1974 9.1057 18.3754 9.3787 18.3754C9.6527 18.3754 9.8437 18.1974 9.8437 17.8964V13.7264H12.3047C14.1227 13.7264 15.4087 12.8924 15.9137 11.5114H16.8707C17.1177 11.5114 17.2947 11.3344 17.2947 11.0884C17.2947 10.8414 17.1177 10.6774 16.8707 10.6774H16.1057C16.1467 10.4724 16.1597 10.2814 16.1597 10.0764C16.1597 9.8844 16.1467 9.6934 16.1187 9.4884H16.8707C17.1177 9.4884 17.2947 9.3104 17.2947 9.0644C17.2947 8.8184 17.1177 8.6544 16.8707 8.6544H15.9137C15.4217 7.2594 14.1227 6.4254 12.3047 6.4254H9.3787C9.0917 6.4254 8.9137 6.6034 8.9137 6.9044V8.6544H8.1487C7.9027 8.6544 7.7247 8.8184 7.7247 9.0644C7.7247 9.3104 7.9027 9.4884 8.1487 9.4884H8.9137V10.6774H8.1487C7.9027 10.6774 7.7247 10.8414 7.7247 11.0884ZM9.8437 8.6544V7.3004H12.2367C13.5077 7.3004 14.4377 7.7934 14.8887 8.6544ZM9.8437 10.6774V9.4884H15.1897C15.2167 9.6664 15.2307 9.8574 15.2307 10.0764C15.2307 10.2814 15.2167 10.4724 15.1897 10.6774ZM9.8437 12.8514V11.5114H14.8747C14.4237 12.3734 13.5077 12.8514 12.2367 12.8514Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM7.7797 10.883C7.7797 11.088 7.9157 11.225 8.1207 11.225H8.8597V17.705C8.8597 17.951 8.9957 18.061 9.2017 18.061C9.4067 18.061 9.5427 17.951 9.5427 17.705V13.344H12.0177C13.8357 13.344 15.0667 12.551 15.5447 11.225H16.5157C16.7207 11.225 16.8577 11.088 16.8577 10.883C16.8577 10.678 16.7207 10.541 16.5157 10.541H15.7087C15.7497 10.336 15.7637 10.117 15.7637 9.898C15.7637 9.68 15.7497 9.475 15.7367 9.256H16.5157C16.7207 9.256 16.8577 9.119 16.8577 8.914C16.8577 8.709 16.7207 8.572 16.5157 8.572H15.5587C15.0937 7.232 13.8357 6.439 12.0177 6.439H9.2017C8.9957 6.439 8.8597 6.576 8.8597 6.795V8.572H8.1207C7.9157 8.572 7.7797 8.709 7.7797 8.914C7.7797 9.119 7.9157 9.256 8.1207 9.256H8.8597V10.541H8.1207C7.9157 10.541 7.7797 10.678 7.7797 10.883ZM9.5427 8.572V7.096H12.0317C13.3707 7.096 14.3557 7.643 14.8067 8.572ZM9.5427 10.541V9.256H15.0387C15.0667 9.461 15.0937 9.666 15.0937 9.898C15.0937 10.117 15.0667 10.336 15.0387 10.541ZM9.5427 12.688V11.225H14.7927C14.3417 12.154 13.3707 12.688 12.0317 12.688Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}