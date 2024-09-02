import { IconProps } from "../../types"

export default function TwoOneSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM8.6957 18.6213H12.8377C13.5487 18.6213 13.8227 18.1293 13.8227 17.6093C13.8227 17.0903 13.5487 16.5973 12.8377 16.5973H10.5277V16.4883L11.9087 14.8473C12.9197 13.6583 13.6587 12.6873 13.6587 11.2243C13.6587 9.2693 12.3187 8.1893 10.4727 8.1893C8.8317 8.1893 7.4647 9.3653 7.4647 10.8013C7.4647 11.4573 7.8477 11.9492 8.5317 11.9492C9.0647 11.9492 9.4887 11.6893 9.6797 11.0473C9.8167 10.5823 9.9937 10.1723 10.4727 10.1723C11.0197 10.1723 11.1837 10.7053 11.1837 11.2933C11.1837 12.2223 10.5687 13.1113 9.7757 14.1093L8.1617 16.1602C7.6427 16.8163 7.4787 17.1722 7.4787 17.5953C7.4787 18.2523 7.9157 18.6213 8.6957 18.6213ZM17.8827 18.7852C18.6207 18.7852 19.2087 18.1973 19.2087 17.4593V9.7753C19.2087 8.8043 18.6347 8.2853 17.6637 8.2853C16.9527 8.2853 16.4747 8.5582 15.9827 8.9273L14.9567 9.7203C14.5607 10.0213 14.3827 10.3363 14.3827 10.7463C14.3827 11.4163 14.8477 11.6763 15.2437 11.6763C15.4907 11.6763 15.6677 11.6073 15.8867 11.4433L16.5567 10.9243V17.4593C16.5567 18.1973 17.1447 18.7852 17.8827 18.7852Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM7.9437 18.3617H12.3867C12.9887 18.3617 13.2617 17.9507 13.2617 17.4587C13.2617 16.9397 12.9747 16.5427 12.3867 16.5427H9.6117V16.4337L11.3067 14.3557C12.4827 12.9197 13.0837 11.9217 13.0837 10.5957C13.0837 8.6817 11.7847 7.4787 9.9117 7.4787C8.2307 7.4787 6.8767 8.7907 6.8767 10.2267C6.8767 10.8007 7.2187 11.2247 7.8207 11.2247C8.3127 11.2247 8.6677 10.9917 8.8317 10.4457C9.0237 9.7617 9.2837 9.2557 9.9117 9.2557C10.6097 9.2557 10.9097 9.8987 10.9097 10.6637C10.9097 11.6757 10.2267 12.6877 9.4747 13.6447L7.4647 16.1877C7.0817 16.6797 6.8767 17.0217 6.8767 17.4587C6.8767 18.0057 7.2457 18.3617 7.9437 18.3617ZM17.5817 18.5257C18.2247 18.5257 18.7437 18.0057 18.7437 17.3637V8.8867C18.7437 8.0387 18.2387 7.5737 17.3907 7.5737C16.7477 7.5737 16.2837 7.8747 15.8727 8.1897L14.6157 9.1597C14.3007 9.4067 14.1097 9.6937 14.1097 10.0757C14.1097 10.6227 14.4787 10.9097 14.8887 10.9097C15.1207 10.9097 15.2717 10.8417 15.4627 10.7047L16.4197 9.9397V17.3637C16.4197 18.0057 16.9397 18.5257 17.5817 18.5257Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM8.3397 18.4985H12.6187C13.2887 18.4985 13.5627 18.0465 13.5627 17.5415C13.5627 17.0215 13.2757 16.5835 12.6187 16.5835H10.1037V16.4745L11.6207 14.6285C12.7147 13.3165 13.3847 12.3325 13.3847 10.9235C13.3847 8.9965 12.0587 7.8615 10.2127 7.8615C8.5447 7.8615 7.1917 9.0915 7.1917 10.5415C7.1917 11.1565 7.5467 11.6075 8.2027 11.6075C8.7087 11.6075 9.0917 11.3615 9.2837 10.7735C9.4337 10.1995 9.6657 9.7485 10.2127 9.7485C10.8277 9.7485 11.0607 10.3225 11.0607 11.0055C11.0607 11.9765 10.4047 12.9195 9.6387 13.9045L7.8337 16.1875C7.3687 16.7615 7.1917 17.1035 7.1917 17.5415C7.1917 18.1425 7.5877 18.4985 8.3397 18.4985ZM17.7457 18.6755C18.4437 18.6755 18.9907 18.1155 18.9907 17.4175V9.3655C18.9907 8.4495 18.4437 7.9575 17.5407 7.9575C16.8577 7.9575 16.3787 8.2445 15.9277 8.5855L14.7927 9.4745C14.4377 9.7345 14.2597 10.0355 14.2597 10.4455C14.2597 11.0465 14.6697 11.3205 15.0797 11.3205C15.3127 11.3205 15.4767 11.2515 15.6817 11.1015L16.4887 10.4585V17.4175C16.4887 18.1155 17.0487 18.6755 17.7457 18.6755Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM7.0817 17.8825H11.7987C12.1957 17.8825 12.4417 17.6235 12.4417 17.2405C12.4417 16.8305 12.1817 16.5845 11.7987 16.5845H8.2987V16.4885L10.5407 13.5215C11.7987 11.8945 12.2227 10.8965 12.2227 9.7205C12.2227 7.9165 11.0877 6.5765 9.2697 6.5765C7.5747 6.5765 6.3577 8.0255 6.3577 9.4605C6.3577 9.8435 6.5897 10.1585 7.0277 10.1585C7.3827 10.1585 7.6157 9.9805 7.7107 9.6255C7.9437 8.5725 8.3537 7.8615 9.2697 7.8615C10.2537 7.8615 10.7327 8.7775 10.7327 9.7895C10.7327 10.8555 10.1177 11.8805 9.3377 12.9195L6.7267 16.3785C6.5217 16.6525 6.3437 16.9125 6.3437 17.2405C6.3437 17.6235 6.5897 17.8825 7.0817 17.8825ZM16.8847 18.0335C17.3087 18.0335 17.6777 17.6645 17.6777 17.2265V7.5605C17.6777 7.0135 17.3227 6.6715 16.7617 6.6715C16.3107 6.6715 15.9277 6.9175 15.6677 7.1365L14.0137 8.4625C13.8227 8.6135 13.6717 8.8185 13.6717 9.1055C13.6717 9.4475 13.9047 9.6935 14.2457 9.6935C14.4237 9.6935 14.5337 9.6385 14.6427 9.5565L16.0777 8.3945V17.2265C16.0777 17.6645 16.4337 18.0335 16.8847 18.0335Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM7.4647 18.1973H12.0997C12.6187 18.1973 12.9197 17.8423 12.9197 17.3493C12.9197 16.8433 12.6187 16.5153 12.0997 16.5153H9.0237V16.4063L10.9097 14.0413C12.2087 12.4273 12.7147 11.4293 12.7147 10.1723C12.7147 8.3123 11.4437 7.0133 9.5707 7.0133C7.8337 7.0133 6.5077 8.4223 6.5077 9.8433C6.5077 10.3773 6.8087 10.7593 7.3687 10.7593C7.8337 10.7593 8.1347 10.5413 8.2847 10.0623C8.5177 9.2283 8.8317 8.6683 9.5567 8.6683C10.3357 8.6683 10.7457 9.3653 10.7457 10.2673C10.7457 11.3203 10.0077 12.4003 9.2697 13.3303L7.0277 16.2013C6.7267 16.5843 6.4937 16.9253 6.4937 17.3493C6.4937 17.8423 6.8087 18.1973 7.4647 18.1973ZM17.3907 18.3473C17.9647 18.3473 18.4437 17.8693 18.4437 17.2813V8.2993C18.4437 7.5473 17.9787 7.1233 17.2267 7.1233C16.6247 7.1233 16.1597 7.4243 15.8047 7.6973L14.3967 8.8043C14.1227 8.9963 13.9317 9.2693 13.9317 9.6383C13.9317 10.1173 14.2457 10.4043 14.6697 10.4043C14.8887 10.4043 15.0257 10.3363 15.1757 10.2133L16.3247 9.2973V17.2813C16.3247 17.8693 16.8027 18.3473 17.3907 18.3473Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM7.1917 18.0875H11.9357C12.4277 18.0875 12.7147 17.7735 12.7147 17.2945C12.7147 16.7755 12.4137 16.4885 11.9357 16.4885H8.6957V16.3785L10.6917 13.8495C12.0587 12.1545 12.5097 11.1425 12.5097 9.9395C12.5097 8.0935 11.2517 6.7535 9.3657 6.7535C7.6157 6.7535 6.2887 8.2035 6.2887 9.6245C6.2887 10.1305 6.5897 10.4865 7.1097 10.4865C7.5607 10.4865 7.8337 10.2815 7.9707 9.8305C8.2307 8.9145 8.5727 8.3395 9.3517 8.3395C10.1857 8.3395 10.6367 9.0645 10.6367 10.0355C10.6367 11.1285 9.8847 12.2365 9.1597 13.1655L6.7817 16.2015C6.5217 16.5295 6.2757 16.8715 6.2757 17.2945C6.2757 17.7595 6.5767 18.0875 7.1917 18.0875ZM17.2817 18.2385C17.8277 18.2385 18.2797 17.7875 18.2797 17.2405V7.9705C18.2797 7.2735 17.8417 6.8635 17.1307 6.8635C16.5567 6.8635 16.0917 7.1775 15.7777 7.4235L14.2737 8.5855C14.0277 8.7775 13.8357 9.0375 13.8357 9.3925C13.8357 9.8165 14.1227 10.1175 14.5337 10.1175C14.7517 10.1175 14.8887 10.0485 15.0257 9.9535L16.2837 8.9415V17.2405C16.2837 17.7875 16.7347 18.2385 17.2817 18.2385Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM7.6697 18.266H12.2227C12.7837 18.266 13.0707 17.896 13.0707 17.404C13.0707 16.885 12.7697 16.529 12.2227 16.529H9.2837V16.42L11.0747 14.178C12.3317 12.646 12.8787 11.635 12.8787 10.35C12.8787 8.477 11.5937 7.219 9.7207 7.219C7.9977 7.219 6.6717 8.572 6.6717 10.008C6.6717 10.555 6.9867 10.951 7.5607 10.951C8.0387 10.951 8.3677 10.732 8.5177 10.227C8.7367 9.461 9.0237 8.928 9.7067 8.928C10.4457 8.928 10.8147 9.598 10.8147 10.445C10.8147 11.484 10.1037 12.523 9.3517 13.467L7.2187 16.201C6.8767 16.625 6.6587 16.967 6.6587 17.391C6.6587 17.91 6.9997 18.266 7.6697 18.266ZM17.4727 18.43C18.0747 18.43 18.5797 17.924 18.5797 17.309V8.559C18.5797 7.766 18.0877 7.314 17.2947 7.314C16.6797 7.314 16.2147 7.615 15.8317 7.902L14.4927 8.955C14.1917 9.174 14.0137 9.461 14.0137 9.83C14.0137 10.336 14.3557 10.623 14.7657 10.623C14.9847 10.623 15.1347 10.555 15.2987 10.432L16.3657 9.57V17.309C16.3657 17.924 16.8577 18.43 17.4727 18.43Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM6.9317 17.5954H11.6207C11.8947 17.5954 12.0857 17.4044 12.0857 17.1444C12.0857 16.8714 11.8947 16.6794 11.6207 16.6794H7.7927V16.6254L10.3497 13.0564C11.4437 11.5394 11.8267 10.5414 11.8267 9.3924C11.8267 7.6834 10.8827 6.3164 9.1327 6.3164C7.5197 6.3164 6.4397 7.7794 6.4397 9.2284C6.4397 9.4614 6.5897 9.7074 6.9047 9.7074C7.1507 9.7074 7.3147 9.5704 7.3687 9.3384C7.5607 8.0934 8.0667 7.2324 9.1467 7.2324C10.3357 7.2324 10.8557 8.3674 10.8557 9.4474C10.8557 10.4724 10.4177 11.3884 9.5707 12.5784L6.6447 16.5974C6.5077 16.7894 6.4257 16.9534 6.4257 17.1584C6.4257 17.4314 6.6307 17.5954 6.9317 17.5954ZM16.3517 17.7324C16.6247 17.7324 16.8707 17.4864 16.8707 17.1854V7.0004C16.8707 6.6584 16.6247 6.4254 16.2837 6.4254C15.9687 6.4254 15.7227 6.5764 15.5317 6.7404L13.6717 8.2714C13.5347 8.3804 13.4527 8.5044 13.4527 8.6954C13.4527 8.9274 13.6177 9.1194 13.8637 9.1194C13.9997 9.1194 14.0687 9.0784 14.1507 9.0094L15.8047 7.6704V17.1854C15.8047 17.4864 16.0507 17.7324 16.3517 17.7324Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM6.8637 17.445H11.5387C11.7437 17.445 11.8947 17.295 11.8947 17.09C11.8947 16.885 11.7437 16.734 11.5387 16.734H7.5197V16.68L10.2407 12.824C11.2657 11.361 11.6347 10.363 11.6347 9.229C11.6347 7.561 10.7737 6.18 9.0647 6.18C7.4927 6.18 6.4807 7.643 6.4807 9.119C6.4807 9.27 6.5897 9.475 6.8497 9.475C7.0277 9.475 7.1637 9.352 7.1777 9.174C7.3557 7.848 7.9157 6.891 9.0777 6.891C10.3767 6.891 10.9237 8.162 10.9237 9.27C10.9237 10.281 10.5817 11.143 9.6797 12.4L6.6037 16.707C6.4937 16.857 6.4667 16.98 6.4667 17.117C6.4667 17.336 6.6447 17.445 6.8637 17.445ZM16.0777 17.568C16.2837 17.568 16.4607 17.391 16.4607 17.172V6.713C16.4607 6.467 16.2837 6.289 16.0367 6.289C15.8047 6.289 15.6137 6.398 15.4627 6.535L13.5077 8.176C13.3987 8.258 13.3437 8.34 13.3437 8.477C13.3437 8.668 13.4667 8.818 13.6717 8.818C13.7817 8.818 13.8227 8.791 13.8907 8.736L15.6677 7.301V17.172C15.6677 17.391 15.8597 17.568 16.0777 17.568Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}