import { IconProps } from "../../types"

export default function PersonBadgeKeyFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.064453125 29.4560546875"
          className={className}
        >
          <path
            d="              M11.7577 12.3319C14.9847 12.3319 17.4867 9.5699 17.4867 6.1109C17.4867 2.8299 14.9437 -0.0001 11.7577 -0.0001C8.5727 -0.0001 6.0427 2.8299 6.0427 6.1249C6.0427 9.5699 8.5447 12.3319 11.7577 12.3319ZM25.0877 11.5249C22.3267 11.5249 20.1247 13.7539 20.1247 16.4609C20.1247 18.4019 21.1777 20.1109 22.8597 20.9319V27.1519C22.8597 27.4669 22.9957 27.8089 23.2427 28.0409L24.5817 29.2309C24.9097 29.5179 25.4437 29.5589 25.8127 29.1899L27.9587 27.0429C28.3687 26.6329 28.3147 26.0179 27.9457 25.6209L27.1527 24.7739L28.4377 23.4469C28.8207 23.0509 28.8337 22.4359 28.4377 21.9979L27.3167 20.8909C29.0667 19.8929 30.0647 18.3069 30.0647 16.4609C30.0647 13.7539 27.8497 11.5249 25.0877 11.5249ZM25.0877 13.6449C25.8537 13.6449 26.4957 14.2869 26.4957 15.0799C26.4957 15.8049 25.8537 16.4749 25.0877 16.4749C24.3357 16.4749 23.6937 15.8049 23.6937 15.0799C23.6937 14.2869 24.3357 13.6449 25.0877 13.6449ZM2.9937 25.3199H20.2757V22.3259C18.2927 20.6719 17.4177 18.3069 17.5817 15.8589C15.9137 15.1209 13.9587 14.6699 11.7577 14.6699C4.6757 14.6699 -0.0003 19.3729 -0.0003 22.8459C-0.0003 24.3909 1.1207 25.3199 2.9937 25.3199Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.271484375 28.72119140625"
          className={className}
        >
          <path
            d="              M11.6347 12.1265C14.7107 12.1265 17.2267 9.4335 17.2267 6.0015C17.2267 2.6655 14.6977 -0.0005 11.6347 -0.0005C8.5857 -0.0005 6.0427 2.6935 6.0427 6.0155C6.0427 9.4335 8.5587 12.1265 11.6347 12.1265ZM24.6097 11.3205C22.0117 11.3205 19.9477 13.4125 19.9477 15.9685C19.9477 17.8555 21.0137 19.5095 22.6957 20.2485V26.7285C22.6957 26.9745 22.8047 27.2075 22.9957 27.3845L24.2267 28.5605C24.4587 28.7655 24.8277 28.7925 25.0877 28.5335L27.2477 26.3865C27.5217 26.0995 27.4937 25.7035 27.2477 25.4295L26.1677 24.3355L27.7407 22.7635C27.9997 22.5035 28.0137 22.0805 27.7267 21.7795L26.2637 20.3165C28.1777 19.4005 29.2717 17.8285 29.2717 15.9685C29.2717 13.4125 27.1937 11.3205 24.6097 11.3205ZM24.5957 13.3985C25.3617 13.3985 25.9767 14.0275 25.9767 14.7795C25.9767 15.5315 25.3617 16.1605 24.5957 16.1605C23.8577 16.1605 23.2287 15.5315 23.2287 14.7795C23.2287 14.0275 23.8437 13.3985 24.5957 13.3985ZM2.6657 24.9515H20.4807V21.4925C18.6757 20.1385 17.7327 18.0875 17.7457 15.8735C16.0367 15.0525 13.9727 14.5195 11.6347 14.5195C4.5527 14.5195 -0.0003 19.3045 -0.0003 22.8045C-0.0003 24.1445 0.9977 24.9515 2.6657 24.9515Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.6953125 29.11941605548627"
          className={className}
        >
          <path
            d="              M11.7027 12.2499C14.8617 12.2499 17.3637 9.5159 17.3637 6.0699C17.3637 2.7619 14.8337 -0.0001 11.7027 -0.0001C8.5857 -0.0001 6.0427 2.7749 6.0427 6.0839C6.0427 9.5159 8.5587 12.2499 11.7027 12.2499ZM24.8557 11.4429C22.1757 11.4429 20.0427 13.6039 20.0427 16.2419C20.0427 18.1559 21.1097 19.8379 22.7777 20.6169V26.9609C22.7777 27.2479 22.9007 27.5349 23.1187 27.7399L24.4177 28.9299C24.7047 29.1759 25.1567 29.2029 25.4707 28.8889L27.6307 26.7419C27.9727 26.3869 27.9317 25.8809 27.6177 25.5389L26.6877 24.5679L28.1097 23.1329C28.4377 22.8049 28.4517 22.2719 28.0957 21.9019L26.8247 20.6309C28.6427 19.6599 29.6957 18.0879 29.6957 16.2419C29.6957 13.6039 27.5347 11.4429 24.8557 11.4429ZM24.8557 13.5349C25.6207 13.5349 26.2497 14.1779 26.2497 14.9429C26.2497 15.6819 25.6207 16.3379 24.8557 16.3379C24.1037 16.3379 23.4747 15.6819 23.4747 14.9429C23.4747 14.1779 24.1037 13.5349 24.8557 13.5349ZM2.8297 25.1559H20.3707V21.9429C18.4707 20.4399 17.5687 18.2109 17.6637 15.8729C15.9687 15.0939 13.9727 14.6019 11.7027 14.6019C4.6207 14.6019 -0.0003 19.3589 -0.0003 22.8319C-0.0003 24.2809 1.0667 25.1559 2.8297 25.1559Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.91796875 27.8154296875"
          className={className}
        >
          <path
            d="              M11.4567 11.8397C14.4237 11.8397 16.8707 9.2287 16.8707 5.8377C16.8707 2.5567 14.3967 -0.0003 11.4567 -0.0003C8.5317 -0.0003 6.0567 2.5837 6.0567 5.8517C6.0567 9.2287 8.5037 11.8397 11.4567 11.8397ZM23.6527 11.1567C21.2597 11.1567 19.3727 13.0707 19.3727 15.4217C19.3727 17.2537 20.4527 18.8127 22.1347 19.4547V26.1957C22.1347 26.3317 22.1897 26.4687 22.2987 26.5917L23.4337 27.7127C23.5567 27.8497 23.7067 27.8497 23.8577 27.7127L26.0037 25.5797C26.1267 25.4567 26.1267 25.3067 26.0037 25.1697L24.6227 23.7887L26.5097 21.9567C26.6327 21.8477 26.6327 21.6697 26.4957 21.5197L24.6227 19.6597C26.7427 18.8257 27.9177 17.2947 27.9177 15.4217C27.9177 13.0837 26.0177 11.1567 23.6527 11.1567ZM23.6387 13.1247C24.3637 13.1247 24.9517 13.7127 24.9517 14.4377C24.9517 15.1757 24.3637 15.7777 23.6387 15.7777C22.9137 15.7777 22.3127 15.1757 22.3127 14.4377C22.3127 13.7127 22.9007 13.1247 23.6387 13.1247ZM2.1737 24.3637H20.5347V20.4257C18.9357 19.4417 17.8967 17.7457 17.7867 15.8047C16.0507 14.8887 13.9047 14.2867 11.4437 14.2867C4.3887 14.2867 -0.0003 19.1267 -0.0003 22.6407C-0.0003 23.7067 0.8337 24.3637 2.1737 24.3637Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.765625 28.258107814852842"
          className={className}
        >
          <path
            d="              M11.5527 12.0035C14.5467 12.0035 17.0767 9.3375 17.0767 5.9195C17.0767 2.5565 14.5337 0.0005 11.5527 0.0005C8.5857 0.0005 6.0427 2.6115 6.0427 5.9475C6.0427 9.3375 8.5727 12.0035 11.5527 12.0035ZM24.3087 11.1975C21.8067 11.1975 19.8377 13.1935 19.8377 15.6405C19.8377 17.5135 20.9177 19.1135 22.5997 19.8105V26.4685C22.5997 26.6605 22.6817 26.8245 22.8317 26.9745L24.0077 28.1365C24.1717 28.2875 24.4317 28.3145 24.6227 28.1235L26.7967 25.9625C26.9887 25.7715 26.9747 25.4985 26.7967 25.3065L25.5387 24.0485L27.3027 22.3265C27.4807 22.1485 27.4937 21.8615 27.2757 21.6425L25.5797 19.9605C27.6177 19.0725 28.7657 17.5275 28.7657 15.6405C28.7657 13.1935 26.7837 11.1975 24.3087 11.1975ZM24.2947 13.2345C25.0337 13.2345 25.6487 13.8495 25.6487 14.5875C25.6487 15.3535 25.0337 15.9685 24.2947 15.9685C23.5567 15.9685 22.9277 15.3535 22.9277 14.5875C22.9277 13.8495 23.5427 13.2345 24.2947 13.2345ZM2.4477 24.7055H20.6037V20.9725C18.9217 19.8105 17.9237 17.9515 17.8557 15.9005C16.1187 14.9985 13.9867 14.4235 11.5527 14.4235C4.4707 14.4235 -0.0003 19.2635 -0.0003 22.7775C-0.0003 23.9805 0.9157 24.7055 2.4477 24.7055Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.478515625 27.99835198175633"
          className={className}
        >
          <path
            d="              M11.5117 11.9221C14.4517 11.9221 16.9807 9.2971 16.9807 5.8791C16.9807 2.5021 14.4377 0.0001 11.5117 0.0001C8.5857 0.0001 6.0427 2.5571 6.0427 5.9061C6.0427 9.2971 8.5857 11.9221 11.5117 11.9221ZM24.1307 11.1151C21.6977 11.1151 19.7697 13.0701 19.7697 15.4631C19.7697 17.3221 20.8637 18.8941 22.5447 19.5511V26.3181C22.5447 26.4821 22.6267 26.6051 22.7367 26.7421L23.8847 27.8911C24.0217 28.0271 24.2127 28.0411 24.3637 27.8911L26.5367 25.7301C26.6737 25.5801 26.6737 25.3891 26.5367 25.2521L25.1837 23.8981L27.0567 22.0661C27.1937 21.9431 27.1937 21.7381 27.0297 21.5741L25.1977 19.7561C27.3027 18.8941 28.4787 17.3631 28.4787 15.4631C28.4787 13.0701 26.5367 11.1151 24.1307 11.1151ZM24.1177 13.1521C24.8557 13.1521 25.4567 13.7541 25.4567 14.4921C25.4567 15.2581 24.8557 15.8591 24.1177 15.8591C23.3787 15.8591 22.7637 15.2581 22.7637 14.4921C22.7637 13.7541 23.3657 13.1521 24.1177 13.1521ZM2.3377 24.5821H20.6717V20.6721C19.0727 19.6191 18.0337 17.8831 17.9097 15.9001C16.1597 14.9711 13.9997 14.3691 11.5117 14.3691C4.4157 14.3691 -0.0003 19.2361 -0.0003 22.7641C-0.0003 23.8981 0.8747 24.5821 2.3377 24.5821Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.984375 28.46142578125"
          className={className}
        >
          <path
            d="              M11.5937 12.0582C14.6157 12.0582 17.1447 9.3792 17.1447 5.9472C17.1447 2.6112 14.6017 0.0002 11.5937 0.0002C8.5857 0.0002 6.0427 2.6522 6.0427 5.9742C6.0427 9.3792 8.5727 12.0582 11.5937 12.0582ZM24.4317 11.2522C21.8887 11.2522 19.8787 13.2892 19.8787 15.7912C19.8787 17.6642 20.9587 19.2772 22.6407 20.0022V26.5782C22.6407 26.7972 22.7367 26.9882 22.9007 27.1522L24.1037 28.3142C24.3087 28.5062 24.5957 28.5192 24.8277 28.3012L26.9887 26.1402C27.2207 25.9222 27.1937 25.5942 26.9887 25.3612L25.8127 24.1722L27.4937 22.5172C27.7127 22.2992 27.7127 21.9572 27.4667 21.7112L25.8677 20.1112C27.8637 19.2092 28.9847 17.6642 28.9847 15.7912C28.9847 13.2892 26.9607 11.2522 24.4317 11.2522ZM24.4317 13.3032C25.1697 13.3032 25.7847 13.9312 25.7847 14.6702C25.7847 15.4352 25.1697 16.0512 24.4317 16.0512C23.6797 16.0512 23.0647 15.4352 23.0647 14.6702C23.0647 13.9312 23.6657 13.3032 24.4317 13.3032ZM2.5427 24.8142H20.5487V21.2052C18.8267 19.9472 17.8417 18.0192 17.8007 15.8872C16.0777 15.0252 13.9867 14.4652 11.5937 14.4652C4.4977 14.4652 -0.0003 19.2772 -0.0003 22.7912C-0.0003 24.0492 0.9567 24.8142 2.5427 24.8142Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.1796875 27.58642578125"
          className={className}
        >
          <path
            d="              M11.4027 11.73C14.3827 11.73 16.7207 9.146 16.7207 5.797C16.7207 2.625 14.3417 0 11.4027 0C8.4497 0 6.0707 2.639 6.0707 5.811C6.0707 9.146 8.4087 11.73 11.4027 11.73ZM23.0097 11.211C20.6857 11.211 18.8397 13.084 18.8397 15.367C18.8397 17.186 19.9067 18.73 21.5747 19.332V26.045C21.5747 26.154 21.6157 26.291 21.7247 26.414L22.8317 27.494C22.9547 27.617 23.0507 27.617 23.1737 27.494L25.3067 25.389C25.4027 25.279 25.4027 25.184 25.3067 25.074L23.8847 23.666L25.7987 21.807C25.8947 21.725 25.8947 21.588 25.7847 21.465L23.8577 19.551C25.9907 18.744 27.1797 17.227 27.1797 15.367C27.1797 13.098 25.3207 11.211 23.0097 11.211ZM23.0097 13.111C23.7207 13.111 24.2817 13.672 24.2817 14.396C24.2817 15.094 23.7207 15.668 23.0097 15.668C22.2987 15.668 21.7247 15.094 21.7247 14.396C21.7247 13.672 22.2847 13.111 23.0097 13.111ZM1.9687 24.09H20.3577V20.111C18.7437 19.209 17.7187 17.555 17.6227 15.668C15.9007 14.766 13.7947 14.191 11.3617 14.191C4.3617 14.191 -0.0003 19.004 -0.0003 22.49C-0.0003 23.461 0.7797 24.09 1.9687 24.09Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.796875 27.46337890625"
          className={className}
        >
          <path
            d="              M11.3617 11.662C14.3687 11.662 16.6527 9.105 16.6527 5.77C16.6527 2.652 14.3147 0 11.3617 0C8.4087 0 6.0837 2.652 6.0837 5.77C6.0837 9.105 8.3537 11.662 11.3617 11.662ZM22.6817 11.238C20.3847 11.238 18.5667 13.084 18.5667 15.326C18.5667 17.131 19.6327 18.662 21.2867 19.25V25.949C21.2867 26.045 21.3277 26.182 21.4377 26.305L22.5317 27.371C22.6547 27.494 22.7227 27.494 22.8187 27.371L24.9517 25.279C25.0337 25.184 25.0337 25.115 24.9517 25.02L23.5017 23.584L25.4437 21.711C25.5117 21.643 25.5117 21.52 25.4157 21.424L23.4607 19.482C25.6077 18.676 26.7967 17.186 26.7967 15.326C26.7967 13.098 24.9647 11.238 22.6817 11.238ZM22.6817 13.084C23.3787 13.084 23.9397 13.645 23.9397 14.355C23.9397 15.039 23.3787 15.613 22.6817 15.613C21.9847 15.613 21.4097 15.039 21.4097 14.355C21.4097 13.645 21.9707 13.084 22.6817 13.084ZM1.8597 23.939H20.2617V19.934C18.6487 19.072 17.6227 17.459 17.5407 15.586C15.8317 14.697 13.7267 14.123 11.3207 14.123C4.3477 14.123 -0.0003 18.922 -0.0003 22.395C-0.0003 23.311 0.7517 23.939 1.8597 23.939Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}