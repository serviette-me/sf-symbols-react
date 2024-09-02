import { IconProps } from "../../types"

export default function BriefcaseFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.369140625 30.3515625"
          className={className}
        >
          <path
            d="              M30.0777 6.0159C33.4417 6.0159 35.3687 7.9429 35.3687 11.2379C30.4197 13.6449 23.7887 15.0529 17.6917 15.0529C11.5937 15.0529 4.9497 13.6449 -0.0003 11.2379C0.0277 7.9159 1.9547 6.0159 5.3047 6.0159H9.5017V4.0199C9.5017 1.3669 11.0747 -0.0001 14.0817 -0.0001H21.2597C24.2817 -0.0001 25.8807 1.3669 25.8807 4.0199V6.0159ZM13.6037 4.7029V6.0159H21.7657V4.7029C21.7657 3.9919 21.3967 3.6089 20.6717 3.6089H14.6977C13.9727 3.6089 13.6037 3.9789 13.6037 4.7029ZM-0.0003 11.2379C-0.0003 11.2789 -0.0003 11.2519 -0.0003 11.3069ZM35.3687 11.2379V11.3069ZM5.3047 30.3519C1.9277 30.3519 -0.0003 28.4239 -0.0003 25.0609V15.3809C5.4277 17.5269 9.2427 18.2789 13.2617 18.6209V19.6059C13.2617 20.9589 14.0547 21.6839 15.5177 21.6839H19.8517C21.3277 21.6839 22.1077 20.9589 22.1077 19.6059V18.6209C26.1267 18.2789 29.9547 17.5269 35.3687 15.3809V25.0609C35.3687 28.4239 33.4417 30.3519 30.0777 30.3519Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.509765625 28.423828125"
          className={className}
        >
          <path
            d="              M12.3047 4.1562V5.4282H21.2047V4.1562C21.2047 3.2812 20.7127 2.8032 19.8247 2.8032H13.6997C12.7967 2.8032 12.3047 3.2812 12.3047 4.1562ZM16.7617 13.9862C10.9097 13.9862 5.0317 12.8792 -0.0003 10.5552V10.1582C-0.0003 7.0822 1.6677 5.4282 4.7717 5.4282H9.2017V3.8832C9.2017 1.2712 10.7327 0.0002 13.3987 0.0002H20.0977C22.8457 0.0002 24.3227 1.2712 24.3227 3.8832V5.4282H28.7517C31.8417 5.4282 33.5097 7.0822 33.5097 10.1582V10.5552C28.4787 12.8792 22.5997 13.9862 16.7617 13.9862ZM4.7717 28.4242C1.6677 28.4242 -0.0003 26.7692 -0.0003 23.6932V13.7542C4.7847 15.6132 8.7087 16.4062 12.7287 16.7072V17.7462C12.7287 18.9082 13.3987 19.5372 14.6157 19.5372H18.8947C20.1247 19.5372 20.7817 18.9082 20.7817 17.7462V16.7072C24.8147 16.4062 28.7247 15.6132 33.5097 13.7542V23.6932C33.5097 26.7692 31.8417 28.4242 28.7517 28.4242Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.494140625 29.44921875"
          className={className}
        >
          <path
            d="              M13.0017 4.4567V5.7417H21.5057V4.4567C21.5057 3.6637 21.0687 3.2407 20.2757 3.2407H14.2187C13.4257 3.2407 13.0017 3.6507 13.0017 4.4567ZM17.2537 14.5467C11.2797 14.5467 4.9907 13.2887 -0.0003 10.9237V10.7737C-0.0003 7.5467 1.8047 5.7417 5.0447 5.7417H9.3517V3.9647C9.3517 1.3257 10.9097 -0.0003 13.7537 -0.0003H20.7127C23.5977 -0.0003 25.1427 1.3257 25.1427 3.9647V5.7417H29.4497C32.6897 5.7417 34.4937 7.5467 34.4937 10.7737V10.9237C29.5037 13.2887 23.2287 14.5467 17.2537 14.5467ZM5.0447 29.4497C1.8047 29.4497 -0.0003 27.6447 -0.0003 24.4177V14.6157C5.1267 16.6247 8.9957 17.4047 13.0157 17.7327V18.7307C13.0157 20.0017 13.7407 20.6717 15.0937 20.6717H19.4007C20.7537 20.6717 21.4927 20.0017 21.4927 18.7307V17.7327C25.5117 17.4047 29.3677 16.6247 34.4937 14.6157V24.4177C34.4937 27.6447 32.6897 29.4497 29.4497 29.4497Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.994140625 26.05859375"
          className={className}
        >
          <path
            d="              M10.4177 3.2404V4.8674H20.5897V3.2404C20.5897 2.1734 19.9337 1.5584 18.7987 1.5584H12.1817C11.0607 1.5584 10.4177 2.1734 10.4177 3.2404ZM15.5037 12.9474C9.9117 12.9474 4.9087 12.1954 -0.0003 10.0764V8.7094C-0.0003 6.1254 1.2987 4.8674 3.8967 4.8674H8.7777V3.3364C8.7777 1.1074 10.1037 0.0004 12.2227 0.0004H18.7717C20.9867 0.0004 22.2167 1.1074 22.2167 3.3364V4.8674H27.0977C29.7087 4.8674 30.9937 6.1254 30.9937 8.7094V10.0764C26.0997 12.1954 21.0957 12.9474 15.5037 12.9474ZM3.8967 26.0584C1.2987 26.0584 -0.0003 24.8004 -0.0003 22.2034V11.8264C4.0467 13.3574 7.9977 14.1504 12.0037 14.3964V15.4904C12.0037 16.3924 12.5237 16.8984 13.4257 16.8984H17.5817C18.4847 16.8984 19.0037 16.3924 19.0037 15.4904V14.3964C23.0097 14.1504 26.9477 13.3574 30.9937 11.8264V22.2034C30.9937 24.8004 29.7087 26.0584 27.0977 26.0584Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.3203125 27.193359375"
          className={className}
        >
          <path
            d="              M11.4847 3.8149V5.0589H20.8357V3.8149C20.8357 2.8299 20.2757 2.2829 19.2637 2.2829H13.0427C12.0447 2.2829 11.4847 2.8299 11.4847 3.8149ZM16.1597 13.3029C10.4867 13.3029 5.0857 12.3999 -0.0003 10.1169V9.4339C-0.0003 6.5349 1.5037 5.0589 4.4157 5.0589H8.9957V3.8149C8.9957 1.2309 10.5137 -0.0001 12.9607 -0.0001H19.3457C21.9157 -0.0001 23.3247 1.2309 23.3247 3.8149V5.0589H27.8907C30.8297 5.0589 32.3207 6.5349 32.3207 9.4339V10.1169C27.2347 12.3999 21.8337 13.3029 16.1597 13.3029ZM4.4157 27.1929C1.5037 27.1929 -0.0003 25.7169 -0.0003 22.8179V12.7149C4.3887 14.3969 8.3537 15.2029 12.3867 15.4899V16.5699C12.3867 17.5959 12.9747 18.1699 14.0277 18.1699H18.2927C19.3457 18.1699 19.9337 17.5959 19.9337 16.5699V15.4899C23.9667 15.2029 27.9317 14.3969 32.3207 12.7149V22.8179C32.3207 25.7169 30.8297 27.1929 27.8907 27.1929Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.650390625 26.49609375"
          className={className}
        >
          <path
            d="              M11.0057 3.6231V4.8531H20.6307V3.6231C20.6307 2.5841 20.0297 1.9961 18.9627 1.9961H12.6877C11.6207 1.9961 11.0057 2.5841 11.0057 3.6231ZM15.8187 12.9201C10.2407 12.9201 5.1137 12.1271 -0.0003 9.8851V9.0231C-0.0003 6.2211 1.4087 4.8531 4.2247 4.8531H8.8867V3.7731C8.8867 1.2031 10.3767 0.0001 12.7147 0.0001H18.9217C21.3967 0.0001 22.7497 1.2031 22.7497 3.7731V4.8531H27.4257C30.2557 4.8531 31.6507 6.2211 31.6507 9.0231V9.8851C26.5367 12.1271 21.4097 12.9201 15.8187 12.9201ZM4.2247 26.4961C1.4087 26.4961 -0.0003 25.1291 -0.0003 22.3261V12.1401C4.1567 13.7131 8.1617 14.5331 12.1817 14.8061V15.9141C12.1817 16.8711 12.7427 17.4041 13.6997 17.4041H17.9517C18.9087 17.4041 19.4687 16.8711 19.4687 15.9141V14.8061C23.4887 14.5331 27.4937 13.7131 31.6507 12.1401V22.3261C31.6507 25.1291 30.2557 26.4961 27.4257 26.4961Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.83984375 27.7265625"
          className={className}
        >
          <path
            d="              M11.8397 3.9644V5.2224H20.9997V3.9644C20.9997 3.0354 20.4667 2.5154 19.5097 2.5154H13.3297C12.3727 2.5154 11.8397 3.0354 11.8397 3.9644ZM16.4197 13.6034C10.6637 13.6034 5.0587 12.6194 -0.0003 10.3224V9.7484C-0.0003 6.7674 1.5727 5.2224 4.5667 5.2224H9.0917V3.8554C9.0917 1.2574 10.5957 0.0004 13.1527 0.0004H19.6737C22.3127 0.0004 23.7477 1.2574 23.7477 3.8554V5.2224H28.2597C31.2677 5.2224 32.8397 6.7674 32.8397 9.7484V10.3224C27.7677 12.6194 22.1617 13.6034 16.4197 13.6034ZM4.5667 27.7264C1.5727 27.7264 -0.0003 26.1814 -0.0003 23.2014V13.1664C4.5527 14.9294 8.5037 15.7364 12.5237 16.0234V17.0894C12.5237 18.1704 13.1527 18.7714 14.2737 18.7714H18.5527C19.6877 18.7714 20.3027 18.1704 20.3027 17.0894V16.0234C24.3357 15.7364 28.2737 14.9294 32.8397 13.1664V23.2014C32.8397 26.1814 31.2677 27.7264 28.2597 27.7264Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.146484375 25.484375"
          className={className}
        >
          <path
            d="              M9.6247 2.7343V4.8813H20.5217V2.7343C20.5217 1.6273 19.8107 0.9703 18.5937 0.9703H11.5257C10.3227 0.9703 9.6247 1.6273 9.6247 2.7343ZM15.0667 12.9883C9.4887 12.9883 4.6347 12.2913 -0.0003 10.3363V8.3123C-0.0003 6.0023 1.1487 4.8813 3.4587 4.8813H8.6267V2.7753C8.6267 0.9843 9.7347 0.0003 11.5667 0.0003H18.5667C20.4397 0.0003 21.5197 0.9843 21.5197 2.7753V4.8813H26.6877C28.9977 4.8813 30.1467 6.0023 30.1467 8.3123V10.3363C25.5257 12.2913 20.6717 12.9883 15.0667 12.9883ZM3.4587 25.4843C1.1487 25.4843 -0.0003 24.3633 -0.0003 22.0523V11.4023C3.9097 12.8653 7.7927 13.6313 11.7577 13.8633V14.9433C11.7577 15.7503 12.2227 16.2153 13.0567 16.2153H17.0897C17.9097 16.2153 18.3887 15.7503 18.3887 14.9433V13.8633C22.3677 13.6313 26.2367 12.8653 30.1467 11.4023V22.0523C30.1467 24.3633 28.9977 25.4843 26.6877 25.4843Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.6953125 25.18359375"
          className={className}
        >
          <path
            d="              M9.2147 2.4749V4.8949H20.4807V2.4749C20.4807 1.3399 19.7557 0.6699 18.4847 0.6699H11.1977C9.9527 0.6699 9.2147 1.3399 9.2147 2.4749ZM14.8477 13.0019C9.2697 13.0019 4.4847 12.3319 -0.0003 10.4729V8.0939C-0.0003 5.9339 1.0797 4.8949 3.2267 4.8949H8.5447V2.4749C8.5447 0.9159 9.5427 -0.0001 11.2247 -0.0001H18.4567C20.1527 -0.0001 21.1507 0.9159 21.1507 2.4749V4.8949H26.4687C28.6287 4.8949 29.6957 5.9339 29.6957 8.0939V10.4729C25.2247 12.3319 20.4527 13.0019 14.8477 13.0019ZM3.2267 25.1839C1.0797 25.1839 -0.0003 24.1309 -0.0003 21.9709V11.1839C3.8277 12.6189 7.6837 13.3709 11.6347 13.5899V14.6559C11.6347 15.4219 12.0857 15.8729 12.8657 15.8729H16.8437C17.6227 15.8729 18.0747 15.4219 18.0747 14.6559V13.5899C22.0257 13.3709 25.8677 12.6189 29.6957 11.1839V21.9709C29.6957 24.1309 28.6287 25.1839 26.4687 25.1839Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}