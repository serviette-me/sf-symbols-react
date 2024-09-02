import { IconProps } from "../../types"

export default function PersonBustIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.25 31.80078125"
          className={className}
        >
          <path
            d="              M13.1387 10.3495C15.8727 10.3495 17.9927 8.0525 17.9927 5.1405C17.9927 2.3375 15.8187 -0.0005 13.1387 -0.0005C10.4457 -0.0005 8.2577 2.3375 8.2717 5.1545C8.2987 8.0525 10.4047 10.3495 13.1387 10.3495ZM13.1387 7.2595C12.1547 7.2595 11.4027 6.5075 11.4027 5.1265C11.3887 3.8965 12.1957 3.1035 13.1387 3.1035C14.0957 3.1035 14.8617 3.8965 14.8617 5.1405C14.8617 6.4945 14.1227 7.2595 13.1387 7.2595ZM6.4527 20.0835H19.8247C21.3827 20.0835 22.4627 19.2495 22.4627 17.6505C22.4627 14.2325 18.3747 11.2925 13.1387 11.2925C7.8887 11.2925 3.8007 14.2325 3.8007 17.6505C3.8007 19.2495 4.8807 20.0835 6.4527 20.0835ZM7.4787 16.9665C7.4237 16.9665 7.3967 16.9255 7.3967 16.8845C7.4237 15.9825 9.5297 14.3825 13.1387 14.3825C16.7347 14.3825 18.8397 15.9825 18.8677 16.8845C18.8807 16.9255 18.8537 16.9665 18.7847 16.9665ZM2.1057 31.8005H24.1447C25.3067 31.8005 26.2497 30.8575 26.2497 29.6955C26.2497 28.5335 25.3067 27.5895 24.1447 27.5895H23.2967V25.8125C23.2967 23.7485 21.8887 22.3395 19.8247 22.3395H6.4397C4.3617 22.3395 2.9667 23.7485 2.9667 25.8125V27.5895H2.1057C0.9437 27.5895 -0.0003 28.5335 -0.0003 29.6955C-0.0003 30.8575 0.9437 31.8005 2.1057 31.8005ZM10.5957 28.5875C9.7617 28.5875 9.0777 27.9175 9.0777 27.0565C9.0777 26.2225 9.7617 25.5525 10.5957 25.5525H15.6547C16.5017 25.5525 17.1587 26.2225 17.1587 27.0565C17.1587 27.9175 16.5017 28.5875 15.6547 28.5875Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.15625 30.556640625"
          className={className}
        >
          <path
            d="              M12.5777 10.1306C15.2437 10.1306 17.3227 7.8746 17.3227 5.0176C17.3227 2.2556 15.2167 -0.0004 12.5777 -0.0004C9.9397 -0.0004 7.8207 2.2556 7.8337 5.0316C7.8477 7.8886 9.9117 10.1306 12.5777 10.1306ZM12.5777 7.6156C11.3477 7.6156 10.4177 6.6036 10.4177 5.0176C10.4047 3.5406 11.3617 2.5156 12.5777 2.5156C13.7947 2.5156 14.7387 3.5406 14.7387 5.0176C14.7387 6.5896 13.8227 7.6156 12.5777 7.6156ZM5.4547 19.9606H19.6877C21.0407 19.9606 21.9027 19.2086 21.9027 17.8826C21.9027 14.7656 18.0877 11.2656 12.5777 11.2656C7.0547 11.2656 3.2407 14.7656 3.2407 17.8826C3.2407 19.2086 4.1017 19.9606 5.4547 19.9606ZM6.3027 17.4316C6.1247 17.4316 6.0567 17.3636 6.0707 17.2406C6.2207 15.9826 8.5317 13.7816 12.5777 13.7816C16.6117 13.7816 18.9357 15.9826 19.0857 17.2406C19.0997 17.3636 19.0177 17.4316 18.8537 17.4316ZM1.5997 30.5566H23.5427C24.4317 30.5566 25.1567 29.8316 25.1567 28.9436C25.1567 28.0686 24.4317 27.3436 23.5427 27.3436H22.6957V24.8556C22.6957 23.1196 21.6567 22.0116 19.8517 22.0116H5.3047C3.4997 22.0116 2.4607 23.1196 2.4607 24.8556V27.3436H1.5997C0.7247 27.3436 -0.0003 28.0686 -0.0003 28.9436C-0.0003 29.8316 0.7247 30.5566 1.5997 30.5566ZM9.9667 27.4536C9.3247 27.4536 8.8047 26.9476 8.8047 26.2906C8.8047 25.6346 9.3247 25.1286 9.9667 25.1286H15.1897C15.8457 25.1286 16.3517 25.6346 16.3517 26.2906C16.3517 26.9476 15.8457 27.4536 15.1897 27.4536Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.73046875 31.212890625"
          className={className}
        >
          <path
            d="              M12.8787 10.2541C15.5727 10.2541 17.6777 7.9711 17.6777 5.0861C17.6777 2.2971 15.5317 0.0001 12.8787 0.0001C10.2127 0.0001 8.0527 2.3101 8.0667 5.1001C8.0797 7.9841 10.1717 10.2541 12.8787 10.2541ZM12.8787 7.4241C11.7717 7.4241 10.9377 6.5491 10.9377 5.0861C10.9237 3.7321 11.7987 2.8161 12.8787 2.8161C13.9587 2.8161 14.8067 3.7321 14.8067 5.0861C14.8067 6.5491 13.9867 7.4241 12.8787 7.4241ZM5.9747 20.0291H19.7557C21.2187 20.0291 22.2027 19.2361 22.2027 17.7601C22.2027 14.4781 18.2387 11.2791 12.8657 11.2791C7.4927 11.2791 3.5407 14.4781 3.5407 17.7601C3.5407 19.2361 4.5117 20.0291 5.9747 20.0291ZM6.9177 17.1851C6.8087 17.1851 6.7677 17.1311 6.7677 17.0491C6.8497 15.9961 9.0647 14.0961 12.8657 14.0961C16.6797 14.0961 18.8807 15.9961 18.9767 17.0491C18.9767 17.1311 18.9357 17.1851 18.8127 17.1851ZM1.8727 31.2131H23.8707C24.8967 31.2131 25.7307 30.3791 25.7307 29.3401C25.7307 28.3141 24.8967 27.4801 23.8707 27.4801H23.0097V25.3611C23.0097 23.4471 21.7797 22.1891 19.8377 22.1891H5.8927C3.9517 22.1891 2.7207 23.4471 2.7207 25.3611V27.4801H1.8727C0.8337 27.4801 -0.0003 28.3141 -0.0003 29.3401C-0.0003 30.3791 0.8337 31.2131 1.8727 31.2131ZM10.2947 28.0551C9.5567 28.0551 8.9547 27.4671 8.9547 26.7011C8.9547 25.9491 9.5567 25.3611 10.2947 25.3611H15.4357C16.2017 25.3611 16.7757 25.9491 16.7757 26.7011C16.7757 27.4671 16.2017 28.0551 15.4357 28.0551Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.310546875 28.423828125"
          className={className}
        >
          <path
            d="              M11.6487 9.7342C14.1777 9.7342 16.1597 7.5742 16.1597 4.8122C16.1597 2.1462 14.1507 0.0002 11.6487 0.0002C9.1327 0.0002 7.1367 2.1602 7.1507 4.8262C7.1637 7.5742 9.1187 9.7342 11.6487 9.7342ZM11.6487 8.2172C9.9807 8.2172 8.7367 6.7812 8.7367 4.8262C8.7367 2.9532 9.9937 1.5172 11.6487 1.5172C13.2887 1.5172 14.5747 2.9532 14.5747 4.8122C14.5747 6.7812 13.3167 8.2172 11.6487 8.2172ZM4.2247 19.5372H19.0447C20.1937 19.5372 20.8227 18.9632 20.8227 17.9512C20.8227 15.1622 17.3227 11.1832 11.6347 11.1832C5.9477 11.1832 2.4607 15.1622 2.4607 17.9512C2.4607 18.9632 3.0767 19.5372 4.2247 19.5372ZM4.6617 18.0332C4.1837 18.0332 4.0337 17.9242 4.0607 17.6092C4.2247 15.7092 6.9317 12.6872 11.6347 12.6872C16.3377 12.6872 19.0587 15.7092 19.2227 17.6092C19.2497 17.9242 19.0857 18.0332 18.6077 18.0332ZM0.8477 28.4242H22.4627C22.9277 28.4242 23.3107 28.0412 23.3107 27.5762C23.3107 27.1112 22.9277 26.7282 22.4627 26.7282H21.6287V22.9822C21.6287 21.8062 21.0277 21.1372 19.7837 21.1372H3.5277C2.2837 21.1372 1.6817 21.8062 1.6817 22.9822V26.7282H0.8477C0.3827 26.7282 -0.0003 27.1112 -0.0003 27.5762C-0.0003 28.0412 0.3827 28.4242 0.8477 28.4242ZM8.7637 25.5392C8.3537 25.5392 8.0527 25.2382 8.0527 24.8282C8.0527 24.4182 8.3537 24.1312 8.7637 24.1312H14.5607C14.9707 24.1312 15.2717 24.4182 15.2717 24.8282C15.2717 25.2382 14.9707 25.5392 14.5607 25.5392Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.4453125 29.763671875"
          className={className}
        >
          <path
            d="              M12.2227 9.9938C14.8477 9.9938 16.8847 7.7658 16.8847 4.9358C16.8847 2.2008 14.8207 -0.0002 12.2227 -0.0002C9.6117 -0.0002 7.5467 2.2148 7.5467 4.9628C7.5607 7.7798 9.5977 9.9938 12.2227 9.9938ZM12.2227 7.8618C10.8277 7.8618 9.7887 6.6718 9.7887 4.9628C9.7887 3.3218 10.8277 2.1468 12.2227 2.1468C13.6037 2.1468 14.6567 3.3218 14.6567 4.9358C14.6567 6.6578 13.6177 7.8618 12.2227 7.8618ZM4.8267 19.8788H19.6057C20.8227 19.8788 21.5467 19.1818 21.5467 18.0328C21.5467 15.1208 17.9097 11.2518 12.2087 11.2518C6.5217 11.2518 2.8847 15.1208 2.8847 18.0328C2.8847 19.1818 3.6097 19.8788 4.8267 19.8788ZM5.5507 17.7328C5.3047 17.7328 5.1957 17.6508 5.2227 17.4728C5.4417 15.9958 7.8887 13.3848 12.2087 13.3848C16.5427 13.3848 18.9907 15.9958 19.2087 17.4728C19.2367 17.6508 19.1267 17.7328 18.8807 17.7328ZM1.2847 29.7638H23.1597C23.8707 29.7638 24.4457 29.1758 24.4457 28.4788C24.4457 27.7678 23.8707 27.1938 23.1597 27.1938H22.3127V24.2538C22.3127 22.7088 21.5197 21.8208 19.8787 21.8208H4.5667C2.9397 21.8208 2.1327 22.7088 2.1327 24.2538V27.1938H1.2847C0.5747 27.1938 -0.0003 27.7678 -0.0003 28.4788C-0.0003 29.1758 0.5747 29.7638 1.2847 29.7638ZM9.5567 26.7418C9.0367 26.7418 8.6407 26.3318 8.6407 25.7988C8.6407 25.2658 9.0367 24.8688 9.5567 24.8688H14.9027C15.4357 24.8688 15.8187 25.2658 15.8187 25.7988C15.8187 26.3318 15.4357 26.7418 14.9027 26.7418Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.048828125 29.298828125"
          className={className}
        >
          <path
            d="              M12.0177 9.9117C14.6157 9.9117 16.6527 7.6977 16.6527 4.8807C16.6527 2.1597 14.6017 -0.0003 12.0177 -0.0003C9.4337 -0.0003 7.3827 2.1737 7.3967 4.9087C7.3967 7.7107 9.4197 9.9117 12.0177 9.9117ZM12.0177 7.9847C10.5277 7.9847 9.4337 6.6997 9.4337 4.9087C9.4337 3.1857 10.5407 1.9277 12.0177 1.9277C13.4937 1.9277 14.6157 3.1857 14.6157 4.8807C14.6157 6.6857 13.5077 7.9847 12.0177 7.9847ZM4.4707 19.8247H19.5647C20.6997 19.8247 21.3557 19.1677 21.3557 18.1157C21.3557 15.3127 17.8007 11.2387 12.0177 11.2387C6.2207 11.2387 2.6797 15.3127 2.6797 18.1157C2.6797 19.1677 3.3227 19.8247 4.4707 19.8247ZM5.1267 17.8967C4.8397 17.8967 4.7167 17.8007 4.7437 17.5957C5.0037 15.9827 7.5337 13.1657 12.0177 13.1657C16.4887 13.1657 19.0317 15.9827 19.2907 17.5957C19.3187 17.8007 19.1817 17.8967 18.9087 17.8967ZM1.0937 29.2987H22.9547C23.5567 29.2987 24.0487 28.8067 24.0487 28.2047C24.0487 27.6037 23.5567 27.0977 22.9547 27.0977H22.1077V23.9117C22.1077 22.4767 21.4377 21.6977 19.8927 21.6977H4.1567C2.6247 21.6977 1.9417 22.4767 1.9417 23.9117V27.0977H1.0937C0.4927 27.0977 -0.0003 27.6037 -0.0003 28.2047C-0.0003 28.8067 0.4927 29.2987 1.0937 29.2987ZM9.3377 26.3317C8.8727 26.3317 8.5447 25.9767 8.5447 25.5117C8.5447 25.0607 8.8727 24.7187 9.3377 24.7187H14.7387C15.1897 24.7187 15.5317 25.0607 15.5317 25.5117C15.5317 25.9767 15.1897 26.3317 14.7387 26.3317Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.74609375 30.091796875"
          className={className}
        >
          <path
            d="              M12.3727 10.0485C15.0117 10.0485 17.0767 7.8065 17.0767 4.9625C17.0767 2.2145 14.9847 -0.0005 12.3727 -0.0005C9.7477 -0.0005 7.6697 2.2285 7.6697 4.9905C7.6837 7.8205 9.7347 10.0485 12.3727 10.0485ZM12.3727 7.7515C11.0467 7.7515 10.0627 6.6305 10.0627 4.9765C10.0487 3.4045 11.0607 2.2965 12.3727 2.2965C13.6857 2.2965 14.6977 3.4045 14.6977 4.9625C14.6977 6.6175 13.6997 7.7515 12.3727 7.7515ZM5.0997 19.9065H19.6467C20.9177 19.9065 21.7107 19.1955 21.7107 17.9645C21.7107 14.9705 17.9927 11.2515 12.3727 11.2515C6.7537 11.2515 3.0347 14.9705 3.0347 17.9645C3.0347 19.1955 3.8147 19.9065 5.0997 19.9065ZM5.8657 17.5955C5.6597 17.5955 5.5647 17.5135 5.5917 17.3635C5.7697 15.9825 8.1757 13.5485 12.3727 13.5485C16.5707 13.5485 18.9627 15.9825 19.1547 17.3635C19.1677 17.5135 19.0857 17.5955 18.8677 17.5955ZM1.4217 30.0915H23.3377C24.1177 30.0915 24.7457 29.4495 24.7457 28.6695C24.7457 27.8905 24.1177 27.2485 23.3377 27.2485H22.4767V24.5135C22.4767 22.8735 21.5747 21.9025 19.8657 21.9025H4.8807C3.1717 21.9025 2.2697 22.8735 2.2697 24.5135V27.2485H1.4217C0.6427 27.2485 -0.0003 27.8905 -0.0003 28.6695C-0.0003 29.4495 0.6427 30.0915 1.4217 30.0915ZM9.7347 27.0425C9.1597 27.0425 8.7087 26.5915 8.7087 26.0035C8.7087 25.4295 9.1597 24.9785 9.7347 24.9785H15.0257C15.6137 24.9785 16.0507 25.4295 16.0507 26.0035C16.0507 26.5915 15.6137 27.0425 15.0257 27.0425Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.326171875 27.248046875"
          className={className}
        >
          <path
            d="              M11.1697 9.4743C13.6037 9.4883 15.5037 7.3833 15.5037 4.7033C15.5037 2.1333 13.5487 0.0003 11.1697 0.0003C8.7497 0.0003 6.8087 2.1333 6.8357 4.7033C6.8637 7.3833 8.7227 9.4743 11.1697 9.4743ZM11.1697 8.5173C9.2557 8.5173 7.8207 6.9043 7.8207 4.7033C7.8207 2.6383 9.2837 0.9573 11.1697 0.9573C13.0297 0.9573 14.5197 2.6383 14.5197 4.7033C14.5197 6.8903 13.0707 8.5173 11.1697 8.5173ZM3.9097 19.1543H18.3617C19.5237 19.1543 20.1387 18.6893 20.1387 17.7183C20.1387 14.9573 16.6937 11.0883 11.1427 11.0883C5.5917 11.0883 2.1597 14.9573 2.1597 17.7183C2.1597 18.6893 2.7477 19.1543 3.9097 19.1543ZM4.0607 18.1973C3.3227 18.1973 3.1447 18.0743 3.1447 17.6093C3.1997 15.3123 6.1387 12.0453 11.1427 12.0453C16.1467 12.0453 19.0857 15.3123 19.1407 17.6093C19.1547 18.0743 18.9627 18.1973 18.2247 18.1973ZM0.5057 27.2483H21.8207C22.0937 27.2483 22.3267 27.0153 22.3267 26.7283C22.3267 26.4553 22.0937 26.2223 21.8207 26.2223H20.9997V21.7383C20.9997 20.9043 20.4937 20.3713 19.6327 20.3713H2.6937C1.8317 20.3713 1.3397 20.9043 1.3397 21.7383V26.2223H0.5057C0.2327 26.2223 -0.0003 26.4553 -0.0003 26.7283C-0.0003 27.0153 0.2327 27.2483 0.5057 27.2483ZM7.9977 24.5003C7.6697 24.5003 7.4237 24.2403 7.4237 23.9123C7.4237 23.5843 7.6697 23.3243 7.9977 23.3243H14.3417C14.6697 23.3243 14.9297 23.5843 14.9297 23.9123C14.9297 24.2403 14.6697 24.5003 14.3417 24.5003Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.8203125 26.646484375"
          className={className}
        >
          <path
            d="              M10.9237 9.3515C13.3027 9.3655 15.1757 7.2875 15.1757 4.6485C15.1757 2.1195 13.2347 -0.0005 10.9237 -0.0005C8.5587 -0.0005 6.6307 2.1195 6.6717 4.6485C6.6997 7.2875 8.5177 9.3515 10.9237 9.3515ZM10.9237 8.6675C8.8867 8.6675 7.3417 6.9585 7.3417 4.6485C7.3417 2.4745 8.9277 0.6835 10.9237 0.6835C12.8787 0.6835 14.5057 2.4745 14.5057 4.6485C14.5057 6.9585 12.9337 8.6675 10.9237 8.6675ZM3.7597 18.9625H18.0197C19.1817 18.9625 19.7837 18.5395 19.7837 17.6095C19.7837 14.8475 16.3657 11.0465 10.8827 11.0465C5.4137 11.0465 2.0097 14.8475 2.0097 17.6095C2.0097 18.5395 2.5837 18.9625 3.7597 18.9625ZM3.7457 18.2795C2.8847 18.2795 2.6797 18.1425 2.6797 17.6095C2.6797 15.1215 5.7287 11.7305 10.8827 11.7305C16.0507 11.7305 19.1137 15.1215 19.0997 17.6095C19.0997 18.1425 18.8947 18.2795 18.0337 18.2795ZM0.3277 26.6465H21.4927C21.6697 26.6465 21.8207 26.4825 21.8207 26.3045C21.8207 26.1265 21.6697 25.9765 21.4927 25.9765H20.6717V21.1095C20.6717 20.4395 20.2207 19.9885 19.5507 19.9885H2.2697C1.5997 19.9885 1.1487 20.4395 1.1487 21.1095V25.9765H0.3277C0.1507 25.9765 -0.0003 26.1265 -0.0003 26.3045C-0.0003 26.4825 0.1507 26.6465 0.3277 26.6465ZM7.6157 23.9535C7.3147 23.9535 7.0957 23.7345 7.0957 23.4335C7.0957 23.1465 7.3147 22.9275 7.6157 22.9275H14.2327C14.5197 22.9275 14.7517 23.1465 14.7517 23.4335C14.7517 23.7345 14.5197 23.9535 14.2327 23.9535Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}