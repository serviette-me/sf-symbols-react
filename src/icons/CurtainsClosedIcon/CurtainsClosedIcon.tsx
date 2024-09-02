import { IconProps } from "../../types"

export default function CurtainsClosedIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.828125 31.74609375"
          className={className}
        >
          <path
            d="              M7.7247 31.7457H16.6527C17.6777 31.7457 18.3617 31.0487 18.3617 30.0237V5.8927H20.4667V30.0237C20.4667 31.0487 21.1507 31.7457 22.1757 31.7457H31.1037C32.1427 31.7457 32.8267 31.0487 32.8267 30.0237V5.8927H33.6877C34.2347 6.3437 34.9317 6.6177 35.6977 6.6177C37.4197 6.6177 38.8277 5.1957 38.8277 3.4587C38.8277 1.7367 37.4197 0.3277 35.6977 0.3277C34.9317 0.3277 34.2477 0.6017 33.7017 1.0387H32.7167C32.4707 0.3967 31.8967 -0.0003 31.1307 -0.0003H22.1757C21.4097 -0.0003 20.8227 0.3967 20.5767 1.0387H18.2517C18.0057 0.3967 17.4317 -0.0003 16.6657 -0.0003H7.7247C6.9457 -0.0003 6.3577 0.3967 6.1247 1.0387H5.1267C4.5937 0.6017 3.8967 0.3277 3.1587 0.3277C1.4217 0.3277 -0.0003 1.7367 -0.0003 3.4587C-0.0003 5.1957 1.4217 6.6177 3.1587 6.6177C3.9097 6.6177 4.6077 6.3437 5.1407 5.8927H6.0017V30.0237C6.0017 31.0487 6.6997 31.7457 7.7247 31.7457Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.654296875 30.337890625"
          className={className}
        >
          <path
            d="              M6.8767 30.3377H15.9827C16.7757 30.3377 17.3357 29.7907 17.3357 28.9847V4.6617H19.3187V28.9847C19.3187 29.7907 19.8657 30.3377 20.6587 30.3377H29.7777C30.5707 30.3377 31.1177 29.7907 31.1177 28.9847V4.6617H32.1287C32.5797 5.1957 33.2637 5.5367 34.0157 5.5367C35.4647 5.5367 36.6547 4.3477 36.6547 2.8987C36.6547 1.4487 35.4647 0.2597 34.0157 0.2597C33.2637 0.2597 32.5797 0.6147 32.1287 1.1347H31.1037C31.0217 0.4507 30.4887 -0.0003 29.7777 -0.0003H20.6587C19.9477 -0.0003 19.4277 0.4507 19.3317 1.1347H17.3227C17.2267 0.4507 16.7067 -0.0003 15.9957 -0.0003H6.8767C6.1527 -0.0003 5.6327 0.4507 5.5367 1.1347H4.5257C4.0747 0.6147 3.3907 0.2597 2.6387 0.2597C1.1897 0.2597 -0.0003 1.4487 -0.0003 2.8987C-0.0003 4.3477 1.1897 5.5367 2.6387 5.5367C3.3907 5.5367 4.0877 5.1957 4.5257 4.6617H5.5237V28.9847C5.5237 29.7907 6.0837 30.3377 6.8767 30.3377Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.802734375 31.08984375"
          className={className}
        >
          <path
            d="              M7.3277 31.0895H16.3377C17.2537 31.0895 17.8827 30.4605 17.8827 29.5445V5.3185H19.9197V29.5445C19.9197 30.4605 20.5487 31.0895 21.4647 31.0895H30.4747C31.3907 31.0895 32.0197 30.4605 32.0197 29.5445V5.3185H32.9497C33.4547 5.8105 34.1527 6.1115 34.9047 6.1115C36.4907 6.1115 37.8027 4.7985 37.8027 3.1995C37.8027 1.6135 36.4907 0.3005 34.9047 0.3005C34.1527 0.3005 33.4687 0.6155 32.9627 1.0935H31.9647C31.7867 0.4235 31.2407 -0.0005 30.4887 -0.0005H21.4647C20.7127 -0.0005 20.1527 0.4235 19.9747 1.0935H17.8277C17.6507 0.4235 17.0897 -0.0005 16.3517 -0.0005H7.3277C6.5627 -0.0005 6.0157 0.4235 5.8377 1.0935H4.8397C4.3477 0.6155 3.6507 0.3005 2.9117 0.3005C1.3127 0.3005 -0.0003 1.6135 -0.0003 3.1995C-0.0003 4.7985 1.3127 6.1115 2.9117 6.1115C3.6637 6.1115 4.3617 5.8105 4.8537 5.3185H5.7837V29.5445C5.7837 30.4605 6.3987 31.0895 7.3277 31.0895Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.044921875 28.451171875"
          className={className}
        >
          <path
            d="              M5.4827 28.4516H14.8617C15.3677 28.4516 15.7227 28.0816 15.7227 27.5486V2.8706H17.3087V27.5486C17.3087 28.0816 17.6777 28.4516 18.1697 28.4516H27.5487C28.0547 28.4516 28.4237 28.0816 28.4237 27.5486V2.8706H29.6137C29.9007 3.4586 30.5157 3.8556 31.1997 3.8556C32.2247 3.8556 33.0447 3.0356 33.0447 2.0236C33.0447 1.0116 32.2247 0.1916 31.1997 0.1916C30.5157 0.1916 29.9007 0.6016 29.6137 1.1756H28.4237V0.9026C28.4237 0.3686 28.0547 -0.0004 27.5487 -0.0004H18.1697C17.6777 -0.0004 17.3087 0.3686 17.3087 0.9026V1.1756H15.7227V0.9026C15.7227 0.3686 15.3677 -0.0004 14.8617 -0.0004H5.4827C4.9767 -0.0004 4.6207 0.3686 4.6207 0.9026V1.1756H3.4317C3.1447 0.6016 2.5297 0.1916 1.8187 0.1916C0.8207 0.1916 -0.0003 1.0116 -0.0003 2.0236C-0.0003 3.0356 0.8207 3.8556 1.8187 3.8556C2.5297 3.8556 3.1447 3.4586 3.4317 2.8706H4.6207V27.5486C4.6207 28.0816 4.9767 28.4516 5.4827 28.4516Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.259765625 29.44921875"
          className={className}
        >
          <path
            d="              M6.3297 29.4496H15.5587C16.2147 29.4496 16.6657 28.9846 16.6657 28.3286V3.8826H18.5797V28.3286C18.5797 28.9846 19.0447 29.4496 19.6877 29.4496H28.9157C29.5727 29.4496 30.0237 28.9846 30.0237 28.3286V3.8826H31.1177C31.5137 4.4566 32.1977 4.8396 32.9497 4.8396C34.2207 4.8396 35.2597 3.8006 35.2597 2.5426C35.2597 1.2716 34.2207 0.2326 32.9497 0.2326C32.1977 0.2326 31.5137 0.6286 31.1177 1.2036H30.0237V1.1216C30.0237 0.4646 29.5727 -0.0004 28.9157 -0.0004H19.6877C19.0447 -0.0004 18.5797 0.4646 18.5797 1.1216V1.2036H16.6657V1.1216C16.6657 0.4646 16.2147 -0.0004 15.5727 -0.0004H6.3297C5.6877 -0.0004 5.2227 0.4646 5.2227 1.1216V1.2036H4.1287C3.7457 0.6286 3.0627 0.2326 2.3107 0.2326C1.0387 0.2326 -0.0003 1.2716 -0.0003 2.5426C-0.0003 3.8006 1.0387 4.8396 2.3107 4.8396C3.0627 4.8396 3.7457 4.4566 4.1287 3.8826H5.2227V28.3286C5.2227 28.9846 5.6877 29.4496 6.3297 29.4496Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.466796875 28.943359375"
          className={className}
        >
          <path
            d="              M6.0297 28.9435H15.3267C15.8867 28.9435 16.2967 28.5335 16.2967 27.9595V3.4455H18.1697V27.9595C18.1697 28.5335 18.5797 28.9435 19.1407 28.9435H28.4377C28.9977 28.9435 29.4087 28.5335 29.4087 27.9595V3.4455H30.5567C30.9117 4.0605 31.5957 4.4705 32.3477 4.4705C33.5097 4.4705 34.4667 3.5135 34.4667 2.3375C34.4667 1.1755 33.5097 0.2185 32.3477 0.2185C31.5957 0.2185 30.9117 0.6425 30.5567 1.2445H29.4087V0.9985C29.4087 0.4235 28.9977 0.0005 28.4377 0.0005H19.1407C18.5797 0.0005 18.1697 0.4235 18.1697 0.9985V1.2445H16.2967V0.9985C16.2967 0.4235 15.8867 0.0005 15.3267 0.0005H6.0297C5.4687 0.0005 5.0587 0.4235 5.0587 0.9985V1.2445H3.9097C3.5547 0.6425 2.8707 0.2185 2.1187 0.2185C0.9567 0.2185 -0.0003 1.1755 -0.0003 2.3375C-0.0003 3.5135 0.9567 4.4705 2.1187 4.4705C2.8707 4.4705 3.5547 4.0605 3.9097 3.4455H5.0587V27.9595C5.0587 28.5335 5.4687 28.9435 6.0297 28.9435Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.861328125 29.845703125"
          className={className}
        >
          <path
            d="              M6.5627 29.8456H15.7497C16.4607 29.8456 16.9527 29.3396 16.9527 28.6156V4.2246H18.8947V28.6156C18.8947 29.3396 19.4007 29.8456 20.1117 29.8456H29.2847C29.9957 29.8456 30.5017 29.3396 30.5017 28.6156V4.2246H31.5547C31.9647 4.7856 32.6617 5.1546 33.4137 5.1546C34.7537 5.1546 35.8617 4.0466 35.8617 2.7066C35.8617 1.3676 34.7537 0.2596 33.4137 0.2596C32.6617 0.2596 31.9787 0.6286 31.5547 1.1756H30.5017C30.5017 0.5056 29.9957 -0.0004 29.2847 -0.0004H20.1117C19.4137 -0.0004 18.9217 0.4926 18.8947 1.1756H16.9527C16.9527 0.5056 16.4607 -0.0004 15.7497 -0.0004H6.5627C5.8787 -0.0004 5.3727 0.4926 5.3597 1.1756H4.2927C3.8827 0.6286 3.1997 0.2596 2.4477 0.2596C1.1077 0.2596 -0.0003 1.3676 -0.0003 2.7066C-0.0003 4.0466 1.1077 5.1546 2.4477 5.1546C3.1997 5.1546 3.8967 4.7856 4.3067 4.2246H5.3597V28.6156C5.3597 29.3396 5.8517 29.8456 6.5627 29.8456Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.14453125 27.78125"
          className={className}
        >
          <path
            d="              M4.7717 27.7811H14.2457C14.6697 27.7811 14.9707 27.4671 14.9707 27.0021V2.1051H16.1877V27.0021C16.1877 27.4671 16.4747 27.7811 16.8987 27.7811H26.3727C26.8107 27.7811 27.1117 27.4671 27.1117 27.0021V2.1051H28.3687C28.5467 2.6661 29.0797 3.0491 29.6957 3.0491C30.5017 3.0491 31.1447 2.4061 31.1447 1.6001C31.1447 0.8071 30.5017 0.1501 29.6957 0.1501C29.0797 0.1501 28.5467 0.5471 28.3687 1.0941H27.1117V0.7791C27.1117 0.3141 26.8107 0.0001 26.3727 0.0001H16.8987C16.4747 0.0001 16.1877 0.3141 16.1877 0.7791V1.0941H14.9707V0.7791C14.9707 0.3141 14.6697 0.0001 14.2457 0.0001H4.7717C4.3337 0.0001 4.0467 0.3141 4.0467 0.7791V1.0941H2.7757C2.5977 0.5471 2.0647 0.1501 1.4357 0.1501C0.6427 0.1501 -0.0003 0.8071 -0.0003 1.6001C-0.0003 2.4061 0.6427 3.0491 1.4357 3.0491C2.0647 3.0491 2.5977 2.6661 2.7757 2.1051H4.0467V27.0021C4.0467 27.4671 4.3337 27.7811 4.7717 27.7811Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.1875 27.439453125"
          className={className}
        >
          <path
            d="              M4.4027 27.439H13.9317C14.3147 27.439 14.5747 27.166 14.5747 26.729V1.709H15.5997V26.729C15.5997 27.166 15.8597 27.439 16.2427 27.439H25.7847C26.1817 27.439 26.4417 27.166 26.4417 26.729V1.709H27.7267C27.8637 2.256 28.3557 2.639 28.9297 2.639C29.6267 2.639 30.1877 2.092 30.1877 1.381C30.1877 0.684 29.6267 0.123 28.9297 0.123C28.3557 0.123 27.8637 0.52 27.7267 1.039H26.4417V0.711C26.4417 0.273 26.1817 0 25.7847 0H16.2427C15.8597 0 15.5997 0.273 15.5997 0.711V1.039H14.5747V0.711C14.5747 0.273 14.3147 0 13.9317 0H4.4027C4.0057 0 3.7457 0.273 3.7457 0.711V1.039H2.4477C2.3107 0.52 1.8317 0.123 1.2437 0.123C0.5467 0.123 -0.0003 0.684 -0.0003 1.381C-0.0003 2.092 0.5467 2.639 1.2437 2.639C1.8317 2.639 2.3107 2.256 2.4477 1.709H3.7457V26.729C3.7457 27.166 4.0057 27.439 4.4027 27.439Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}