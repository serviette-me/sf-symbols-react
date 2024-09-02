import { IconProps } from "../../types"

export default function ShadowIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.583984375 23.261248195732648"
          className={className}
        >
          <path
            d="              M3.7597 8.1895H10.1307V4.1285C10.1307 2.8435 9.4197 2.0095 8.1757 1.6675L1.8457 0.0005C2.7207 0.2465 3.7597 1.0115 3.7597 2.9255ZM13.4397 21.3555L19.8377 23.0785C22.0387 23.6795 23.5837 22.8045 23.5837 20.3715V4.1285C23.5837 2.8435 22.8597 2.0095 21.6157 1.6675L15.2847 0.0005C16.1597 0.2465 17.1997 1.0115 17.1997 2.9255V18.3205C17.1997 20.8085 15.5317 21.6285 13.4397 21.3555ZM-0.0003 21.3555L6.3987 23.0785C8.5997 23.6795 10.1307 22.8045 10.1307 20.3715V17.5955H11.2517V12.8785H3.7597V18.3205C3.7597 20.8085 2.0917 21.6285 -0.0003 21.3555Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.232421875 22.173266357424307"
          className={className}
        >
          <path
            d="              M2.5157 8.3807H7.9567V3.6097C7.9567 2.3107 7.3007 1.5997 6.0977 1.2717L1.2987 -0.0003C1.9007 0.2327 2.5157 0.7927 2.5157 1.9957ZM13.2887 20.6997L18.2107 22.0257C20.0297 22.5177 21.2327 21.7797 21.2327 19.8377V3.6097C21.2327 2.3107 20.5767 1.5857 19.3727 1.2577L14.5877 -0.0003C15.1897 0.2327 15.8047 0.7927 15.8047 1.9957V18.5527C15.8047 20.1797 14.7247 20.8357 13.2887 20.6997ZM-0.0003 20.6997L4.9217 22.0257C6.7537 22.5177 7.9567 21.7797 7.9567 19.8377V16.1327H11.5667V11.8537H2.5157V18.5527C2.5157 20.1797 1.4357 20.8357 -0.0003 20.6997Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.4765625 22.749890788735136"
          className={className}
        >
          <path
            d="              M3.1717 8.2714H9.1057V3.8824C9.1057 2.5974 8.4217 1.8044 7.2047 1.4764L1.5857 0.0004C2.3247 0.2324 3.1717 0.9024 3.1717 2.4884ZM13.3707 21.0414L19.0727 22.5864C21.0957 23.1324 22.4767 22.3124 22.4767 20.1114V3.8824C22.4767 2.5974 21.7927 1.8044 20.5627 1.4764L14.9567 0.0004C15.6957 0.2324 16.5427 0.9024 16.5427 2.4884V18.4294C16.5427 20.5074 15.1487 21.2464 13.3707 21.0414ZM-0.0003 21.0414L5.7017 22.5864C7.7247 23.1324 9.1057 22.3124 9.1057 20.1114V16.8984H11.4027V12.4004H3.1717V18.4294C3.1717 20.5074 1.7777 21.2464 -0.0003 21.0414Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.23828125 21.096591656449153"
          className={className}
        >
          <path
            d="              M0.9847 8.8869H5.0857V2.6659C5.0857 1.6129 4.5937 1.0799 3.6097 0.8069L0.5747 -0.0001C0.8067 0.1639 0.9847 0.4099 0.9847 0.8199ZM13.1527 20.1659L16.2427 20.9999C17.4727 21.3279 18.2387 20.8089 18.2387 19.6189V2.6659C18.2387 1.6129 17.7327 1.0659 16.7477 0.8069L13.7127 -0.0001C13.9587 0.1639 14.1227 0.4099 14.1227 0.8199V19.2089C14.1227 19.7969 13.7537 20.1659 13.1527 20.1659ZM-0.0003 20.1659L3.0897 20.9999C4.3337 21.3279 5.0857 20.8089 5.0857 19.6189V14.2869H12.2227V10.6089H0.9847V19.2089C0.9847 19.7969 0.6017 20.1659 -0.0003 20.1659Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.728515625 21.47986384893787"
          className={className}
        >
          <path
            d="              M1.7367 8.5039H6.5487V3.2679C6.5487 1.9819 5.9477 1.3259 4.7717 1.0119L0.9567 -0.0001C1.3807 0.2189 1.7367 0.6429 1.7367 1.4079ZM13.1797 20.2889L17.1587 21.3559C18.7437 21.7789 19.7287 21.1089 19.7287 19.5099V3.2679C19.7287 1.9819 19.1137 1.3259 17.9377 0.9979L14.1367 -0.0001C14.5607 0.2189 14.9157 0.6429 14.9157 1.4079V18.7029C14.9157 19.7829 14.2047 20.3299 13.1797 20.2889ZM-0.0003 20.2889L3.9787 21.3559C5.5647 21.7789 6.5487 21.1089 6.5487 19.5099V15.1899H11.7717V11.2109H1.7367V18.7029C1.7367 19.7829 1.0117 20.3299 -0.0003 20.2889Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.89453125 21.089374037211932"
          className={className}
        >
          <path
            d="              M1.2847 8.5719H5.7697V3.0759C5.7697 1.7909 5.1817 1.1899 4.0197 0.8749L0.7517 -0.0001C1.0797 0.2189 1.2847 0.5739 1.2847 1.0669ZM13.1247 20.0569L16.5707 20.9729C18.0197 21.3689 18.8947 20.7399 18.8947 19.3179V3.0759C18.8947 1.7909 18.2927 1.1759 17.1307 0.8609L13.8767 -0.0001C14.2047 0.2189 14.4097 0.5739 14.4097 1.0669V18.7849C14.4097 19.5649 13.9047 20.0569 13.1247 20.0569ZM-0.0003 20.0569L3.4457 20.9729C4.8947 21.3689 5.7697 20.7399 5.7697 19.3179V14.6559H11.8807V10.8419H1.2847V18.7849C1.2847 19.5649 0.7797 20.0569 -0.0003 20.0569Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.384765625 21.781593945780685"
          className={className}
        >
          <path
            d="              M2.0777 8.4496H7.1507V3.4176C7.1507 2.1326 6.5347 1.4496 5.3457 1.1206L1.1077 -0.0004C1.5997 0.2326 2.0777 0.7106 2.0777 1.6676ZM13.2207 20.4666L17.6097 21.6426C19.3047 22.1076 20.3847 21.3966 20.3847 19.6606V3.4176C20.3847 2.1326 19.7557 1.4356 18.5667 1.1206L14.3277 -0.0004C14.8337 0.2326 15.2987 0.7106 15.2987 1.6676V18.6346C15.2987 19.9606 14.4237 20.5486 13.2207 20.4666ZM-0.0003 20.4666L4.3887 21.6426C6.0707 22.1076 7.1507 21.3966 7.1507 19.6606V15.5996H11.6757V11.4846H2.0777V18.6346C2.0777 19.9606 1.2027 20.5486 -0.0003 20.4666Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.36328125 21.092341912680055"
          className={className}
        >
          <path
            d="              M0.5747 9.3106H4.1977V2.1326C4.1977 1.3676 3.8007 0.9156 3.0487 0.7106L0.3277 -0.0004C0.4517 0.0816 0.5747 0.1916 0.5747 0.4786ZM13.1797 20.3026L15.8047 21.0136C16.7617 21.2736 17.3637 20.8766 17.3637 20.0156V2.1326C17.3637 1.3676 16.9807 0.9156 16.2287 0.7106L13.5077 -0.0004C13.6307 0.0816 13.7537 0.1916 13.7537 0.4786V19.7556C13.7537 20.0976 13.5487 20.3026 13.1797 20.3026ZM-0.0003 20.3026L2.6247 21.0136C3.5817 21.2736 4.1977 20.8766 4.1977 20.0156V13.7676H12.6737V10.2946H0.5747V19.7556C0.5747 20.0976 0.3687 20.3026 -0.0003 20.3026Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.92578125 21.0944648200164"
          className={className}
        >
          <path
            d="              M0.3687 9.5293H3.7327V1.8593C3.7327 1.2443 3.4047 0.8473 2.7757 0.6703L0.2047 0.0003C0.2597 0.0413 0.3687 0.0953 0.3687 0.3143ZM13.1937 20.3843L15.5857 21.0273C16.3927 21.2463 16.9257 20.9183 16.9257 20.2203V1.8593C16.9257 1.2443 16.5977 0.8473 15.9687 0.6703L13.3987 0.0003C13.4527 0.0413 13.5627 0.0953 13.5627 0.3143V20.0293C13.5627 20.2483 13.4397 20.3843 13.1937 20.3843ZM-0.0003 20.3843L2.3927 21.0273C3.1997 21.2463 3.7327 20.9183 3.7327 20.2203V13.5213H12.8927V10.1443H0.3687V20.0293C0.3687 20.2483 0.2457 20.3843 -0.0003 20.3843Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
