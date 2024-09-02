import { IconProps } from "../../types"

export default function ArrowUpLeftSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM9.3927 17.8963C10.4317 17.8963 11.0607 17.1443 11.0607 15.9683V14.6153L10.8827 13.3573L12.1677 14.9293L15.7907 18.5393C16.2837 19.0173 16.7887 19.2093 17.3497 19.2093C18.4437 19.2093 19.4007 18.4023 19.4007 17.1993C19.4007 16.6662 19.1677 16.1193 18.7577 15.7093L15.0667 12.0173L13.4937 10.7323L14.6977 10.9513H16.1877C17.3497 10.9513 18.0877 10.3223 18.0877 9.2833C18.0877 8.2442 17.3227 7.6153 16.1467 7.6153H10.1717C8.6407 7.6153 7.7247 8.5173 7.7247 10.0353V15.9963C7.7247 17.1443 8.3537 17.8963 9.3927 17.8963Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM8.8457 16.9257C9.6657 16.9257 10.1857 16.3517 10.1857 15.4357V13.5757L9.9807 11.8807L11.6077 13.7127L15.9417 18.0467C16.2837 18.3747 16.6657 18.5257 17.1177 18.5257C17.9647 18.5257 18.6347 17.9237 18.6347 17.0217C18.6347 16.6117 18.4567 16.2007 18.1567 15.9137L13.7947 11.5387L11.9357 9.9117L13.5487 10.1307H15.5447C16.4477 10.1307 17.0347 9.6117 17.0347 8.7907C17.0347 7.9707 16.4477 7.4647 15.5317 7.4647H9.2967C8.1897 7.4647 7.5057 8.0667 7.5057 9.2287V15.4357C7.5057 16.3237 8.0257 16.9257 8.8457 16.9257Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM9.1327 17.4455C10.0627 17.4455 10.6507 16.7755 10.6507 15.7225V14.1365L10.4587 12.6735L11.9087 14.3695L15.8597 18.3065C16.2837 18.7305 16.7347 18.8945 17.2407 18.8945C18.2247 18.8945 19.0447 18.1835 19.0447 17.1305C19.0447 16.6525 18.8267 16.1605 18.4707 15.8185L14.4647 11.7985L12.7697 10.3495L14.1507 10.5685H15.8867C16.9117 10.5685 17.5957 9.9945 17.5957 9.0645C17.5957 8.1215 16.9117 7.5465 15.8597 7.5465H9.7617C8.4217 7.5465 7.6287 8.3125 7.6287 9.6665V15.7365C7.6287 16.7755 8.2027 17.4455 9.1327 17.4455Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM7.9297 15.6545C8.3947 15.6545 8.7087 15.3395 8.7087 14.8345V11.8265L8.5727 9.5845L10.2947 11.4165L16.2017 17.3085C16.3517 17.4595 16.5567 17.5685 16.8167 17.5685C17.2947 17.5685 17.5957 17.2535 17.5957 16.7755C17.5957 16.5565 17.4867 16.3515 17.3357 16.2015L11.4297 10.2815L9.5837 8.5445L11.5527 8.6815H14.8477C15.3537 8.6815 15.6957 8.3675 15.6957 7.9025C15.6957 7.4375 15.3677 7.1365 14.8747 7.1365H8.0257C7.4927 7.1365 7.1507 7.3965 7.1507 7.9985V14.8205C7.1507 15.3125 7.4647 15.6545 7.9297 15.6545Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM8.4907 16.2973C9.1737 16.2973 9.6117 15.8323 9.6117 15.0803V12.8923L9.4197 10.9243L11.2657 12.9333L16.0367 17.7183C16.2967 17.9653 16.5837 18.0883 16.9527 18.0883C17.6507 18.0883 18.1567 17.6233 18.1567 16.8983C18.1567 16.5703 18.0057 16.2563 17.7737 16.0233L12.9747 11.2243L10.9377 9.3793L12.8107 9.5843H15.1347C15.8727 9.5843 16.3517 9.1463 16.3517 8.4633C16.3517 7.7933 15.8727 7.3553 15.1487 7.3553H8.7497C7.9027 7.3553 7.3687 7.7653 7.3687 8.7093V15.0663C7.3687 15.7913 7.8067 16.2973 8.4907 16.2973Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM8.2987 15.9555C8.9007 15.9555 9.2967 15.5315 9.2967 14.8885V12.5235L9.0917 10.3905L11.0607 12.4965L16.0917 17.5275C16.2967 17.7185 16.5427 17.8415 16.8707 17.8415C17.4727 17.8415 17.8827 17.4455 17.8827 16.8305C17.8827 16.5565 17.7457 16.2835 17.5547 16.0915L12.5097 11.0465L10.3767 9.0645L12.4007 9.2835H14.8887C15.5447 9.2835 15.9687 8.8865 15.9687 8.2855C15.9687 7.6835 15.5587 7.2875 14.9157 7.2875H8.4357C7.7387 7.2875 7.3007 7.6015 7.3007 8.4085V14.8615C7.3007 15.4905 7.6977 15.9555 8.2987 15.9555Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM8.6407 16.57C9.3927 16.57 9.8577 16.051 9.8577 15.23V13.193L9.6657 11.348L11.4157 13.275L15.9957 17.855C16.2837 18.143 16.6247 18.279 17.0217 18.279C17.7867 18.279 18.3617 17.76 18.3617 16.953C18.3617 16.598 18.1977 16.242 17.9377 15.982L13.3297 11.361L11.3747 9.611L13.1387 9.816H15.3127C16.1187 9.816 16.6387 9.352 16.6387 8.613C16.6387 7.861 16.1187 7.396 15.3127 7.396H8.9827C8.0257 7.396 7.4377 7.902 7.4377 8.928V15.23C7.4377 16.023 7.9027 16.57 8.6407 16.57Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM7.4377 15.2574C7.7387 15.2574 7.9297 15.0664 7.9297 14.7524V10.9104L7.8887 8.4904L9.2967 9.9664L16.3517 17.0214C16.4477 17.1174 16.5707 17.1724 16.7477 17.1724C17.0347 17.1724 17.2267 16.9804 17.2267 16.6934C17.2267 16.5294 17.1587 16.4064 17.0627 16.3104L9.9937 9.2424L8.5177 7.8204L10.4317 7.8754H14.7927C15.1207 7.8754 15.3127 7.6704 15.3127 7.3824C15.3127 7.1094 15.1207 6.9184 14.8067 6.9184H7.4787C7.1777 6.9184 6.9727 7.0954 6.9727 7.4374V14.7384C6.9727 15.0524 7.1637 15.2574 7.4377 15.2574Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM7.1917 15.053C7.3967 15.053 7.5337 14.916 7.5337 14.697V7.93L8.7777 9.215L16.4197 16.857C16.4887 16.926 16.5707 16.98 16.7067 16.98C16.9117 16.98 17.0487 16.844 17.0487 16.639C17.0487 16.516 16.9937 16.434 16.9257 16.365L9.2697 8.709L7.9707 7.451H14.7657C14.9847 7.451 15.1207 7.314 15.1207 7.109C15.1207 6.932 14.9847 6.809 14.7657 6.809H7.1917C7.0137 6.809 6.8767 6.945 6.8767 7.15V14.697C6.8767 14.916 7.0137 15.053 7.1917 15.053Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
