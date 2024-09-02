import { IconProps } from "../../types"

export default function StairsIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.669921875 28.669921875"
          className={className}
        >
          <path
            d="              M2.2697 28.6699C3.5137 28.6699 4.5387 27.6449 4.5387 26.4009V22.9549H8.1077C9.5707 22.9549 10.6777 21.8479 10.6777 20.3989V16.8169H14.2597C15.7087 16.8169 16.8167 15.7089 16.8167 14.2459V10.6779H20.3987C21.8477 10.6779 22.9687 9.5569 22.9687 8.1079V4.5249H26.4007C27.6447 4.5249 28.6697 3.4999 28.6697 2.2699C28.6697 1.0249 27.6447 -0.0001 26.4007 -0.0001H20.9867C19.5367 -0.0001 18.4297 1.1079 18.4297 2.5569V6.1389H14.8477C13.3987 6.1389 12.2907 7.2459 12.2907 8.7089V12.2769H8.7087C7.2597 12.2769 6.1387 13.3989 6.1387 14.8479V18.4299H2.5707C1.1077 18.4299 -0.0003 19.5369 -0.0003 20.9859V26.4009C-0.0003 27.6449 1.0257 28.6699 2.2697 28.6699Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.5078125 27.494140625"
          className={className}
        >
          <path
            d="              M1.6817 27.494C2.6117 27.494 3.3637 26.742 3.3637 25.813V21.793H7.5467C8.6677 21.793 9.5157 20.945 9.5157 19.824V15.641H13.6857C14.8067 15.641 15.6547 14.807 15.6547 13.686V9.502H19.8377C20.9457 9.502 21.7927 8.668 21.7927 7.547V3.363H25.8127C26.7427 3.363 27.5077 2.598 27.5077 1.682C27.5077 0.752 26.7427 0 25.8127 0H20.3847C19.2777 0 18.4297 0.834 18.4297 1.955V6.139H14.2457C13.1247 6.139 12.2907 6.986 12.2907 8.094V12.277H8.1077C6.9867 12.277 6.1387 13.125 6.1387 14.246V18.416H1.9547C0.8477 18.416 -0.0003 19.264 -0.0003 20.385V25.813C-0.0003 26.742 0.7657 27.494 1.6817 27.494Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.123046875 28.123046875"
          className={className}
        >
          <path
            d="              M1.9957 28.1235C3.0897 28.1235 3.9787 27.2205 3.9787 26.1275V22.4085H7.8477C9.1467 22.4085 10.1307 21.4235 10.1307 20.1385V16.2695H13.9867C15.2847 16.2695 16.2697 15.2855 16.2697 13.9865V10.1305H20.1247C21.4237 10.1305 22.4087 9.1465 22.4087 7.8475V3.9785H26.1267C27.2207 3.9785 28.1227 3.0895 28.1227 1.9965C28.1227 0.9025 27.2207 0.0005 26.1267 0.0005H20.7127C19.4137 0.0005 18.4297 0.9845 18.4297 2.2835V6.1385H14.5607C13.2757 6.1385 12.2907 7.1235 12.2907 8.4215V12.2915H8.4217C7.1227 12.2915 6.1387 13.2755 6.1387 14.5605V18.4295H2.2837C0.9847 18.4295 -0.0003 19.4145 -0.0003 20.7125V26.1275C-0.0003 27.2205 0.9027 28.1235 1.9957 28.1235Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.826171875 25.826171875"
          className={className}
        >
          <path
            d="              M0.8337 25.826C1.3127 25.826 1.6957 25.457 1.6957 24.992V20.125H6.7677C7.3827 20.125 7.8337 19.674 7.8337 19.072V13.986H12.9067C13.5217 13.986 13.9727 13.535 13.9727 12.934V7.834H19.0587C19.6597 7.834 20.1247 7.396 20.1247 6.795V1.695H24.9647C25.4437 1.695 25.8267 1.326 25.8267 0.861C25.8267 0.383 25.4437 0 24.9647 0H19.4827C18.8677 0 18.4297 0.465 18.4297 1.066V6.152H13.3297C12.7287 6.152 12.2907 6.603 12.2907 7.219V12.291H7.1917C6.5897 12.291 6.1387 12.742 6.1387 13.357V18.43H1.0527C0.4517 18.43 -0.0003 18.881 -0.0003 19.496V24.992C-0.0003 25.457 0.3687 25.826 0.8337 25.826Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.755859375 26.755859375"
          className={className}
        >
          <path
            d="              M1.3127 26.7559C2.0237 26.7559 2.6247 26.1679 2.6247 25.4439V21.0549H7.1777C8.0937 21.0549 8.7637 20.3709 8.7637 19.4689V14.9019H13.3297C14.2327 14.9019 14.9027 14.2329 14.9027 13.3299V8.7639H19.4687C20.3707 8.7639 21.0547 8.0939 21.0547 7.1919V2.6249H25.4437C26.1677 2.6249 26.7557 2.0369 26.7557 1.3129C26.7557 0.5879 26.1677 -0.0001 25.4437 -0.0001H20.0017C19.0997 -0.0001 18.4297 0.6699 18.4297 1.5719V6.1389H13.8637C12.9607 6.1389 12.2907 6.8219 12.2907 7.7249V12.2909H7.7107C6.8087 12.2909 6.1387 12.9609 6.1387 13.8629V18.4299H1.5727C0.6697 18.4299 -0.0003 19.0999 -0.0003 20.0019V25.4439C-0.0003 26.1679 0.5877 26.7559 1.3127 26.7559Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.33203125 26.345703125"
          className={className}
        >
          <path
            d="              M1.0937 26.3458C1.7087 26.3458 2.2017 25.8398 2.2017 25.2388V20.6308H6.9867C7.7657 20.6308 8.3397 20.0568 8.3397 19.2778V14.4918H13.1247C13.9047 14.4918 14.4927 13.9178 14.4927 13.1388V8.3538H19.2637C20.0567 8.3538 20.6307 7.7798 20.6307 6.9998V2.2008H25.2247C25.8397 2.2008 26.3317 1.7088 26.3317 1.1078C26.3317 0.5058 25.8397 -0.0002 25.2247 -0.0002H19.7837C19.0037 -0.0002 18.4297 0.5878 18.4297 1.3668V6.1528H13.6447C12.8657 6.1528 12.2907 6.7268 12.2907 7.5058V12.2908H7.4927C6.7127 12.2908 6.1387 12.8648 6.1387 13.6578V18.4298H1.3537C0.5747 18.4298 -0.0003 19.0178 -0.0003 19.7968V25.2388C-0.0003 25.8398 0.4927 26.3458 1.0937 26.3458Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.083984375 27.083984375"
          className={className}
        >
          <path
            d="              M1.4627 27.0839C2.2837 27.0839 2.9397 26.4139 2.9397 25.6079V21.3689H7.3417C8.3397 21.3689 9.0917 20.6309 9.0917 19.6329V15.2309H13.4807C14.4787 15.2309 15.2307 14.4789 15.2307 13.4939V9.0919H19.6327C20.6177 9.0919 21.3687 8.3399 21.3687 7.3419V2.9399H25.6077C26.4137 2.9399 27.0837 2.2829 27.0837 1.4769C27.0837 0.6699 26.4137 -0.0001 25.6077 -0.0001H20.1657C19.1677 -0.0001 18.4297 0.7519 18.4297 1.7499V6.1389H14.0277C13.0297 6.1389 12.2907 6.8909 12.2907 7.8889V12.2909H7.8887C6.8907 12.2909 6.1387 13.0289 6.1387 14.0269V18.4299H1.7367C0.7517 18.4299 -0.0003 19.1819 -0.0003 20.1799V25.6079C-0.0003 26.4139 0.6697 27.0839 1.4627 27.0839Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.15625 25.142578125"
          className={className}
        >
          <path
            d="              M0.4927 25.1425C0.7927 25.1425 1.0117 24.9235 1.0117 24.6505V19.4415H6.4807C6.8767 19.4415 7.1637 19.1675 7.1637 18.7985V13.2895H12.6327C13.0157 13.2895 13.3027 13.0155 13.3027 12.6465V7.1505H18.7717C19.1547 7.1505 19.4417 6.8765 19.4417 6.5075V1.0115H24.6227C24.9237 1.0115 25.1567 0.7925 25.1567 0.5195C25.1567 0.2185 24.9237 -0.0005 24.6227 -0.0005H19.0727C18.7027 -0.0005 18.4297 0.2875 18.4297 0.6695V6.1385H12.9337C12.5647 6.1385 12.2907 6.4255 12.2907 6.8085V12.2775H6.7817C6.4117 12.2775 6.1387 12.5645 6.1387 12.9475V18.4155H0.6427C0.2737 18.4155 -0.0003 18.7035 -0.0003 19.0995V24.6505C-0.0003 24.9235 0.2187 25.1425 0.4927 25.1425Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.80078125 24.814453125"
          className={className}
        >
          <path
            d="              M0.3147 24.8145C0.5197 24.8145 0.6697 24.6775 0.6697 24.4865V19.0995H6.3437C6.6037 19.0995 6.8087 18.9215 6.8087 18.6625V12.9605H12.4827C12.7557 12.9605 12.9607 12.7695 12.9607 12.5235V6.8225H18.6207C18.8947 6.8225 19.0997 6.6305 19.0997 6.3845V0.6695H24.4457C24.6507 0.6695 24.8007 0.5465 24.8007 0.3555C24.8007 0.1505 24.6507 0.0005 24.4457 0.0005H18.8677C18.6077 0.0005 18.4297 0.2055 18.4297 0.4785V6.1525H12.7287C12.4687 6.1525 12.2907 6.3435 12.2907 6.6175V12.2915H6.5767C6.3297 12.2915 6.1387 12.4965 6.1387 12.7695V18.4295H0.4377C0.1917 18.4295 -0.0003 18.6345 -0.0003 18.9085V24.4865C-0.0003 24.6775 0.1367 24.8145 0.3147 24.8145Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}