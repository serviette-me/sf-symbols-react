import { IconProps } from "../../types"

export default function NumberSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM10.2677 19.8923C11.2387 19.8923 11.7987 19.4413 12.0037 18.4573L12.2777 17.0213H13.3707L13.1527 18.2242C12.9887 19.1953 13.5487 19.8923 14.5467 19.8923C15.5317 19.8923 16.1187 19.4003 16.3107 18.4162L16.5977 17.0213H17.0767C18.0607 17.0213 18.7307 16.3513 18.7307 15.3943C18.7307 14.5743 18.1977 14.0413 17.4177 14.0413H17.2127L17.4177 12.8923H17.8417C18.8397 12.8923 19.5237 12.2223 19.5237 11.2653C19.5237 10.4453 18.9907 9.8983 18.2107 9.8983H17.9647L18.1427 8.9003C18.3337 7.9843 17.6637 7.2183 16.7207 7.2183C15.7777 7.2183 15.1757 7.6703 15.0117 8.6403L14.7797 9.8983H13.6307L13.8357 8.9003C14.0137 7.9843 13.3707 7.2183 12.4007 7.2183C11.4567 7.2183 10.8827 7.6703 10.7047 8.6403L10.4727 9.8983H10.0217C9.0367 9.8983 8.3677 10.5543 8.3677 11.5253C8.3677 12.3323 8.8867 12.8923 9.6527 12.8923H9.9397L9.6937 14.0413H9.2697C8.2717 14.0413 7.5877 14.7113 7.5877 15.6683C7.5877 16.4742 8.1207 17.0213 8.9007 17.0213H9.1187L8.8867 18.2113C8.6817 19.1813 9.2697 19.8923 10.2677 19.8923ZM12.4957 14.5193L12.8657 12.5923H14.5877L14.2457 14.5193Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM9.6657 19.5777C10.4317 19.5777 10.8687 19.2087 11.0197 18.4567L11.4707 16.2827H13.2887L12.9067 18.2247C12.7557 18.9897 13.2347 19.5777 14.0137 19.5777C14.7797 19.5777 15.2577 19.1957 15.3947 18.4437L15.8597 16.2697H16.8027C17.5547 16.2697 18.0877 15.7367 18.0877 14.9977C18.0877 14.3557 17.6637 13.9177 17.0487 13.9177H16.3377L16.7347 11.9627H17.6777C18.4297 11.9627 18.9627 11.4157 18.9627 10.6917C18.9627 10.0347 18.5387 9.5977 17.9237 9.5977H17.1857L17.5407 7.8207C17.6917 7.0817 17.1587 6.4527 16.4067 6.4527C15.6677 6.4527 15.1897 6.8227 15.0527 7.5737L14.6567 9.5977H12.7967L13.1657 7.8207C13.3167 7.0817 12.7967 6.4527 12.0317 6.4527C11.2797 6.4527 10.8277 6.8227 10.6917 7.5737L10.2817 9.5977H9.3377C8.5727 9.5977 8.0527 10.1307 8.0527 10.8687C8.0527 11.5117 8.4767 11.9627 9.0777 11.9627H9.8297L9.4197 13.9177H8.4627C7.7107 13.9177 7.1777 14.4507 7.1777 15.1897C7.1777 15.8317 7.6017 16.2697 8.2167 16.2697H8.9417L8.5447 18.2107C8.3947 18.9767 8.8867 19.5777 9.6657 19.5777ZM11.7027 14.2457L12.2087 11.7437H14.4377L13.9457 14.2457Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM9.9807 19.7555C10.8557 19.7555 11.3617 19.3325 11.5387 18.4705L11.8947 16.6795H13.3297L13.0297 18.2385C12.8787 19.0995 13.3987 19.7555 14.2867 19.7555C15.1757 19.7555 15.7087 19.3185 15.8727 18.4295L16.2427 16.6795H16.9527C17.8147 16.6795 18.4297 16.0645 18.4297 15.2165C18.4297 14.4785 17.9517 13.9865 17.2407 13.9865H16.8027L17.0897 12.4555H17.7597C18.6487 12.4555 19.2637 11.8535 19.2637 11.0055C19.2637 10.2535 18.7717 9.7615 18.0747 9.7615H17.5957L17.8687 8.3945C18.0337 7.5605 17.4317 6.8635 16.5707 6.8635C15.7227 6.8635 15.1897 7.2735 15.0257 8.1485L14.7247 9.7615H13.2347L13.5217 8.3945C13.6857 7.5605 13.0977 6.8635 12.2227 6.8635C11.3747 6.8635 10.8557 7.2735 10.6917 8.1485L10.3767 9.7615H9.6937C8.8187 9.7615 8.2167 10.3635 8.2167 11.2245C8.2167 11.9495 8.6957 12.4555 9.3787 12.4555H9.8847L9.5707 13.9865H8.8867C8.0117 13.9865 7.3967 14.5875 7.3967 15.4495C7.3967 16.1735 7.8747 16.6795 8.5857 16.6795H9.0367L8.7227 18.2245C8.5447 19.0855 9.0917 19.7555 9.9807 19.7555ZM12.1137 14.3965L12.5507 12.1955H14.5197L14.1097 14.3965Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM8.9957 18.7985C9.4337 18.7985 9.6797 18.5935 9.7757 18.1695L10.4317 15.0935H13.1657L12.5507 17.9785C12.4547 18.4295 12.7697 18.7985 13.2347 18.7985C13.6717 18.7985 13.9457 18.5935 14.0407 18.1695L14.6837 15.0805H16.2147C16.6387 15.0805 16.9397 14.7795 16.9397 14.3555C16.9397 13.9865 16.6797 13.7125 16.3107 13.7125H14.9707L15.5997 10.7325H17.1857C17.6097 10.7325 17.9097 10.4315 17.9097 10.0075C17.9097 9.6385 17.6507 9.3655 17.2817 9.3655H15.8867L16.4607 6.6175C16.5567 6.1665 16.2287 5.7965 15.7777 5.7965C15.3397 5.7965 15.0797 6.0015 14.9847 6.4255L14.3687 9.3655H11.6347L12.2087 6.6175C12.3047 6.1795 11.9907 5.7965 11.5257 5.7965C11.0877 5.7965 10.8277 6.0015 10.7327 6.4255L10.1177 9.3655H8.5447C8.1207 9.3655 7.8207 9.6795 7.8207 10.1035C7.8207 10.4725 8.0667 10.7325 8.4497 10.7325H9.8297L9.2147 13.7125H7.5747C7.1507 13.7125 6.8497 14.0275 6.8497 14.4515C6.8497 14.8205 7.1097 15.0805 7.4787 15.0805H8.9137L8.3127 17.9785C8.2167 18.4295 8.5447 18.7985 8.9957 18.7985ZM10.6507 13.8225L11.2927 10.6505H14.1777L13.5077 13.8225Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM9.2837 19.3593C9.8987 19.3593 10.2677 19.0583 10.3907 18.4573L10.9517 15.7913H13.2347L12.7427 18.2113C12.6057 18.8403 13.0297 19.3593 13.6717 19.3593C14.3007 19.3593 14.6977 19.0453 14.8207 18.4433L15.3807 15.7913H16.6247C17.2407 15.7913 17.6777 15.3403 17.6777 14.7383C17.6777 14.2053 17.3087 13.8363 16.8027 13.8363H15.7907L16.3107 11.3473H17.5687C18.1837 11.3473 18.6207 10.8963 18.6207 10.3083C18.6207 9.7753 18.2517 9.3923 17.7327 9.3923H16.6937L17.1587 7.1233C17.2817 6.4943 16.8297 5.9743 16.2017 5.9743C15.5997 5.9743 15.2027 6.2753 15.0937 6.8633L14.5607 9.3923H12.2637L12.7427 7.1233C12.8787 6.5083 12.4277 5.9743 11.7847 5.9743C11.1697 5.9743 10.7867 6.2753 10.6777 6.8633L10.1587 9.3923H8.8867C8.2847 9.3923 7.8477 9.8433 7.8477 10.4453C7.8477 10.9653 8.2027 11.3473 8.7227 11.3473H9.7477L9.2427 13.8363H7.9567C7.3417 13.8363 6.9047 14.2733 6.9047 14.8753C6.9047 15.4083 7.2737 15.7913 7.7797 15.7913H8.8317L8.3397 18.2113C8.2027 18.8403 8.6547 19.3593 9.2837 19.3593ZM11.1977 14.0543L11.7847 11.1833H14.3557L13.7537 14.0543Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM9.0777 19.2365C9.6117 19.2365 9.9397 18.9625 10.0487 18.4565L10.6637 15.5175H13.2067L12.6467 18.1975C12.5237 18.7575 12.9197 19.2365 13.4807 19.2365C14.0277 19.2365 14.3827 18.9625 14.4927 18.4565L15.1077 15.5035H16.5297C17.0627 15.5035 17.4457 15.1075 17.4457 14.5875C17.4457 14.1225 17.1177 13.7815 16.6657 13.7815H15.4767L16.0647 11.0055H17.4997C18.0337 11.0055 18.4157 10.6095 18.4157 10.0895C18.4157 9.6245 18.0877 9.2835 17.6367 9.2835H16.4197L16.9527 6.7265C17.0627 6.1655 16.6527 5.6875 16.0917 5.6875C15.5587 5.6875 15.2167 5.9605 15.1077 6.4805L14.5197 9.2835H11.9767L12.4957 6.7265C12.6187 6.1795 12.2227 5.6875 11.6617 5.6875C11.1157 5.6875 10.7737 5.9605 10.6637 6.4805L10.0897 9.2835H8.6407C8.1207 9.2835 7.7247 9.6795 7.7247 10.1995C7.7247 10.6645 8.0527 11.0055 8.5177 11.0055H9.7067L9.1327 13.7815H7.6697C7.1367 13.7815 6.7537 14.1775 6.7537 14.6975C6.7537 15.1625 7.0817 15.5035 7.5337 15.5035H8.7777L8.2167 18.1975C8.1077 18.7575 8.5177 19.2365 9.0777 19.2365ZM10.9097 13.9455L11.5387 10.8695H14.3007L13.6587 13.9455Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM9.4477 19.455C10.1307 19.455 10.5277 19.127 10.6637 18.457L11.1697 16.01H13.2617L12.8107 18.211C12.6737 18.908 13.1247 19.455 13.8227 19.455C14.5057 19.455 14.9437 19.113 15.0667 18.443L15.5857 15.996H16.7067C17.3767 15.996 17.8557 15.504 17.8557 14.848C17.8557 14.273 17.4587 13.863 16.8987 13.863H16.0237L16.4887 11.621H17.6097C18.2927 11.621 18.7717 11.129 18.7717 10.473C18.7717 9.885 18.3747 9.488 17.8147 9.488H16.9117L17.3357 7.424C17.4587 6.754 16.9807 6.18 16.2967 6.18C15.6267 6.18 15.2027 6.508 15.0797 7.178L14.6017 9.488H12.4957L12.9337 7.424C13.0707 6.754 12.5917 6.18 11.8947 6.18C11.2247 6.18 10.8007 6.508 10.6777 7.178L10.1997 9.488H9.0777C8.4087 9.488 7.9297 9.967 7.9297 10.623C7.9297 11.197 8.3267 11.621 8.8727 11.621H9.7887L9.3107 13.863H8.1757C7.5057 13.863 7.0277 14.355 7.0277 15.012C7.0277 15.586 7.4097 15.996 7.9707 15.996H8.8867L8.4217 18.211C8.2847 18.895 8.7497 19.455 9.4477 19.455ZM11.4157 14.137L11.9627 11.43H14.3827L13.8357 14.137Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM8.9137 18.2114C9.1877 18.2114 9.3517 18.0744 9.4197 17.7874L10.1177 14.5054H13.0977L12.4277 17.6644C12.3597 17.9784 12.5917 18.2114 12.8927 18.2114C13.1937 18.2114 13.3707 18.0744 13.4257 17.7874L14.1097 14.5054H15.8047C16.0917 14.5054 16.2837 14.3144 16.2837 14.0414C16.2837 13.7954 16.1187 13.6174 15.8597 13.6174H14.3147L14.9977 10.3634H16.7617C17.0487 10.3634 17.2407 10.1724 17.2407 9.8984C17.2407 9.6524 17.0767 9.4744 16.8167 9.4744H15.1897L15.8187 6.4664C15.8867 6.1524 15.6547 5.9064 15.3537 5.9064C15.0667 5.9064 14.9027 6.0564 14.8337 6.3434L14.1637 9.4744H11.1697L11.8267 6.4664C11.8947 6.1524 11.6757 5.9064 11.3617 5.9064C11.0607 5.9064 10.8967 6.0564 10.8277 6.3434L10.1717 9.4744H8.4087C8.1207 9.4744 7.9297 9.6664 7.9297 9.9534C7.9297 10.1994 8.0937 10.3634 8.3537 10.3634H9.9807L9.3107 13.6174H7.4517C7.1507 13.6174 6.9587 13.8224 6.9587 14.0954C6.9587 14.3414 7.1227 14.5054 7.3827 14.5054H9.0917L8.4357 17.6644C8.3807 17.9784 8.5997 18.2114 8.9137 18.2114ZM10.2947 13.6584L10.9787 10.3364H13.9997L13.3167 13.6584Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM8.8597 17.91C9.0647 17.91 9.1877 17.814 9.2427 17.582L9.9527 14.205H13.0707L12.3727 17.5C12.3187 17.746 12.4957 17.91 12.7287 17.91C12.9477 17.91 13.0707 17.814 13.1117 17.582L13.8227 14.205H15.5857C15.8047 14.205 15.9417 14.082 15.9417 13.877C15.9417 13.686 15.8187 13.563 15.6137 13.563H13.9727L14.6837 10.172H16.5427C16.7617 10.172 16.8987 10.035 16.8987 9.83C16.8987 9.652 16.7887 9.529 16.5837 9.529H14.8207L15.4907 6.371C15.5447 6.139 15.3677 5.975 15.1347 5.975C14.9297 5.975 14.8067 6.07 14.7657 6.289L14.0547 9.529H10.9377L11.6207 6.371C11.6757 6.139 11.5117 5.975 11.2657 5.975C11.0467 5.975 10.9237 6.07 10.8827 6.289L10.1997 9.529H8.3397C8.1207 9.529 7.9847 9.666 7.9847 9.871C7.9847 10.049 8.1077 10.172 8.2987 10.172H10.0627L9.3657 13.563H7.3827C7.1637 13.563 7.0277 13.699 7.0277 13.904C7.0277 14.096 7.1367 14.205 7.3417 14.205H9.1877L8.5037 17.5C8.4497 17.746 8.6267 17.91 8.8597 17.91ZM10.1037 13.563L10.8147 10.172H13.9177L13.2207 13.563Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}