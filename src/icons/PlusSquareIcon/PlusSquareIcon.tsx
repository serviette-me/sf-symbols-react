import { IconProps } from "../../types"

export default function PlusSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM7.3277 13.5353C7.3277 14.6013 8.1207 15.4223 9.1597 15.4223H11.6757V17.9373C11.6757 18.9763 12.4827 19.7693 13.5627 19.7693C14.6427 19.7693 15.4497 18.9763 15.4497 17.9373V15.4223H17.9647C19.0177 15.4223 19.7967 14.6013 19.7967 13.5353C19.7967 12.4553 19.0177 11.6483 17.9647 11.6483H15.4497V9.1333C15.4497 8.0803 14.6427 7.3013 13.5627 7.3013C12.4827 7.3013 11.6757 8.0803 11.6757 9.1333V11.6483H9.1597C8.1207 11.6483 7.3277 12.4553 7.3277 13.5353Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM6.7947 13.0567C6.7947 13.9317 7.4237 14.5607 8.2987 14.5607H11.5667V17.8417C11.5667 18.7027 12.1957 19.3317 13.0707 19.3317C13.9457 19.3317 14.6017 18.7027 14.6017 17.8417V14.5607H17.8687C18.7307 14.5607 19.3597 13.9317 19.3597 13.0567C19.3597 12.1677 18.7307 11.5257 17.8687 11.5257H14.6017V8.2577C14.6017 7.3827 13.9457 6.7677 13.0707 6.7677C12.1957 6.7677 11.5667 7.3827 11.5667 8.2577V11.5257H8.2987C7.4237 11.5257 6.7947 12.1677 6.7947 13.0567Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM7.0817 13.3165C7.0817 14.2875 7.7927 15.0255 8.7497 15.0255H11.6207V17.8965C11.6207 18.8535 12.3457 19.5645 13.3297 19.5645C14.3147 19.5645 15.0527 18.8535 15.0527 17.8965V15.0255H17.9237C18.8807 15.0255 19.5917 14.2875 19.5917 13.3165C19.5917 12.3325 18.8807 11.5935 17.9237 11.5935H15.0527V8.7225C15.0527 7.7655 14.3147 7.0545 13.3297 7.0545C12.3457 7.0545 11.6207 7.7655 11.6207 8.7225V11.5935H8.7497C7.7927 11.5935 7.0817 12.3325 7.0817 13.3165Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM6.1797 12.3595C6.1797 12.8515 6.5487 13.2205 7.0687 13.2205H11.5117V17.6645C11.5117 18.1835 11.8677 18.5525 12.3727 18.5525C12.8927 18.5525 13.2617 18.1835 13.2617 17.6645V13.2205H17.7047C18.2247 13.2205 18.5937 12.8515 18.5937 12.3595C18.5937 11.8265 18.2387 11.4575 17.7047 11.4575H13.2617V7.0275C13.2617 6.4945 12.8927 6.1255 12.3727 6.1255C11.8677 6.1255 11.5117 6.5075 11.5117 7.0275V11.4575H7.0687C6.5347 11.4575 6.1797 11.8265 6.1797 12.3595Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM6.4527 12.7423C6.4527 13.4803 6.9867 14.0003 7.7387 14.0003H11.4847V17.7593C11.4847 18.5113 12.0177 19.0453 12.7557 19.0453C13.5077 19.0453 14.0547 18.5113 14.0547 17.7593V14.0003H17.8147C18.5527 14.0003 19.0857 13.4803 19.0857 12.7423C19.0857 11.9763 18.5667 11.4433 17.8147 11.4433H14.0547V7.6973C14.0547 6.9313 13.5077 6.4123 12.7557 6.4123C12.0177 6.4123 11.4847 6.9313 11.4847 7.6973V11.4433H7.7387C6.9727 11.4433 6.4527 11.9763 6.4527 12.7423Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM6.2617 12.5645C6.2617 13.2345 6.7267 13.6855 7.4237 13.6855H11.4437V17.7185C11.4437 18.4025 11.9087 18.8805 12.5777 18.8805C13.2617 18.8805 13.7407 18.4155 13.7407 17.7185V13.6855H17.7737C18.4567 13.6855 18.9357 13.2345 18.9357 12.5645C18.9357 11.8805 18.4567 11.4025 17.7737 11.4025H13.7407V7.3825C13.7407 6.6855 13.2617 6.2065 12.5777 6.2065C11.9087 6.2065 11.4437 6.6855 11.4437 7.3825V11.4025H7.4237C6.7267 11.4025 6.2617 11.8805 6.2617 12.5645Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM6.6037 12.879C6.6037 13.672 7.1777 14.246 7.9847 14.246H11.5257V17.801C11.5257 18.594 12.0997 19.168 12.8927 19.168C13.6997 19.168 14.2867 18.594 14.2867 17.801V14.246H17.8417C18.6347 14.246 19.2087 13.672 19.2087 12.879C19.2087 12.072 18.6347 11.484 17.8417 11.484H14.2867V7.943C14.2867 7.137 13.6997 6.562 12.8927 6.562C12.0997 6.562 11.5257 7.137 11.5257 7.943V11.484H7.9847C7.1637 11.484 6.6037 12.072 6.6037 12.879Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM6.0707 12.0724C6.0707 12.3454 6.3027 12.5784 6.6037 12.5784H11.5797V17.5684C11.5797 17.8554 11.8127 18.1014 12.0857 18.1014C12.4007 18.1014 12.6467 17.8694 12.6467 17.5684V12.5784H17.6227C17.9237 12.5784 18.1567 12.3454 18.1567 12.0724C18.1567 11.7574 17.9377 11.5254 17.6227 11.5254H12.6467V6.5484C12.6467 6.2344 12.4007 6.0024 12.0857 6.0024C11.8127 6.0024 11.5797 6.2484 11.5797 6.5484V11.5254H6.6037C6.2887 11.5254 6.0707 11.7574 6.0707 12.0724Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM6.0017 11.922C6.0017 12.086 6.1797 12.25 6.3577 12.25H11.6207V17.514C11.6207 17.691 11.7847 17.869 11.9497 17.869C12.1547 17.869 12.3187 17.719 12.3187 17.514V12.25H17.5817C17.7597 12.25 17.9237 12.086 17.9237 11.922C17.9237 11.717 17.7737 11.553 17.5817 11.553H12.3187V6.289C12.3187 6.098 12.1547 5.947 11.9497 5.947C11.7847 5.947 11.6207 6.111 11.6207 6.289V11.553H6.3577C6.1527 11.553 6.0017 11.717 6.0017 11.922Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}