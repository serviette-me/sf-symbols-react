import { IconProps } from "../../types"

export default function BSquareIconIcon({
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
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM10.6227 19.5373H15.0527C17.4177 19.5373 19.0997 18.1833 19.0997 16.2693C19.0997 14.5603 18.0467 13.4673 16.2017 13.2343V13.0973C17.6637 12.8923 18.6487 11.8673 18.6487 10.5003C18.6487 8.6813 17.1997 7.5742 14.7927 7.5742H10.6227C8.9277 7.5742 8.0797 8.4492 8.0797 10.1443V16.9673C8.0797 18.6763 8.9137 19.5373 10.6227 19.5373ZM12.1677 12.2223V10.1583H13.3297C14.0957 10.1583 14.5877 10.5683 14.5877 11.1563C14.5877 11.8263 14.1097 12.2223 13.2757 12.2223ZM12.1547 16.7343V14.4653H13.3987C14.2457 14.4653 14.7797 14.9023 14.7797 15.5723C14.7797 16.3243 14.2597 16.7343 13.3297 16.7343Z"
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
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM9.9807 19.1137H14.1777C16.7757 19.1137 18.5257 17.7597 18.5257 15.7367C18.5257 14.0407 17.4457 12.9067 15.6137 12.6737V12.5777C17.0217 12.3047 17.9377 11.2517 17.9377 9.8987C17.9377 8.0527 16.4477 6.8907 14.0687 6.8907H9.9807C8.7497 6.8907 8.0937 7.5467 8.0937 8.7777V17.2267C8.0937 18.4567 8.7367 19.1137 9.9807 19.1137ZM11.1977 11.8667V8.9827H13.1247C14.1917 8.9827 14.8617 9.5297 14.8617 10.3907C14.8617 11.3337 14.1227 11.8667 12.7837 11.8667ZM11.1837 16.9117V13.7397H13.2617C14.5197 13.7397 15.2717 14.3417 15.2717 15.3397C15.2717 16.3927 14.4927 16.9117 12.8927 16.9117Z"
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
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM10.3227 19.3455H14.6427C17.1177 19.3455 18.8267 17.9925 18.8267 16.0235C18.8267 14.3285 17.7597 13.2075 15.9277 12.9745V12.8515C17.3637 12.6195 18.3067 11.5805 18.3067 10.2265C18.3067 8.3945 16.8437 7.2595 14.4517 7.2595H10.3227C8.8457 7.2595 8.0797 8.0255 8.0797 9.5015V17.0895C8.0797 18.5805 8.8317 19.3455 10.3227 19.3455ZM11.7027 12.0585V9.6115H13.2347C14.1367 9.6115 14.7107 10.0765 14.7107 10.8005C14.7107 11.6075 14.1227 12.0585 13.0427 12.0585ZM11.7027 16.8305V14.1365H13.3297C14.3827 14.1365 15.0117 14.6425 15.0117 15.4765C15.0117 16.3655 14.3687 16.8305 13.1247 16.8305Z"
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
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM8.9827 18.4845H12.9887C15.7367 18.4845 17.4727 17.1585 17.4727 15.0255C17.4727 13.3715 16.3787 12.1955 14.6157 11.9625V11.8945C15.9007 11.5935 16.7347 10.5005 16.7347 9.1325C16.7347 7.3005 15.2307 6.0845 12.9887 6.0845H8.9827C8.4087 6.0845 8.0667 6.4255 8.0667 7.0135V17.5415C8.0667 18.1285 8.4087 18.4845 8.9827 18.4845ZM9.7067 11.4845V7.3825H12.6597C14.1917 7.3825 15.0937 8.1345 15.0937 9.4065C15.0937 10.6775 13.9997 11.4845 12.2087 11.4845ZM9.7067 17.1855V12.7145H12.9747C14.7247 12.7145 15.7637 13.5485 15.7637 14.9845C15.7637 16.4605 14.6427 17.1855 12.3047 17.1855Z"
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
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM9.5567 18.8403H13.6307C16.3787 18.8403 18.1697 17.4863 18.1697 15.3813C18.1697 13.6993 17.0627 12.5373 15.2437 12.3183V12.2223C16.6117 11.9223 17.4727 10.8553 17.4727 9.4883C17.4727 7.6293 15.9687 6.4393 13.6037 6.4393H9.5567C8.6267 6.4393 8.1077 6.9593 8.1077 7.9023V17.3773C8.1077 18.3063 8.6267 18.8403 9.5567 18.8403ZM10.5817 11.6343V8.2303H12.9887C14.2457 8.2303 15.0257 8.8593 15.0257 9.8983C15.0257 11.0063 14.1227 11.6343 12.4687 11.6343ZM10.5687 17.0213V13.2613H13.1797C14.6977 13.2613 15.5997 13.9723 15.5997 15.1753C15.5997 16.4203 14.6427 17.0213 12.6187 17.0213Z"
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
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM9.3247 18.6895H13.3167C16.1467 18.6895 17.9647 17.3225 17.9647 15.1755C17.9647 13.5075 16.8437 12.3315 15.0257 12.1135V12.0315C16.3787 11.7035 17.2127 10.6365 17.2127 9.2695C17.2127 7.3965 15.6957 6.1795 13.3437 6.1795H9.3247C8.5727 6.1795 8.1207 6.6305 8.1207 7.4105V17.4725C8.1207 18.2245 8.5727 18.6895 9.3247 18.6895ZM10.2267 11.4975V7.7925H12.9067C14.2867 7.7925 15.1207 8.4905 15.1207 9.6115C15.1207 10.8145 14.1227 11.4975 12.2907 11.4975ZM10.2267 17.0765V13.0015H13.1387C14.8067 13.0015 15.7777 13.7675 15.7777 15.0805C15.7777 16.4475 14.7247 17.0765 12.4547 17.0765Z"
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
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM9.7347 18.963H13.8637C16.5567 18.963 18.3207 17.596 18.3207 15.531C18.3207 13.85 17.2267 12.701 15.4087 12.469V12.373C16.7887 12.086 17.6777 11.033 17.6777 9.666C17.6777 7.807 16.1737 6.631 13.8087 6.631H9.7347C8.6817 6.631 8.1077 7.219 8.1077 8.285V17.309C8.1077 18.375 8.6817 18.963 9.7347 18.963ZM10.8417 11.73V8.559H13.0427C14.2187 8.559 14.9567 9.146 14.9567 10.117C14.9567 11.143 14.1227 11.73 12.6057 11.73ZM10.8417 16.967V13.48H13.2207C14.6287 13.48 15.4627 14.123 15.4627 15.244C15.4627 16.406 14.5747 16.967 12.7427 16.967Z"
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
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM8.5447 18.1974H12.5647C15.1897 18.1974 16.8167 16.9124 16.8167 14.8064C16.8167 13.1664 15.7637 11.9904 14.0817 11.7714V11.7164C15.2717 11.4294 16.0917 10.2954 16.0917 8.9414C16.0917 7.1644 14.6157 5.9204 12.5097 5.9204H8.5447C8.2027 5.9204 8.0117 6.1384 8.0117 6.4944V17.6234C8.0117 17.9784 8.2027 18.1974 8.5447 18.1974ZM9.0367 11.4434V6.8084H12.3187C14.0547 6.8084 15.0527 7.6564 15.0527 9.1194C15.0527 10.4724 13.8357 11.4434 12.0997 11.4434ZM9.0367 17.3084V12.3184H12.7557C14.6157 12.3184 15.7367 13.2614 15.7367 14.8204C15.7367 16.4744 14.5197 17.3084 12.0997 17.3084Z"
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
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM8.3127 18.047H12.3457C14.9157 18.047 16.4887 16.789 16.4887 14.697C16.4887 13.057 15.4357 11.895 13.8087 11.662V11.607C14.9567 11.348 15.7637 10.199 15.7637 8.832C15.7637 7.096 14.3007 5.838 12.2637 5.838H8.3127C8.0937 5.838 7.9707 5.988 7.9707 6.221V17.664C7.9707 17.897 8.0937 18.047 8.3127 18.047ZM8.6817 11.43V6.522H12.1547C13.9997 6.522 15.0257 7.41 15.0257 8.969C15.0257 10.377 13.7537 11.43 12.0447 11.43ZM8.6817 17.363V12.113H12.6467C14.5467 12.113 15.7227 13.111 15.7227 14.738C15.7227 16.475 14.4647 17.363 12.0037 17.363Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}