import { IconProps } from "../../types"

export default function AngleIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.50390625 27.99146443362966"
          className={className}
        >
          <path
            d="              M-0.0003 25.5582C-0.0003 26.8842 1.1077 27.9912 2.4337 27.9912H34.0707C35.3967 27.9912 36.5037 26.8842 36.5037 25.5582C36.5037 24.2452 35.3967 23.1382 34.0707 23.1382H23.8847C23.5297 19.0642 21.9707 15.1942 19.4277 11.9952L27.2887 4.1342C28.2327 3.1902 28.2187 1.6592 27.2887 0.7022C26.3317 -0.2268 24.7867 -0.2408 23.8577 0.7022L0.7387 23.8622C0.3007 24.3002 -0.0003 24.9422 -0.0003 25.5582ZM8.2847 23.1382L15.9687 15.4542C17.6637 17.6962 18.7027 20.3352 19.0177 23.1382Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.5234375 25.455334955481078"
          className={className}
        >
          <path
            d="              M-0.0003 23.6919C-0.0003 24.6489 0.8067 25.4549 1.7637 25.4549H31.7597C32.7307 25.4549 33.5237 24.6489 33.5237 23.6919C33.5237 22.7349 32.7307 21.9279 31.7597 21.9279H20.9997C20.6997 17.9629 19.1547 14.2579 16.6657 11.2779L24.9377 3.0059C25.6347 2.3229 25.6207 1.2019 24.9377 0.5179C24.2537 -0.1661 23.1327 -0.1791 22.4497 0.5179L0.5337 22.4479C0.2187 22.7759 -0.0003 23.2409 -0.0003 23.6919ZM6.0157 21.9279L14.1637 13.7799C16.0237 16.0899 17.1857 18.9069 17.4587 21.9279Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.095703125 26.791758817404656"
          className={className}
        >
          <path
            d="              M-0.0003 24.6867C-0.0003 25.8347 0.9567 26.7917 2.1187 26.7917H32.9907C34.1387 26.7917 35.0957 25.8347 35.0957 24.6867C35.0957 23.5237 34.1387 22.5667 32.9907 22.5667H22.5177C22.1897 18.5477 20.6447 14.7607 18.1287 11.6567L26.1817 3.6047C27.0017 2.7707 26.9887 1.4437 26.1817 0.6097C25.3477 -0.1963 24.0077 -0.2103 23.1877 0.6097L0.6427 23.1957C0.2597 23.5787 -0.0003 24.1397 -0.0003 24.6867ZM7.2187 22.5667L15.1207 14.6647C16.8847 16.9477 17.9927 19.6547 18.2797 22.5667Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.326171875 21.888671875"
          className={className}
        >
          <path
            d="              M-0.0003 21.0413C-0.0003 21.5063 0.3967 21.8883 0.8477 21.8883H28.4787C28.9297 21.8883 29.3267 21.5063 29.3267 21.0413C29.3267 20.5903 28.9437 20.2072 28.4787 20.2072H16.6387C16.4607 16.4613 14.9707 13.0703 12.6187 10.4593L21.6427 1.4353C21.9707 1.1073 21.9707 0.5742 21.6427 0.2462C21.3147 -0.0817 20.7817 -0.0817 20.4527 0.2462L0.2457 20.4533C0.0957 20.5903 -0.0003 20.8223 -0.0003 21.0413ZM2.8847 20.2072L11.4157 11.6623C13.4667 13.9593 14.7657 16.9263 14.9437 20.2072Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.623046875 23.82838578517319"
          className={className}
        >
          <path
            d="              M-0.0003 22.5019C-0.0003 23.2269 0.6157 23.8279 1.3397 23.8279H30.2837C31.0077 23.8279 31.6227 23.2269 31.6227 22.5019C31.6227 21.7639 31.0217 21.1619 30.2837 21.1619H19.1407C18.8807 17.2519 17.3497 13.6569 14.9027 10.8269L23.4477 2.2819C23.9667 1.7619 23.9667 0.9139 23.4477 0.3949C22.9277 -0.1251 22.0667 -0.1381 21.5467 0.3949L0.3967 21.5589C0.1637 21.7909 -0.0003 22.1469 -0.0003 22.5019ZM4.5667 21.1619L13.0017 12.7269C14.9707 15.0649 16.2147 17.9769 16.4607 21.1619Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.556640625 22.91748046875"
          className={className}
        >
          <path
            d="              M-0.0003 21.8239C-0.0003 22.4249 0.5057 22.9179 1.0937 22.9179H29.4497C30.0507 22.9179 30.5567 22.4249 30.5567 21.8239C30.5567 21.2219 30.0507 20.7159 29.4497 20.7159H18.1017C17.8687 16.8469 16.3247 13.3059 13.9047 10.5719L22.5997 1.8769C23.0237 1.4529 23.0237 0.7419 22.5997 0.3179C22.1757 -0.1061 21.4787 -0.1061 21.0407 0.3179L0.3147 21.0449C0.1367 21.2359 -0.0003 21.5229 -0.0003 21.8239ZM3.7597 20.7159L12.3457 12.1309C14.3687 14.4679 15.6677 17.4489 15.9007 20.7159Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.443359375 24.53932171885551"
          className={className}
        >
          <path
            d="              M-0.0003 23.0077C-0.0003 23.8417 0.6977 24.5397 1.5177 24.5397H30.9257C31.7457 24.5397 32.4437 23.8417 32.4437 23.0077C32.4437 22.1877 31.7597 21.4907 30.9257 21.4907H19.9477C19.6597 17.5667 18.1287 13.9167 15.6677 11.0177L24.0897 2.5957C24.6777 1.9947 24.6777 1.0377 24.0897 0.4357C23.5017 -0.1383 22.5317 -0.1523 21.9437 0.4357L0.4517 21.9417C0.1917 22.2147 -0.0003 22.6117 -0.0003 23.0077ZM5.1957 21.4907L13.5077 13.1777C15.4217 15.5017 16.6387 18.3737 16.8847 21.4907Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.712890625 20.533491437254877"
          className={className}
        >
          <path
            d="              M-0.0003 20.0273C-0.0003 20.2873 0.2457 20.5333 0.5057 20.5333H27.1937C27.4667 20.5333 27.7127 20.2873 27.7127 20.0273C27.7127 19.7403 27.4807 19.5083 27.1937 19.5083H14.6837C14.5877 15.9673 13.1657 12.7403 10.9097 10.3203L20.3707 0.8593C20.5767 0.6543 20.5767 0.3403 20.3707 0.1483C20.1797 -0.0427 19.8517 -0.0567 19.6597 0.1483L0.1367 19.6853C0.0547 19.7403 -0.0003 19.8773 -0.0003 20.0273ZM1.7367 19.5083L10.1857 11.0453C12.2777 13.2733 13.5767 16.2403 13.6717 19.5083Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.87890625 19.825995101139732"
          className={className}
        >
          <path
            d="              M-0.0003 19.498C-0.0003 19.662 0.1637 19.826 0.3277 19.826H26.5367C26.7147 19.826 26.8787 19.662 26.8787 19.498C26.8787 19.306 26.7287 19.156 26.5367 19.156H13.6857C13.6447 15.697 12.2497 12.566 10.0347 10.256L19.7147 0.562C19.8517 0.426 19.8517 0.221 19.7147 0.097C19.6057 -0.026 19.3867 -0.039 19.2497 0.097L0.0817 19.279C0.0277 19.306 -0.0003 19.389 -0.0003 19.498ZM1.1347 19.156L9.5567 10.734C11.6617 12.922 12.9747 15.889 13.0157 19.156Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}