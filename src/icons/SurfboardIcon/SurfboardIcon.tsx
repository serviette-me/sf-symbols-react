import { IconProps } from "../../types"

export default function SurfboardIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.09741589518456 39.08644215073425"
          className={className}
        >
          <path
            d="              M1.9561 37.1325C4.1021 39.2795 6.9461 39.6345 10.4051 38.3085C15.7511 36.2575 21.8891 31.8415 27.5491 26.1685C38.1721 15.5445 41.8091 6.8355 37.0241 2.0645C32.2521 -2.7065 23.5441 0.9295 12.9201 11.5525C7.2471 17.1995 2.8311 23.3515 0.7801 28.6835C-0.5599 32.1285 -0.1769 35.0005 1.9561 37.1325ZM4.8401 29.6685C7.1511 24.6505 11.1291 19.3185 15.9011 14.5335C24.3771 6.0435 30.4481 2.7615 33.4421 4.5665L4.4711 33.5375C3.9241 32.6075 4.0341 31.4045 4.8401 29.6685ZM24.5691 23.2015C19.7841 27.9725 14.4381 31.9375 9.4201 34.2485C7.6841 35.0685 6.4811 35.1645 5.5381 34.6175L34.5221 5.6465C36.3271 8.6545 33.0451 14.7245 24.5691 23.2015Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.416786121916395 36.41083359961161"
          className={className}
        >
          <path
            d="              M1.7512 34.6662C3.6652 36.5802 6.1942 36.9082 9.3662 35.7052C14.3972 33.7642 20.1802 29.5942 25.5402 24.2342C35.5612 14.1992 38.8832 6.1742 34.5632 1.8532C30.2432 -2.4668 22.2172 0.8552 12.1822 10.8772C6.8232 16.2362 2.6532 22.0192 0.7112 27.0512C-0.5048 30.2092 -0.1638 32.7522 1.7512 34.6662ZM3.8292 27.6662C6.0572 22.8672 9.8852 17.7132 14.4382 13.1462C22.6692 4.9302 28.7392 1.6762 31.7602 3.6852L3.5832 31.8632C2.9262 30.8382 2.9952 29.4842 3.8292 27.6662ZM23.2702 21.9782C18.7042 26.5312 13.5492 30.3592 8.7372 32.5742C6.9322 33.4222 5.5792 33.4902 4.5402 32.8342L32.7312 4.6422C34.7412 7.6782 31.4872 13.7622 23.2702 21.9782Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.83284920031936 37.83050981844716"
          className={className}
        >
          <path
            d="              M1.8469 35.9631C3.8979 38.0141 6.5909 38.3561 9.9139 37.0851C15.1089 35.0751 21.0839 30.7821 26.5929 25.2581C36.9429 14.9091 40.4289 6.5281 35.8629 1.9621C31.3099 -2.5909 22.9159 0.8951 12.5799 11.2311C7.0559 16.7541 2.7499 22.7291 0.7529 27.9111C-0.5321 31.2331 -0.1761 33.9401 1.8469 35.9631ZM4.3629 28.7311C6.6319 23.8091 10.5429 18.5591 15.2179 13.8831C23.5719 5.5161 29.6419 2.2491 32.6499 4.1491L4.0479 32.7511C3.4469 31.7661 3.5429 30.4951 4.3629 28.7311ZM23.9549 22.6201C19.2789 27.2951 14.0289 31.1921 9.0929 33.4621C7.3299 34.2961 6.0579 34.3781 5.0739 33.7761L33.6749 5.1741C35.5759 8.1961 32.3079 14.2661 23.9549 22.6201Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.74594356980156 32.74766569648412"
          className={className}
        >
          <path
            d="              M1.4512 31.3037C3.0642 32.9037 5.0872 33.1767 7.8632 32.1107C12.4842 30.3327 17.7612 26.5187 22.7382 21.5417C31.9942 12.2857 34.8782 5.2587 31.1872 1.5677C27.4962 -2.1373 20.4682 0.7467 11.1992 10.0027C6.2362 14.9797 2.4082 20.2707 0.6302 24.8777C-0.4218 27.6537 -0.1628 29.6907 1.4512 31.3037ZM2.3262 24.9457C4.4312 20.3937 8.0682 15.4857 12.3752 11.1787C20.3452 3.2217 26.4982 -0.0183 29.6422 2.4287L2.3122 29.7447C1.3962 28.5557 1.4102 26.9287 2.3262 24.9457ZM21.5622 20.3657C17.2552 24.6727 12.3472 28.3227 7.8082 30.4287C5.8122 31.3307 4.1992 31.3447 2.9962 30.4287L30.3262 3.1127C32.7732 6.2427 29.5332 12.3957 21.5622 20.3657Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.71050245791263 34.70308879856132"
          className={className}
        >
          <path
            d="              M1.6138 33.0836C3.3908 34.8606 5.7148 35.1756 8.6958 34.0266C13.5218 32.1676 19.0728 28.1616 24.2408 22.9936C33.9068 13.3276 37.0238 5.7536 32.9908 1.7206C28.9578 -2.3134 21.3698 0.8046 11.7168 10.4566C6.5488 15.6246 2.5298 21.1756 0.6698 26.0016C-0.4642 28.9816 -0.1642 31.3196 1.6138 33.0836ZM3.1858 26.3976C5.3458 21.7226 9.0918 16.7046 13.5218 12.2616C21.5608 4.2226 27.6308 0.9816 30.6938 3.1146L3.0218 30.8006C2.2838 29.7066 2.3378 28.2576 3.1858 26.3976ZM22.4358 21.1886C18.0058 25.6186 12.9888 29.3516 8.3128 31.5116C6.4538 32.3726 5.0038 32.4276 3.9108 31.6886L31.5828 4.0036C33.7148 7.0656 30.4748 13.1496 22.4358 21.1886Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.742675313812974 33.738586566157146"
          className={className}
        >
          <path
            d="              M1.5301 32.2014C3.2251 33.8974 5.4401 34.1844 8.3251 33.0904C13.0421 31.2724 18.4561 27.3484 23.5141 22.2894C32.9611 12.8424 35.9691 5.5144 32.1001 1.6454C28.2311 -2.2236 20.8891 0.7704 11.4421 10.2174C6.3831 15.2764 2.4731 20.7034 0.6551 25.4204C-0.4529 28.2914 -0.1519 30.5064 1.5301 32.2014ZM2.8151 25.6804C4.9481 21.0734 8.6391 16.1234 12.9871 11.7624C20.9301 3.8324 27.0141 0.6064 30.0901 2.8074L2.7061 30.1924C1.9131 29.0714 1.9671 27.5534 2.8151 25.6804ZM21.9691 20.7444C17.6221 25.1064 12.6591 28.7834 8.0651 30.9164C6.1781 31.7784 4.6741 31.8194 3.5401 31.0394L30.9381 3.6414C33.1391 6.7314 29.9131 12.8014 21.9691 20.7444Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.441363358937764 35.447902175408416"
          className={className}
        >
          <path
            d="              M1.6653 33.7705C3.4973 35.6155 5.9163 35.9305 8.9793 34.7545C13.9013 32.8545 19.5473 28.7795 24.7973 23.5295C34.6143 13.7135 37.8273 5.9345 33.6573 1.7785C29.5003 -2.3785 21.7353 0.8205 11.9183 10.6515C6.6553 15.9015 2.5813 21.5475 0.6943 26.4555C-0.4817 29.5185 -0.1677 31.9385 1.6653 33.7705ZM3.4563 26.9475C5.6433 22.2175 9.4303 17.1455 13.9153 12.6475C22.0363 4.5265 28.1063 1.2855 31.1553 3.3635L3.2643 31.2685C2.5533 30.1885 2.6223 28.7935 3.4563 26.9475ZM22.7883 21.5335C18.3033 26.0185 13.2313 29.7915 8.4873 31.9795C6.6553 32.8265 5.2473 32.8955 4.1803 32.1845L32.0713 4.2935C34.1493 7.3425 30.9093 13.4125 22.7883 21.5335Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.42852157303669 31.43209497434229"
          className={className}
        >
          <path
            d="              M1.3342 30.0919C2.8382 31.5959 4.6292 31.8289 7.2672 30.8169C11.7522 29.0939 16.8512 25.4029 21.7052 20.5489C30.7282 11.5259 33.4352 4.9089 29.9762 1.4499C26.5172 -2.0091 19.9002 0.7109 10.8902 9.7209C6.0372 14.5749 2.3452 19.6879 0.6092 24.1589C-0.3888 26.7969 -0.1698 28.6019 1.3342 30.0919ZM1.6622 23.9669C3.7262 19.4829 7.3362 14.6429 11.5742 10.4049C19.5582 2.4199 25.8062 -0.8471 29.0332 1.9279L1.8122 29.1629C0.7182 27.8639 0.6912 26.0869 1.6622 23.9669ZM21.0212 19.8659C16.7832 24.1039 11.9432 27.6999 7.4592 29.7779C5.3402 30.7489 3.5622 30.7079 2.2772 29.6279L29.4982 2.3929C32.2732 5.6199 29.0062 11.8679 21.0212 19.8659Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.75653320979888 30.755601734512297"
          className={className}
        >
          <path
            d="              M1.2668 29.4761C2.7168 30.9251 4.3978 31.1301 6.9548 30.1591C11.3708 28.4501 16.3878 24.8271 21.1868 20.0281C30.0738 11.1421 32.6988 4.7431 29.3628 1.3941C26.0128 -1.9419 19.6148 0.6831 10.7278 9.5691C5.9288 14.3681 2.3058 19.3861 0.5968 23.7881C-0.3732 26.3581 -0.1682 28.0401 1.2668 29.4761ZM1.3218 23.4741C3.3728 19.0171 6.9548 14.2041 11.1518 10.0071C19.1498 2.0091 25.4528 -1.2589 28.7198 1.6671L1.5538 28.8471C0.3648 27.5071 0.3238 25.6611 1.3218 23.4741ZM20.7498 19.6041C16.5388 23.8021 11.7258 27.3701 7.2828 29.4351C5.0948 30.4331 3.2498 30.3781 1.9098 29.2021L29.0758 2.0361C32.0148 5.3041 28.7478 11.6061 20.7498 19.6041Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}