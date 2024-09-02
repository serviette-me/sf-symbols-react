import { IconProps } from "../../types"

export default function TwoFiveSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM7.9297 18.6213H12.0727C12.7967 18.6213 13.0567 18.1293 13.0567 17.6093C13.0567 17.0903 12.7837 16.5973 12.0727 16.5973H9.7757V16.4883L11.1567 14.8473C12.1547 13.6583 12.8927 12.6873 12.8927 11.2243C12.8927 9.2693 11.5527 8.1893 9.7067 8.1893C8.0797 8.1893 6.7127 9.3653 6.7127 10.8013C6.7127 11.4573 7.0957 11.9492 7.7797 11.9492C8.2987 11.9492 8.7227 11.6893 8.9137 11.0473C9.0507 10.5823 9.2427 10.1723 9.7067 10.1723C10.2677 10.1723 10.4317 10.7053 10.4317 11.2933C10.4317 12.2223 9.8167 13.1113 9.0237 14.1093L7.3967 16.1602C6.8767 16.8163 6.7267 17.1722 6.7267 17.5953C6.7267 18.2523 7.1507 18.6213 7.9297 18.6213ZM17.3357 18.8943C19.4277 18.8943 20.4667 17.2133 20.4667 15.1213C20.4667 13.5903 19.9337 11.8123 18.2797 11.8123C17.3357 11.8123 16.8437 12.4142 16.6657 12.9063H16.5977L16.7347 10.4863H19.1817C19.8517 10.4863 20.1527 10.0213 20.1527 9.4883C20.1527 8.8733 19.7967 8.4633 19.1817 8.4633H15.8047C15.0257 8.4633 14.6567 8.9963 14.6157 9.7892L14.5057 12.8513C14.5057 12.9332 14.4927 13.2343 14.4927 13.3433C14.4927 14.1363 14.9157 14.6153 15.6267 14.6153C16.0917 14.6153 16.3377 14.5063 16.5837 14.1093C16.7347 13.8493 16.9397 13.5763 17.2407 13.5763C17.8277 13.5763 18.0057 14.4783 18.0057 15.1893C18.0057 15.8323 17.8967 16.8713 17.2677 16.8713C16.8577 16.8713 16.6387 16.5293 16.5017 16.1602C16.3107 15.5993 15.9137 15.3263 15.4217 15.3263C14.7797 15.3263 14.3967 15.7223 14.3967 16.3653C14.3967 16.5843 14.4377 16.7893 14.4927 17.0083C14.8337 18.0603 15.9827 18.8943 17.3357 18.8943Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM7.0407 18.3617H11.4847C12.0857 18.3617 12.3597 17.9507 12.3597 17.4587C12.3597 16.9397 12.0727 16.5427 11.4847 16.5427H8.7087V16.4337L10.3907 14.3557C11.5797 12.9197 12.1817 11.9217 12.1817 10.5957C12.1817 8.6817 10.8827 7.4787 9.0097 7.4787C7.3147 7.4787 5.9747 8.7907 5.9747 10.2267C5.9747 10.8007 6.3167 11.2247 6.9177 11.2247C7.4097 11.2247 7.7517 10.9917 7.9157 10.4457C8.1207 9.7617 8.3807 9.2557 9.0097 9.2557C9.6937 9.2557 10.0077 9.8987 10.0077 10.6637C10.0077 11.6757 9.3247 12.6877 8.5587 13.6447L6.5627 16.1877C6.1797 16.6797 5.9747 17.0217 5.9747 17.4587C5.9747 18.0057 6.3297 18.3617 7.0407 18.3617ZM16.9117 18.6487C19.0177 18.6487 20.1247 16.9117 20.1247 14.7797C20.1247 13.0707 19.4007 11.3207 17.6917 11.3207C16.8167 11.3207 16.2017 11.7987 15.9417 12.4547H15.8727L16.0507 9.5837H18.8807C19.4547 9.5837 19.7427 9.1877 19.7427 8.6677C19.7427 8.1347 19.4137 7.7657 18.8807 7.7657H15.3127C14.5607 7.7657 14.2187 8.2577 14.1777 9.0097L14.0137 12.4137C13.9997 12.5647 13.9867 12.8107 13.9867 12.9607C13.9867 13.6167 14.3417 14.0957 15.0117 14.0957C15.4357 14.0957 15.6547 13.9587 15.9137 13.5757C16.1467 13.2207 16.4337 12.9197 16.8577 12.9197C17.6507 12.9197 17.9377 13.9867 17.9377 14.8477C17.9377 15.7227 17.6777 16.8297 16.8577 16.8297C16.2697 16.8297 15.9417 16.3787 15.7497 15.8187C15.5727 15.3257 15.2307 15.0797 14.7927 15.0797C14.2187 15.0797 13.8767 15.4487 13.8767 16.0097C13.8767 16.2827 13.9317 16.5427 14.0277 16.7887C14.4237 17.8557 15.5997 18.6487 16.9117 18.6487Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM7.5057 18.4985H11.7987C12.4547 18.4985 12.7287 18.0465 12.7287 17.5415C12.7287 17.0215 12.4547 16.5835 11.7987 16.5835H9.2697V16.4745L10.8007 14.6285C11.8807 13.3165 12.5647 12.3325 12.5647 10.9235C12.5647 8.9965 11.2387 7.8615 9.3787 7.8615C7.7247 7.8615 6.3577 9.0915 6.3577 10.5415C6.3577 11.1565 6.7267 11.6075 7.3687 11.6075C7.8747 11.6075 8.2717 11.3615 8.4497 10.7735C8.6137 10.1995 8.8317 9.7485 9.3787 9.7485C9.9937 9.7485 10.2267 10.3225 10.2267 11.0055C10.2267 11.9765 9.5837 12.9195 8.8047 13.9045L6.9997 16.1875C6.5487 16.7615 6.3707 17.1035 6.3707 17.5415C6.3707 18.1425 6.7677 18.4985 7.5057 18.4985ZM17.1307 18.7855C19.2367 18.7855 20.3027 17.0765 20.3027 14.9705C20.3027 13.3575 19.6877 11.5935 18.0057 11.5935C17.0897 11.5935 16.5427 12.1265 16.3247 12.7015H16.2557L16.4067 10.0625H19.0447C19.6597 10.0625 19.9607 9.6385 19.9607 9.1055C19.9607 8.5315 19.6187 8.1345 19.0447 8.1345H15.5727C14.8067 8.1345 14.4517 8.6545 14.4097 9.4335L14.2737 12.6465C14.2737 12.7695 14.2597 13.0425 14.2597 13.1665C14.2597 13.9045 14.6427 14.3695 15.3397 14.3695C15.7777 14.3695 16.0237 14.2595 16.2697 13.8635C16.4607 13.5625 16.7067 13.2615 17.0627 13.2615C17.7457 13.2615 17.9647 14.2465 17.9647 15.0395C17.9647 15.7915 17.7867 16.8575 17.0767 16.8575C16.5837 16.8575 16.3107 16.4745 16.1467 16.0095C15.9687 15.4765 15.5857 15.2165 15.1207 15.2165C14.5197 15.2165 14.1507 15.5995 14.1507 16.2145C14.1507 16.4475 14.2047 16.6795 14.2737 16.9125C14.6427 17.9785 15.8047 18.7855 17.1307 18.7855Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM6.0297 17.8825H10.7457C11.1427 17.8825 11.3887 17.6235 11.3887 17.2405C11.3887 16.8305 11.1287 16.5845 10.7457 16.5845H7.2457V16.4885L9.4887 13.5215C10.7457 11.8945 11.1567 10.8965 11.1567 9.7205C11.1567 7.9165 10.0347 6.5765 8.2027 6.5765C6.5217 6.5765 5.3047 8.0255 5.3047 9.4605C5.3047 9.8435 5.5367 10.1585 5.9607 10.1585C6.3297 10.1585 6.5627 9.9805 6.6587 9.6255C6.8907 8.5725 7.3007 7.8615 8.2027 7.8615C9.1877 7.8615 9.6797 8.7775 9.6797 9.7895C9.6797 10.8555 9.0647 11.8805 8.2717 12.9195L5.6597 16.3785C5.4687 16.6525 5.2777 16.9125 5.2777 17.2405C5.2777 17.6235 5.5367 17.8825 6.0297 17.8825ZM16.0507 18.1425C18.1017 18.1425 19.2087 16.3375 19.2087 14.2595C19.2087 12.4005 18.3067 10.6365 16.5427 10.6365C15.7637 10.6365 14.9847 11.0055 14.6157 11.8535H14.5607L14.8207 8.1485H18.1287C18.5257 8.1485 18.7577 7.8755 18.7577 7.4925C18.7577 7.1235 18.5117 6.8355 18.1287 6.8355H14.4097C13.8087 6.8355 13.5347 7.2325 13.4937 7.8205L13.2347 11.8265C13.2207 12.0445 13.2067 12.2775 13.2067 12.4275C13.2067 12.8655 13.4397 13.2345 13.9457 13.2345C14.2737 13.2345 14.4517 13.0705 14.6837 12.7425C15.0117 12.2095 15.4357 11.8265 16.0777 11.8265C17.1997 11.8265 17.6777 13.1795 17.6777 14.3005C17.6777 15.5585 17.1857 16.8435 16.0367 16.8435C15.1757 16.8435 14.6287 16.1605 14.3967 15.3125C14.2737 14.9165 14.0277 14.7515 13.7267 14.7515C13.3167 14.7515 13.0567 15.0115 13.0567 15.4215C13.0567 15.6675 13.1387 15.9415 13.2207 16.1605C13.6447 17.3355 14.7797 18.1425 16.0507 18.1425Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM6.4667 18.1973H11.1017C11.6207 18.1973 11.9217 17.8423 11.9217 17.3493C11.9217 16.8433 11.6207 16.5153 11.1017 16.5153H8.0257V16.4063L9.9117 14.0413C11.2107 12.4273 11.7167 11.4293 11.7167 10.1723C11.7167 8.3123 10.4457 7.0133 8.5727 7.0133C6.8357 7.0133 5.5097 8.4223 5.5097 9.8433C5.5097 10.3773 5.8107 10.7593 6.3707 10.7593C6.8357 10.7593 7.1367 10.5413 7.2867 10.0623C7.5197 9.2283 7.8337 8.6683 8.5587 8.6683C9.3377 8.6683 9.7477 9.3653 9.7477 10.2673C9.7477 11.3203 9.0097 12.4003 8.2717 13.3303L6.0297 16.2013C5.7287 16.5843 5.4957 16.9253 5.4957 17.3493C5.4957 17.8423 5.8107 18.1973 6.4667 18.1973ZM16.6247 18.4703C18.7577 18.4703 19.8927 16.7073 19.8927 14.5603C19.8927 12.7283 19.0587 10.9923 17.3227 10.9923C16.4887 10.9923 15.7907 11.4023 15.4767 12.1543H15.4087L15.6137 8.9823H18.6897C19.1957 8.9823 19.4827 8.6273 19.4827 8.1483C19.4827 7.6563 19.1677 7.3003 18.6897 7.3003H14.9977C14.2737 7.3003 13.9457 7.7793 13.8907 8.5043L13.6997 12.1273C13.6857 12.3043 13.6717 12.5373 13.6717 12.7153C13.6717 13.2753 13.9727 13.7403 14.6157 13.7403C14.9977 13.7403 15.2167 13.6033 15.5037 13.2203C15.7777 12.8103 16.1057 12.4963 16.6117 12.4963C17.5407 12.4963 17.8827 13.6583 17.8827 14.6013C17.8827 15.6543 17.5407 16.8023 16.5977 16.8023C15.9007 16.8023 15.5037 16.2833 15.2717 15.5993C15.1077 15.1483 14.7797 14.9163 14.3967 14.9163C13.8637 14.9163 13.5347 15.2583 13.5347 15.7773C13.5347 16.0783 13.6177 16.3653 13.7127 16.6253C14.1637 17.7183 15.3677 18.4703 16.6247 18.4703Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM6.1387 18.0875H10.8827C11.3747 18.0875 11.6617 17.7735 11.6617 17.2945C11.6617 16.7755 11.3617 16.4885 10.8827 16.4885H7.6427V16.3785L9.6387 13.8495C11.0057 12.1545 11.4567 11.1425 11.4567 9.9395C11.4567 8.0935 10.1997 6.7535 8.3127 6.7535C6.5627 6.7535 5.2367 8.2035 5.2367 9.6245C5.2367 10.1305 5.5367 10.4865 6.0567 10.4865C6.5077 10.4865 6.7817 10.2815 6.9317 9.8305C7.1777 8.9145 7.5197 8.3395 8.2987 8.3395C9.1327 8.3395 9.5977 9.0645 9.5977 10.0355C9.5977 11.1285 8.8317 12.2365 8.1077 13.1655L5.7287 16.2015C5.4827 16.5295 5.2227 16.8715 5.2227 17.2945C5.2227 17.7595 5.5237 18.0875 6.1387 18.0875ZM16.4747 18.3745C18.6077 18.3745 19.7697 16.5835 19.7697 14.4235C19.7697 12.5375 18.8677 10.8145 17.1037 10.8145C16.3107 10.8145 15.5587 11.1835 15.2027 11.9765H15.1487L15.3677 8.6545H18.5797C19.0587 8.6545 19.3457 8.3265 19.3457 7.8475C19.3457 7.3965 19.0317 7.0405 18.5797 7.0405H14.8207C14.1097 7.0405 13.7817 7.5055 13.7407 8.2165L13.5217 11.9625C13.4937 12.1675 13.4937 12.3865 13.4937 12.5645C13.4937 13.0835 13.7537 13.5485 14.3967 13.5485C14.7657 13.5485 14.9707 13.3985 15.2577 13.0295C15.5727 12.5785 15.9137 12.2495 16.4747 12.2495C17.4727 12.2495 17.8687 13.4665 17.8687 14.4785C17.8687 15.6135 17.4587 16.7755 16.4477 16.7755C15.6817 16.7755 15.2437 16.2285 14.9977 15.4765C14.8337 15.0395 14.5337 14.8335 14.1637 14.8335C13.6717 14.8335 13.3577 15.1485 13.3577 15.6545C13.3577 15.9685 13.4257 16.2695 13.5487 16.5425C14.0277 17.6505 15.2307 18.3745 16.4747 18.3745Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM6.7127 18.266H11.2657C11.8267 18.266 12.1137 17.896 12.1137 17.404C12.1137 16.885 11.8127 16.529 11.2657 16.529H8.3267V16.42L10.1177 14.178C11.3747 12.646 11.9217 11.635 11.9217 10.35C11.9217 8.477 10.6367 7.219 8.7637 7.219C7.0407 7.219 5.7017 8.572 5.7017 10.008C5.7017 10.555 6.0297 10.951 6.6037 10.951C7.0817 10.951 7.4097 10.732 7.5607 10.227C7.7797 9.461 8.0667 8.928 8.7497 8.928C9.4887 8.928 9.8577 9.598 9.8577 10.445C9.8577 11.484 9.1467 12.523 8.3947 13.467L6.2617 16.201C5.9197 16.625 5.7017 16.967 5.7017 17.391C5.7017 17.91 6.0427 18.266 6.7127 18.266ZM16.7477 18.539C18.8677 18.539 19.9887 16.789 19.9887 14.656C19.9887 12.879 19.2087 11.129 17.4867 11.129C16.6387 11.129 15.9687 11.58 15.6677 12.277H15.6137L15.8047 9.242H18.7717C19.3047 9.242 19.6057 8.873 19.6057 8.381C19.6057 7.861 19.2777 7.506 18.7717 7.506H15.1347C14.3967 7.506 14.0687 7.984 14.0137 8.723L13.8357 12.25C13.8227 12.414 13.8087 12.66 13.8087 12.824C13.8087 13.426 14.1227 13.891 14.7797 13.891C15.1897 13.891 15.4087 13.754 15.6817 13.371C15.9417 12.988 16.2427 12.674 16.7207 12.674C17.5957 12.674 17.9097 13.795 17.9097 14.711C17.9097 15.682 17.5957 16.816 16.7067 16.816C16.0647 16.816 15.6957 16.324 15.4767 15.695C15.3127 15.23 14.9707 14.998 14.5607 14.998C14.0277 14.998 13.6857 15.34 13.6857 15.887C13.6857 16.174 13.7537 16.447 13.8497 16.693C14.2867 17.787 15.4767 18.539 16.7477 18.539Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM5.8787 17.5954H10.5687C10.8277 17.5954 11.0197 17.4044 11.0197 17.1444C11.0197 16.8714 10.8277 16.6794 10.5687 16.6794H6.7267V16.6254L9.2837 13.0564C10.3907 11.5394 10.7737 10.5414 10.7737 9.3924C10.7737 7.6834 9.8167 6.3164 8.0667 6.3164C6.4527 6.3164 5.3867 7.7794 5.3867 9.2284C5.3867 9.4614 5.5237 9.7074 5.8377 9.7074C6.0837 9.7074 6.2617 9.5704 6.3027 9.3384C6.4937 8.0934 6.9997 7.2324 8.0797 7.2324C9.2697 7.2324 9.8027 8.3674 9.8027 9.4474C9.8027 10.4724 9.3657 11.3884 8.5037 12.5784L5.5777 16.5974C5.4417 16.7894 5.3597 16.9534 5.3597 17.1584C5.3597 17.4314 5.5647 17.5954 5.8787 17.5954ZM15.5037 17.8284C17.4457 17.8284 18.4567 15.9964 18.4567 14.0274C18.4567 12.1954 17.5687 10.3904 15.8047 10.3904C15.0527 10.3904 14.2187 10.7464 13.8227 11.6754H13.7817L14.0817 7.4784H17.5407C17.8277 7.4784 17.9927 7.2734 17.9927 7.0004C17.9927 6.7404 17.8007 6.5354 17.5407 6.5354H13.8767C13.4117 6.5354 13.2207 6.8494 13.1797 7.2874L12.8657 11.6214C12.8517 11.8534 12.8377 12.1134 12.8377 12.2364C12.8377 12.5504 13.0157 12.7834 13.3577 12.7834C13.6447 12.7834 13.7677 12.6194 13.9317 12.3594C14.2867 11.7164 14.8067 11.2654 15.5447 11.2654C16.8297 11.2654 17.4177 12.7694 17.4177 14.0544C17.4177 15.4634 16.8167 16.9124 15.5037 16.9124C14.4927 16.9124 13.8087 16.0644 13.6037 15.0804C13.5347 14.7384 13.3577 14.6294 13.1387 14.6294C12.8657 14.6294 12.6877 14.8204 12.6877 15.1074C12.6877 15.2714 12.7427 15.4904 12.7967 15.6544C13.1387 16.9124 14.1637 17.8284 15.5037 17.8284Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM5.7967 17.445H10.4727C10.6777 17.445 10.8277 17.295 10.8277 17.09C10.8277 16.885 10.6777 16.734 10.4727 16.734H6.4667V16.68L9.1737 12.824C10.1997 11.361 10.5687 10.363 10.5687 9.229C10.5687 7.561 9.7067 6.18 7.9977 6.18C6.4257 6.18 5.4277 7.643 5.4277 9.119C5.4277 9.27 5.5237 9.475 5.7837 9.475C5.9607 9.475 6.0977 9.352 6.1247 9.174C6.2887 7.848 6.8497 6.891 8.0117 6.891C9.3107 6.891 9.8577 8.162 9.8577 9.27C9.8577 10.281 9.5157 11.143 8.6267 12.4L5.5367 16.707C5.4417 16.857 5.4007 16.98 5.4007 17.117C5.4007 17.336 5.5777 17.445 5.7967 17.445ZM15.2167 17.664C17.1037 17.664 18.0747 15.805 18.0747 13.918C18.0747 12.086 17.1857 10.268 15.4217 10.268C14.6837 10.268 13.8357 10.609 13.4117 11.58H13.3847L13.7127 7.123H17.2407C17.4587 7.123 17.5957 6.973 17.5957 6.74C17.5957 6.535 17.4457 6.385 17.2407 6.385H13.6037C13.2067 6.385 13.0427 6.645 13.0157 7L12.6737 11.525C12.6597 11.744 12.6467 12.031 12.6467 12.127C12.6467 12.387 12.7967 12.564 13.0567 12.564C13.3167 12.564 13.4117 12.387 13.5347 12.154C13.9047 11.457 14.4787 10.965 15.2717 10.965C16.6387 10.965 17.2947 12.564 17.2947 13.932C17.2947 15.422 16.6247 16.939 15.2167 16.939C14.1507 16.939 13.3987 16.01 13.2067 14.957C13.1527 14.643 13.0157 14.561 12.8517 14.561C12.6187 14.561 12.4827 14.711 12.4827 14.943C12.4827 15.053 12.5367 15.258 12.5777 15.381C12.8787 16.693 13.8637 17.664 15.2167 17.664Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
