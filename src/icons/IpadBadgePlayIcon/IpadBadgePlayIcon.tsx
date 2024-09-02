import { IconProps } from "../../types"

export default function IpadBadgePlayIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.98046875 35.259765625"
          className={className}
        >
          <path
            d="              M6.0707 29.4086C5.1957 29.4086 4.8537 29.0116 4.8537 28.2046V6.0706C4.8537 5.2496 5.1957 4.8536 6.0707 4.8536H20.3707C21.2457 4.8536 21.5877 5.2496 21.5877 6.0706V18.3206C22.2167 18.1836 22.8597 18.1156 23.5297 18.1156C24.5407 18.1156 25.5257 18.2796 26.4417 18.5796V5.2906C26.4417 1.9826 24.4587 -0.0004 21.1367 -0.0004H5.3047C1.9827 -0.0004 -0.0003 1.9826 -0.0003 5.2906V28.9706C-0.0003 32.2796 1.9827 34.2616 5.3047 34.2616H16.3657C15.1487 32.9216 14.3007 31.2536 13.9867 29.4086ZM23.5297 35.2596C27.6177 35.2596 30.9807 31.8556 30.9807 27.7946C30.9807 23.7206 27.6177 20.3576 23.5297 20.3576C19.4547 20.3576 16.0777 23.7206 16.0777 27.7946C16.0777 31.8556 19.4547 35.2596 23.5297 35.2596ZM20.9457 30.5566V25.0466C20.9457 24.2266 21.7517 23.8166 22.4357 24.2406L26.8787 27.0156C27.5487 27.4396 27.5487 28.2456 26.9197 28.6286L22.4357 31.3496C21.7517 31.7736 20.9457 31.3766 20.9457 30.5566ZM8.6267 26.0176C8.0937 26.0176 7.6977 26.4006 7.6977 26.9606C7.6977 27.5216 8.0937 27.8906 8.6267 27.8906H13.8357C13.8357 27.2616 13.8907 26.6196 14.0137 26.0176Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.845703125 33.90625"
          className={className}
        >
          <path
            d="              M5.0727 28.9976C4.0467 28.9976 3.5277 28.4646 3.5277 27.5076V5.0176C3.5277 4.0606 4.0467 3.5276 5.0727 3.5276H19.5777C20.6037 3.5276 21.1227 4.0606 21.1227 5.0176V17.5956C21.6157 17.4996 22.1207 17.4586 22.6407 17.4586C23.3377 17.4586 24.0077 17.5546 24.6507 17.7186V4.4566C24.6507 1.7086 22.8867 -0.0004 20.0977 -0.0004H4.5527C1.7497 -0.0004 -0.0003 1.7086 -0.0003 4.4566V28.0686C-0.0003 30.8166 1.7497 32.5256 4.5527 32.5256H15.4907C14.6427 31.5276 14.0277 30.3106 13.7267 28.9976ZM22.6547 33.9066C26.5777 33.9066 29.8457 30.6386 29.8457 26.7016C29.8457 22.7636 26.5917 19.5096 22.6547 19.5096C18.7027 19.5096 15.4497 22.7636 15.4497 26.7016C15.4497 30.6526 18.7027 33.9066 22.6547 33.9066ZM20.2347 29.4626V23.9396C20.2347 23.2426 20.9177 22.9276 21.5057 23.2836L25.9627 25.9906C26.5647 26.3726 26.5917 27.0836 26.0317 27.4116L21.5057 30.1196C20.9177 30.4886 20.2347 30.1606 20.2347 29.4626ZM8.0797 26.1546C7.6427 26.1546 7.3147 26.4686 7.3147 26.9336C7.3147 27.4116 7.6427 27.7126 8.0797 27.7126H13.4667C13.4257 27.1936 13.4257 26.6736 13.4667 26.1546Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.447265625 34.630859375"
          className={className}
        >
          <path
            d="              M5.6057 29.2165C4.6487 29.2165 4.2247 28.7655 4.2247 27.8765V5.5785C4.2247 4.6895 4.6487 4.2245 5.6057 4.2245H20.0017C20.9457 4.2245 21.3687 4.6895 21.3687 5.5785V17.9785C21.9297 17.8695 22.5177 17.8005 23.1057 17.8005C23.9667 17.8005 24.8147 17.9375 25.5937 18.1835V4.8945C25.5937 1.8595 23.7207 0.0005 20.6447 0.0005H4.9497C1.8727 0.0005 -0.0003 1.8595 -0.0003 4.8945V28.5465C-0.0003 31.5955 1.8727 33.4555 4.9497 33.4555H15.9547C14.9027 32.2655 14.1637 30.8165 13.8637 29.2165ZM23.1187 34.6305C27.1247 34.6305 30.4477 31.2815 30.4477 27.2755C30.4477 23.2695 27.1387 19.9605 23.1187 19.9605C19.0997 19.9605 15.7907 23.2835 15.7907 27.2755C15.7907 31.2945 19.0997 34.6305 23.1187 34.6305ZM20.6037 30.0375V24.5275C20.6037 23.7615 21.3557 23.4065 21.9977 23.7895L26.4547 26.5375C27.0837 26.9335 27.0977 27.6995 26.4957 28.0545L21.9977 30.7755C21.3557 31.1715 20.6037 30.8025 20.6037 30.0375ZM8.3677 26.0855C7.8747 26.0855 7.5197 26.4275 7.5197 26.9475C7.5197 27.4805 7.8747 27.8085 8.3677 27.8085H13.6717C13.6447 27.2345 13.6717 26.6465 13.7677 26.0855Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 31.9921875"
          className={className}
        >
          <path
            d="              M3.8967 28.4378C2.4747 28.4378 1.6957 27.6578 1.6957 26.2778V3.8418C1.6957 2.4608 2.4747 1.6948 3.8967 1.6948H18.3747C19.7967 1.6948 20.5767 2.4608 20.5767 3.8418V16.8578C20.8637 16.8168 21.1507 16.8028 21.4377 16.8028C21.7107 16.8028 21.9977 16.8168 22.2717 16.8438V3.5958C22.2717 1.3808 20.8497 -0.0002 18.5667 -0.0002H3.6917C1.4217 -0.0002 -0.0003 1.3808 -0.0003 3.5958V26.5368C-0.0003 28.7518 1.4217 30.1188 3.6917 30.1188H14.6567C14.2867 29.6128 13.9867 29.0388 13.7537 28.4378ZM21.4517 31.9918C25.1427 31.9918 28.2457 28.9158 28.2457 25.1968C28.2457 21.4648 25.1837 18.4028 21.4517 18.4028C17.7327 18.4028 14.6567 21.4788 14.6567 25.1968C14.6567 28.9298 17.7327 31.9918 21.4517 31.9918ZM19.2227 28.1228V22.2438C19.2227 21.7658 19.7147 21.5738 20.1387 21.8198L24.8557 24.6508C25.3067 24.9238 25.3337 25.4708 24.9097 25.7168L20.1387 28.5608C19.7147 28.8068 19.2227 28.6148 19.2227 28.1228ZM7.3277 26.3048C7.0277 26.3048 6.7947 26.5238 6.7947 26.8518C6.7947 27.1658 7.0277 27.3848 7.3277 27.3848H13.3297C13.2347 27.0288 13.1657 26.6738 13.1387 26.3048Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.12109375 33.05859375"
          className={className}
        >
          <path
            d="              M4.4297 28.7518C3.3087 28.7518 2.6797 28.1368 2.6797 27.0708V4.3618C2.6797 3.2948 3.3087 2.6797 4.4297 2.6797H19.0727C20.1937 2.6797 20.8087 3.2948 20.8087 4.3618V17.1448C21.2327 17.0758 21.6427 17.0487 22.0797 17.0487C22.5587 17.0487 23.0367 17.0898 23.4887 17.1858V3.9237C23.4887 1.5587 21.8887 -0.0003 19.4277 -0.0003H4.0607C1.5997 -0.0003 -0.0003 1.5587 -0.0003 3.9237V27.5078C-0.0003 29.8868 1.5997 31.4318 4.0607 31.4318H14.9297C14.3147 30.6528 13.8497 29.7368 13.5767 28.7518ZM22.0937 33.0588C25.9087 33.0588 29.1207 29.8728 29.1207 26.0178C29.1207 22.1618 25.9497 18.9898 22.0937 18.9898C18.2387 18.9898 15.0527 22.1758 15.0527 26.0178C15.0527 29.8868 18.2387 33.0588 22.0937 33.0588ZM19.7697 28.7798V23.2558C19.7697 22.6408 20.3987 22.3668 20.9177 22.6958L25.3887 25.3618C25.9357 25.6898 25.9767 26.3598 25.4567 26.6598L20.9177 29.3398C20.3847 29.6678 19.7697 29.3948 19.7697 28.7798ZM7.7387 26.2368C7.3417 26.2368 7.0547 26.5238 7.0547 26.9338C7.0547 27.3438 7.3417 27.6168 7.7387 27.6168H13.2347C13.1657 27.1658 13.1247 26.7008 13.1247 26.2368Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.7109375 32.580078125"
          className={className}
        >
          <path
            d="              M4.0607 28.6013C2.8847 28.6013 2.2017 27.9453 2.2017 26.8243V3.9923C2.2017 2.8713 2.8847 2.2013 4.0607 2.2013H18.7847C19.9477 2.2013 20.6447 2.8713 20.6447 3.9923V16.8983C21.0137 16.8303 21.3827 16.8023 21.7657 16.8023C22.1207 16.8023 22.4907 16.8303 22.8457 16.8713V3.6233C22.8457 1.4633 21.3277 0.0003 19.0587 0.0003H3.7867C1.5177 0.0003 -0.0003 1.4633 -0.0003 3.6233V27.1933C-0.0003 29.3533 1.5177 30.8023 3.7867 30.8023H14.6157C14.1367 30.1463 13.7537 29.3943 13.4807 28.6013ZM21.7657 32.5803C25.5387 32.5803 28.7107 29.4353 28.7107 25.6343C28.7107 21.8203 25.5797 18.6893 21.7657 18.6893C17.9647 18.6893 14.8207 21.8343 14.8207 25.6343C14.8207 29.4633 17.9647 32.5803 21.7657 32.5803ZM19.5097 28.3963V22.8593C19.5097 22.2853 20.0977 22.0523 20.5897 22.3533L25.0607 24.9923C25.5797 25.3063 25.6207 25.9353 25.1427 26.2223L20.5897 28.9023C20.0977 29.2033 19.5097 28.9703 19.5097 28.3963ZM7.5337 26.2913C7.1777 26.2913 6.9177 26.5373 6.9177 26.9203C6.9177 27.3023 7.1777 27.5623 7.5337 27.5623H13.0977C13.0157 27.1383 12.9477 26.7283 12.9337 26.2913Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.435546875 33.427734375"
          className={className}
        >
          <path
            d="              M4.7027 28.8612C3.6227 28.8612 3.0487 28.2732 3.0487 27.2622V4.6482C3.0487 3.6232 3.6227 3.0492 4.7027 3.0492H19.2907C20.3707 3.0492 20.9457 3.6232 20.9457 4.6482V17.3362C21.3967 17.2542 21.8477 17.2132 22.3267 17.2132C22.8867 17.2132 23.4607 17.2952 23.9937 17.4182V4.1562C23.9937 1.6272 22.3127 0.0002 19.7147 0.0002H4.2657C1.6677 0.0002 -0.0003 1.6272 -0.0003 4.1562V27.7542C-0.0003 30.2832 1.6677 31.8962 4.2657 31.8962H15.1757C14.4517 31.0212 13.9317 29.9822 13.6447 28.8612ZM22.3267 33.4282C26.1957 33.4282 29.4357 30.2012 29.4357 26.3182C29.4357 22.4222 26.2227 19.2092 22.3267 19.2092C18.4437 19.2092 15.2307 22.4222 15.2307 26.3182C15.2307 30.2152 18.4437 33.4282 22.3267 33.4282ZM19.9747 29.0802V23.5432C19.9747 22.9002 20.6177 22.6132 21.1777 22.9412L25.6347 25.6352C26.2087 25.9762 26.2367 26.6742 25.7027 26.9882L21.1777 29.6812C20.6177 30.0102 19.9747 29.7222 19.9747 29.0802ZM7.8887 26.1952C7.4787 26.1952 7.1637 26.4962 7.1637 26.9332C7.1637 27.3712 7.4787 27.6582 7.8887 27.6582H13.3297C13.2757 27.1662 13.2477 26.6872 13.2757 26.1952Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.630859375 31.2265625"
          className={className}
        >
          <path
            d="              M3.6637 28.205C1.9277 28.205 1.0117 27.303 1.0117 25.58V3.65C1.0117 1.928 1.9277 1.025 3.6637 1.025H17.8417C19.5777 1.025 20.4937 1.928 20.4937 3.65V16.83C20.6717 16.803 20.8357 16.789 21.0137 16.789C21.1777 16.789 21.3557 16.803 21.5057 16.803V3.555C21.5057 1.271 20.2207 0 17.9237 0H3.5817C1.2847 0 -0.0003 1.271 -0.0003 3.555V25.676C-0.0003 27.959 1.2847 29.217 3.5817 29.217H14.7107C14.4787 28.902 14.2737 28.561 14.1097 28.205ZM21.0277 31.227C24.6367 31.227 27.6307 28.246 27.6307 24.623C27.6307 21 24.6507 18.02 21.0277 18.02C17.4177 18.02 14.4237 21.014 14.4237 24.623C14.4237 28.246 17.4177 31.227 21.0277 31.227ZM18.8267 27.781V21.451C18.8267 21.096 19.2227 20.932 19.5367 21.123L24.5957 24.199C24.9377 24.418 24.9517 24.855 24.6097 25.047L19.5367 28.109C19.2087 28.301 18.8267 28.15 18.8267 27.781ZM7.0407 26.346C6.8227 26.346 6.6307 26.523 6.6307 26.756C6.6307 26.988 6.8227 27.166 7.0407 27.166H13.6307C13.5347 26.893 13.4527 26.619 13.4117 26.346Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.31640625 30.81640625"
          className={className}
        >
          <path
            d="              M3.5547 28.0819C1.6547 28.0819 0.6697 27.0979 0.6697 25.1969V3.5549C0.6697 1.6539 1.6547 0.6699 3.5547 0.6699H17.5687C19.4687 0.6699 20.4527 1.6539 20.4527 3.5549V16.8029C20.5627 16.7889 20.6857 16.7889 20.7947 16.7889C20.9047 16.7889 21.0137 16.7889 21.1227 16.7889V3.5269C21.1227 1.2169 19.9067 -0.0001 17.5957 -0.0001H3.5137C1.2167 -0.0001 -0.0003 1.2169 -0.0003 3.5269V25.2249C-0.0003 27.5349 1.2167 28.7519 3.5137 28.7519H14.7247C14.5747 28.5329 14.4237 28.3149 14.2867 28.0819ZM20.8087 30.8169C24.3637 30.8169 27.3167 27.8909 27.3167 24.3219C27.3167 20.7399 24.3767 17.8149 20.8087 17.8149C17.2537 17.8149 14.3147 20.7679 14.3147 24.3219C14.3147 27.8909 17.2537 30.8169 20.8087 30.8169ZM18.6207 27.5899V21.0269C18.6207 20.7399 18.9627 20.6039 19.2227 20.7539L24.4587 23.9529C24.7457 24.1449 24.7457 24.5269 24.4587 24.6919L19.2227 27.8629C18.9497 28.0409 18.6207 27.9039 18.6207 27.5899ZM6.9047 26.3459C6.7127 26.3459 6.5487 26.5099 6.5487 26.6879C6.5487 26.8789 6.7127 27.0429 6.9047 27.0429H13.7817C13.6997 26.8109 13.6037 26.5919 13.5487 26.3459Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}