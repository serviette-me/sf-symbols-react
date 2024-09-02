import { IconProps } from "../../types"

export default function FourTwoSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM15.4087 18.6213H19.5507C20.2617 18.6213 20.5347 18.1293 20.5347 17.6093C20.5347 17.0903 20.2617 16.5973 19.5507 16.5973H17.2537V16.4883L18.6347 14.8473C19.6327 13.6583 20.3707 12.6873 20.3707 11.2243C20.3707 9.2693 19.0317 8.1893 17.1857 8.1893C15.5447 8.1893 14.1917 9.3653 14.1917 10.8013C14.1917 11.4573 14.5607 11.9492 15.2577 11.9492C15.7777 11.9492 16.2017 11.6893 16.3927 11.0473C16.5297 10.5823 16.7207 10.1723 17.1857 10.1723C17.7457 10.1723 17.9097 10.7053 17.9097 11.2933C17.9097 12.2223 17.2947 13.1113 16.5017 14.1093L14.8747 16.1602C14.3557 16.8163 14.2047 17.1722 14.2047 17.5953C14.2047 18.2523 14.6287 18.6213 15.4087 18.6213ZM11.0467 18.8123C11.7437 18.8123 12.2907 18.4433 12.2907 17.5412V16.9123H12.3867C13.1527 16.9123 13.3707 16.4203 13.3707 15.8863C13.3707 15.2443 13.0707 14.8753 12.4007 14.8753H12.2907V10.1853C12.2907 8.9823 11.4977 8.3123 10.2947 8.3123C8.6137 8.3123 8.1347 9.5703 7.6837 10.8692L6.6037 13.8773C6.4117 14.4243 6.2887 14.9843 6.2887 15.4903C6.2887 16.4333 6.7947 16.9123 7.7927 16.9123H9.8027V17.5412C9.8027 18.4162 10.3637 18.8123 11.0467 18.8123ZM9.8847 14.9573H8.4087V14.8473L9.8437 10.3082H9.8847Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM14.8067 18.3617H19.2497C19.8517 18.3617 20.1247 17.9507 20.1247 17.4587C20.1247 16.9397 19.8377 16.5427 19.2497 16.5427H16.4747V16.4337L18.1697 14.3557C19.3457 12.9197 19.9477 11.9217 19.9477 10.5957C19.9477 8.6817 18.6487 7.4787 16.7757 7.4787C15.0937 7.4787 13.7407 8.7907 13.7407 10.2267C13.7407 10.8007 14.0817 11.2247 14.6837 11.2247C15.1757 11.2247 15.5317 10.9917 15.6957 10.4457C15.8867 9.7617 16.1467 9.2557 16.7757 9.2557C17.4727 9.2557 17.7737 9.8987 17.7737 10.6637C17.7737 11.6757 17.0897 12.6877 16.3377 13.6447L14.3277 16.1877C13.9457 16.6797 13.7407 17.0217 13.7407 17.4587C13.7407 18.0057 14.1097 18.3617 14.8067 18.3617ZM10.3907 18.5527C10.9927 18.5527 11.4847 18.2107 11.4847 17.4317V16.4337H11.7717C12.4277 16.4337 12.6597 16.0097 12.6597 15.5177C12.6597 14.9707 12.3867 14.6147 11.7847 14.6147H11.4847V9.2697C11.4847 8.1897 10.7737 7.6017 9.7207 7.6017C8.4087 7.6017 7.9437 8.4767 7.5197 9.5427L5.7697 13.6987C5.5507 14.2457 5.4547 14.6977 5.4547 15.1617C5.4547 15.9547 5.9337 16.4337 6.7677 16.4337H9.2967V17.4317C9.2967 18.2247 9.8437 18.5527 10.3907 18.5527ZM9.3657 14.6697H7.3557V14.5737L9.3107 9.4607H9.3657Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM15.1207 18.4985H19.4137C20.0707 18.4985 20.3437 18.0465 20.3437 17.5415C20.3437 17.0215 20.0707 16.5835 19.4137 16.5835H16.8847V16.4745L18.4157 14.6285C19.4957 13.3165 20.1657 12.3325 20.1657 10.9235C20.1657 8.9965 18.8537 7.8615 16.9937 7.8615C15.3267 7.8615 13.9727 9.0915 13.9727 10.5415C13.9727 11.1565 14.3417 11.6075 14.9847 11.6075C15.4907 11.6075 15.8867 11.3615 16.0647 10.7735C16.2287 10.1995 16.4477 9.7485 16.9937 9.7485C17.6097 9.7485 17.8417 10.3225 17.8417 11.0055C17.8417 11.9765 17.1997 12.9195 16.4197 13.9045L14.6157 16.1875C14.1637 16.7615 13.9867 17.1035 13.9867 17.5415C13.9867 18.1425 14.3827 18.4985 15.1207 18.4985ZM10.7457 18.6895C11.3887 18.6895 11.9087 18.3335 11.9087 17.4995V16.6935H12.0997C12.8107 16.6935 13.0297 16.2285 13.0297 15.7225C13.0297 15.1215 12.7427 14.7515 12.1137 14.7515H11.9087V9.7615C11.9087 8.6135 11.1567 7.9845 10.0217 7.9845C8.5177 7.9845 8.0387 9.0645 7.6157 10.2535L6.2067 13.8085C6.0017 14.3415 5.8927 14.8615 5.8927 15.3395C5.8927 16.2145 6.3847 16.6935 7.3007 16.6935H9.5707V17.4995C9.5707 18.3335 10.1177 18.6895 10.7457 18.6895ZM9.6387 14.8335H7.9027V14.7245L9.5837 9.9125H9.6387Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM13.7817 17.8825H18.5117C18.8947 17.8825 19.1407 17.6235 19.1407 17.2405C19.1407 16.8305 18.8947 16.5845 18.5117 16.5845H15.0117V16.4885L17.2407 13.5215C18.4977 11.8945 18.9217 10.8965 18.9217 9.7205C18.9217 7.9165 17.8007 6.5765 15.9687 6.5765C14.2737 6.5765 13.0567 8.0255 13.0567 9.4605C13.0567 9.8435 13.2887 10.1585 13.7267 10.1585C14.0817 10.1585 14.3147 9.9805 14.4097 9.6255C14.6427 8.5725 15.0527 7.8615 15.9687 7.8615C16.9527 7.8615 17.4317 8.7775 17.4317 9.7895C17.4317 10.8555 16.8167 11.8805 16.0367 12.9195L13.4257 16.3785C13.2207 16.6525 13.0427 16.9125 13.0427 17.2405C13.0427 17.6235 13.3027 17.8825 13.7817 17.8825ZM9.6117 18.0465C10.0077 18.0465 10.3497 17.7595 10.3497 17.2535V15.5585H10.9927C11.4157 15.5585 11.6207 15.2855 11.6207 14.9025C11.6207 14.5335 11.4157 14.2595 10.9927 14.2595H10.3497V7.8475C10.3497 7.0545 9.8297 6.6585 9.1467 6.6585C8.3677 6.6585 8.0117 7.0685 7.6977 7.7515L4.9087 13.5765C4.7167 14.0005 4.6487 14.2875 4.6487 14.6285C4.6487 15.1755 5.0177 15.5585 5.5917 15.5585H8.8457V17.2535C8.8457 17.8145 9.2427 18.0465 9.6117 18.0465ZM8.8727 14.2875H6.0157V14.2185L8.8187 8.1345H8.8727Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM14.4237 18.1973H19.0587C19.5777 18.1973 19.8657 17.8423 19.8657 17.3493C19.8657 16.8433 19.5647 16.5153 19.0587 16.5153H15.9827V16.4063L17.8687 14.0413C19.1677 12.4273 19.6737 11.4293 19.6737 10.1723C19.6737 8.3123 18.4027 7.0133 16.5157 7.0133C14.7927 7.0133 13.4667 8.4223 13.4667 9.8433C13.4667 10.3773 13.7677 10.7593 14.3277 10.7593C14.7927 10.7593 15.0937 10.5413 15.2437 10.0623C15.4767 9.2283 15.7907 8.6683 16.5157 8.6683C17.2947 8.6683 17.6917 9.3653 17.6917 10.2673C17.6917 11.3203 16.9667 12.4003 16.2287 13.3303L13.9867 16.2013C13.6857 16.5843 13.4527 16.9253 13.4527 17.3493C13.4527 17.8423 13.7677 18.1973 14.4237 18.1973ZM9.9807 18.3753C10.5137 18.3753 10.9647 18.0473 10.9647 17.3363V16.1053H11.3747C11.9497 16.1053 12.1957 15.7363 12.1957 15.2713C12.1957 14.7933 11.9497 14.4373 11.3887 14.4373H10.9647V8.6683C10.9647 7.6833 10.3087 7.1363 9.3657 7.1363C8.2717 7.1363 7.8207 7.7653 7.4237 8.6953L5.2227 13.5763C5.0037 14.1093 4.9087 14.5063 4.9087 14.9433C4.9087 15.6543 5.3727 16.1053 6.0977 16.1053H8.9687V17.3363C8.9687 18.0883 9.5017 18.3753 9.9807 18.3753ZM9.0237 14.4923H6.6717V14.3963L8.9687 8.9003H9.0237Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM14.2047 18.0875H18.9497C19.4277 18.0875 19.7287 17.7735 19.7287 17.2945C19.7287 16.7755 19.4137 16.4885 18.9497 16.4885H15.7087V16.3785L17.7047 13.8495C19.0727 12.1545 19.5237 11.1425 19.5237 9.9395C19.5237 8.0935 18.2657 6.7535 16.3787 6.7535C14.6287 6.7535 13.3027 8.2035 13.3027 9.6245C13.3027 10.1305 13.6037 10.4865 14.1227 10.4865C14.5747 10.4865 14.8477 10.2815 14.9847 9.8305C15.2437 8.9145 15.5857 8.3395 16.3657 8.3395C17.1997 8.3395 17.6507 9.0645 17.6507 10.0355C17.6507 11.1285 16.8987 12.2365 16.1597 13.1655L13.7947 16.2015C13.5347 16.5295 13.2887 16.8715 13.2887 17.2945C13.2887 17.7595 13.5767 18.0875 14.2047 18.0875ZM9.7347 18.2655C10.2537 18.2655 10.6777 17.9515 10.6777 17.2945V15.9275H11.1567C11.6897 15.9275 11.9357 15.5855 11.9357 15.1215C11.9357 14.6835 11.7027 14.3415 11.1567 14.3415H10.6777V8.3395C10.6777 7.3965 10.0487 6.8635 9.1597 6.8635C8.2027 6.8635 7.7517 7.3555 7.3687 8.2035L4.9217 13.5075C4.6897 14.0405 4.6077 14.3965 4.6077 14.8205C4.6077 15.4765 5.0727 15.9275 5.7287 15.9275H8.7907V17.2945C8.7907 18.0195 9.3107 18.2655 9.7347 18.2655ZM8.8317 14.3825H6.2887V14.2875L8.7777 8.5855H8.8317Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM14.5877 18.266H19.1407C19.7017 18.266 19.9887 17.896 19.9887 17.404C19.9887 16.885 19.6877 16.529 19.1407 16.529H16.2017V16.42L17.9927 14.178C19.2497 12.646 19.7967 11.635 19.7967 10.35C19.7967 8.477 18.5117 7.219 16.6387 7.219C14.9157 7.219 13.5767 8.572 13.5767 10.008C13.5767 10.555 13.9047 10.951 14.4787 10.951C14.9567 10.951 15.2847 10.732 15.4357 10.227C15.6547 9.461 15.9417 8.928 16.6247 8.928C17.3637 8.928 17.7327 9.598 17.7327 10.445C17.7327 11.484 17.0217 12.523 16.2697 13.467L14.1367 16.201C13.7947 16.625 13.5767 16.967 13.5767 17.391C13.5767 17.91 13.9177 18.266 14.5877 18.266ZM10.1587 18.443C10.7187 18.443 11.1837 18.115 11.1837 17.377V16.242H11.5527C12.1547 16.242 12.3867 15.859 12.3867 15.381C12.3867 14.861 12.1407 14.52 11.5527 14.52H11.1837V8.928C11.1837 7.902 10.5137 7.328 9.5157 7.328C8.3267 7.328 7.8747 8.066 7.4647 9.064L5.4547 13.631C5.2367 14.164 5.1407 14.588 5.1407 15.039C5.1407 15.777 5.6187 16.242 6.3847 16.242H9.1187V17.377C9.1187 18.143 9.6387 18.443 10.1587 18.443ZM9.1737 14.574H6.9587V14.479L9.1187 9.146H9.1737Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM13.2347 17.5954H17.9237C18.1977 17.5954 18.3747 17.4044 18.3747 17.1444C18.3747 16.8714 18.1837 16.6794 17.9237 16.6794H14.0817V16.6254L16.6387 13.0564C17.7457 11.5394 18.1287 10.5414 18.1287 9.3924C18.1287 7.6834 17.1717 6.3164 15.4217 6.3164C13.8227 6.3164 12.7427 7.7794 12.7427 9.2284C12.7427 9.4614 12.8927 9.7074 13.2067 9.7074C13.4527 9.7074 13.6177 9.5704 13.6587 9.3384C13.8497 8.0934 14.3687 7.2324 15.4357 7.2324C16.6387 7.2324 17.1587 8.3674 17.1587 9.4474C17.1587 10.4724 16.7207 11.3884 15.8597 12.5784L12.9477 16.5974C12.8107 16.7894 12.7287 16.9534 12.7287 17.1584C12.7287 17.4314 12.9197 17.5954 13.2347 17.5954ZM9.4337 17.7324C9.7067 17.7324 9.9257 17.5004 9.9257 17.1994V15.0394H10.7597C11.0467 15.0394 11.2107 14.8614 11.2107 14.5744C11.2107 14.3284 11.0337 14.1364 10.7597 14.1364H9.9257V7.1914C9.9257 6.5894 9.5297 6.3714 9.1327 6.3714C8.6137 6.3714 8.3537 6.6584 8.1207 7.1504L4.8807 13.6304C4.7577 13.9184 4.7027 14.1364 4.7027 14.3824C4.7027 14.7654 4.9627 15.0394 5.3867 15.0394H8.9137V17.1994C8.9137 17.5414 9.1467 17.7324 9.4337 17.7324ZM8.9137 14.1504H5.6597V14.0954L8.8727 7.5194H8.9137Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM12.9477 17.445H17.6227C17.8277 17.445 17.9927 17.295 17.9927 17.09C17.9927 16.885 17.8277 16.734 17.6227 16.734H13.6177V16.68L16.3377 12.824C17.3637 11.361 17.7187 10.363 17.7187 9.229C17.7187 7.561 16.8577 6.18 15.1487 6.18C13.5897 6.18 12.5777 7.643 12.5777 9.119C12.5777 9.27 12.6737 9.475 12.9337 9.475C13.1247 9.475 13.2617 9.352 13.2757 9.174C13.4527 7.848 14.0137 6.891 15.1757 6.891C16.4747 6.891 17.0077 8.162 17.0077 9.27C17.0077 10.281 16.6657 11.143 15.7777 12.4L12.6877 16.707C12.5917 16.857 12.5647 16.98 12.5647 17.117C12.5647 17.336 12.7287 17.445 12.9477 17.445ZM9.3377 17.568C9.5427 17.568 9.7067 17.363 9.7067 17.158V14.766H10.6507C10.8687 14.766 11.0057 14.643 11.0057 14.41C11.0057 14.205 10.8277 14.068 10.6507 14.068H9.7067V6.85C9.7067 6.344 9.3787 6.207 9.1187 6.207C8.7227 6.207 8.5447 6.453 8.3537 6.822L4.8807 13.658C4.7717 13.877 4.7167 14.055 4.7167 14.246C4.7167 14.547 4.9217 14.766 5.2907 14.766H8.9417V17.158C8.9417 17.404 9.0917 17.568 9.3377 17.568ZM8.9417 14.068H5.4687V14.041L8.8867 7.191H8.9417Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}