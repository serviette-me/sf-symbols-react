import { IconProps } from "../../types"

export default function CrossCaseFillIconIcon({
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
            d="              M5.3047 30.3519H30.0777C33.4417 30.3519 35.3687 28.4239 35.3687 25.0609V11.3069C35.3687 7.9429 33.4417 6.0159 30.0777 6.0159H25.8807V4.0199C25.8807 1.3669 24.2817 -0.0001 21.2597 -0.0001H14.0817C11.0747 -0.0001 9.5017 1.3669 9.5017 4.0199V6.0159H5.3047C1.9277 6.0159 -0.0003 7.9429 -0.0003 11.3069V25.0609C-0.0003 28.4239 1.9277 30.3519 5.3047 30.3519ZM13.6037 4.7029C13.6037 3.9789 13.9727 3.6089 14.6977 3.6089H20.6717C21.3967 3.6089 21.7657 3.9919 21.7657 4.7029V6.0159H13.6037ZM10.7457 18.9079V17.4319C10.7457 16.2829 11.5387 15.4899 12.6877 15.4899H15.0117V13.1799C15.0117 12.0039 15.7907 11.2379 16.9667 11.2379H18.4297C19.6057 11.2379 20.3847 12.0039 20.3847 13.1799V15.4899H22.6957C23.8577 15.4899 24.6367 16.2829 24.6367 17.4319V18.9079C24.6367 20.0699 23.8577 20.8629 22.6957 20.8629H20.3847V23.1739C20.3847 24.3499 19.6057 25.1149 18.4297 25.1149H16.9667C15.7907 25.1149 15.0117 24.3499 15.0117 23.1739V20.8629H12.7017C11.5387 20.8629 10.7457 20.0699 10.7457 18.9079Z"
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
            d="              M4.7717 28.4242H28.7517C31.8417 28.4242 33.5097 26.7692 33.5097 23.6932V10.1582C33.5097 7.0822 31.8417 5.4282 28.7517 5.4282H24.3227V3.8832C24.3227 1.2712 22.8457 0.0002 20.0977 0.0002H13.3987C10.7327 0.0002 9.2017 1.2712 9.2017 3.8832V5.4282H4.7717C1.6677 5.4282 -0.0003 7.0822 -0.0003 10.1582V23.6932C-0.0003 26.7692 1.6677 28.4242 4.7717 28.4242ZM12.3047 4.1562C12.3047 3.2812 12.7967 2.8032 13.6997 2.8032H19.8247C20.7127 2.8032 21.2047 3.2812 21.2047 4.1562V5.4282H12.3047ZM10.0767 17.8962V15.9142C10.0767 14.9842 10.7047 14.3552 11.6347 14.3552H14.2047V11.7992C14.2047 10.8552 14.8337 10.2262 15.7637 10.2262H17.7457C18.6897 10.2262 19.3187 10.8552 19.3187 11.7992V14.3552H21.8887C22.8187 14.3552 23.4607 14.9842 23.4607 15.9142V17.8962C23.4607 18.8402 22.8187 19.4692 21.8887 19.4692H19.3187V22.0252C19.3187 22.9822 18.6897 23.5972 17.7457 23.5972H15.7637C14.8337 23.5972 14.2047 22.9822 14.2047 22.0252V19.4692H11.6347C10.7047 19.4692 10.0767 18.8402 10.0767 17.8962Z"
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
            d="              M5.0447 29.4497H29.4497C32.6897 29.4497 34.4937 27.6447 34.4937 24.4177V10.7737C34.4937 7.5467 32.6897 5.7417 29.4497 5.7417H25.1427V3.9647C25.1427 1.3257 23.5977 -0.0003 20.7127 -0.0003H13.7537C10.9097 -0.0003 9.3517 1.3257 9.3517 3.9647V5.7417H5.0447C1.8047 5.7417 -0.0003 7.5467 -0.0003 10.7737V24.4177C-0.0003 27.6447 1.8047 29.4497 5.0447 29.4497ZM13.0017 4.4567C13.0017 3.6507 13.4257 3.2407 14.2187 3.2407H20.2757C21.0687 3.2407 21.5057 3.6637 21.5057 4.4567V5.7417H13.0017ZM10.4317 18.4437V16.7207C10.4317 15.6677 11.1427 14.9567 12.1957 14.9567H14.6287V12.5367C14.6287 11.4707 15.3397 10.7737 16.3927 10.7737H18.1157C19.1677 10.7737 19.8787 11.4707 19.8787 12.5367V14.9567H22.3127C23.3657 14.9567 24.0767 15.6677 24.0767 16.7207V18.4437C24.0767 19.4957 23.3657 20.2067 22.3127 20.2067H19.8787V22.6407C19.8787 23.7067 19.1677 24.4047 18.1157 24.4047H16.3927C15.3397 24.4047 14.6287 23.7067 14.6287 22.6407V20.2067H12.1957C11.1427 20.2067 10.4317 19.4957 10.4317 18.4437Z"
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
            d="              M3.8967 26.0584H27.0977C29.7087 26.0584 30.9937 24.8004 30.9937 22.2034V8.7094C30.9937 6.1254 29.7087 4.8674 27.0977 4.8674H22.2167V3.3364C22.2167 1.1074 20.9867 0.0004 18.7717 0.0004H12.2227C10.1037 0.0004 8.7777 1.1074 8.7777 3.3364V4.8674H3.8967C1.2987 4.8674 -0.0003 6.1254 -0.0003 8.7094V22.2034C-0.0003 24.8004 1.2987 26.0584 3.8967 26.0584ZM10.4177 3.2404C10.4177 2.1734 11.0607 1.5584 12.1817 1.5584H18.7987C19.9337 1.5584 20.5897 2.1734 20.5897 3.2404V4.8674H10.4177ZM9.2697 16.5974V14.2734C9.2697 13.5764 9.7347 13.0974 10.4457 13.0974H13.1657V10.3774C13.1657 9.6794 13.6447 9.2014 14.3417 9.2014H16.6657C17.3637 9.2014 17.8417 9.6794 17.8417 10.3774V13.0974H20.5767C21.2737 13.0974 21.7517 13.5764 21.7517 14.2734V16.5974C21.7517 17.2954 21.2737 17.7734 20.5767 17.7734H17.8417V20.4944C17.8417 21.2054 17.3637 21.6704 16.6657 21.6704H14.3417C13.6447 21.6704 13.1657 21.2054 13.1657 20.4944V17.7734H10.4457C9.7477 17.7734 9.2697 17.2954 9.2697 16.5974Z"
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
            d="              M4.4157 27.1929H27.8907C30.8297 27.1929 32.3207 25.7169 32.3207 22.8179V9.4339C32.3207 6.5349 30.8297 5.0589 27.8907 5.0589H23.3247V3.8149C23.3247 1.2309 21.9157 -0.0001 19.3457 -0.0001H12.9607C10.5137 -0.0001 8.9957 1.2309 8.9957 3.8149V5.0589H4.4157C1.5037 5.0589 -0.0003 6.5349 -0.0003 9.4339V22.8179C-0.0003 25.7169 1.5037 27.1929 4.4157 27.1929ZM11.4847 3.8149C11.4847 2.8299 12.0447 2.2829 13.0427 2.2829H19.2637C20.2757 2.2829 20.8357 2.8299 20.8357 3.8149V5.0589H11.4847ZM9.6387 17.2539V14.9569C9.6387 14.1639 10.1717 13.6309 10.9647 13.6309H13.6857V10.9239C13.6857 10.1169 14.2187 9.5839 15.0117 9.5839H17.3087C18.1017 9.5839 18.6347 10.1169 18.6347 10.9239V13.6309H21.3557C22.1617 13.6309 22.6957 14.1639 22.6957 14.9569V17.2539C22.6957 18.0469 22.1617 18.5939 21.3557 18.5939H18.6347V21.3009C18.6347 22.1069 18.1017 22.6409 17.3087 22.6409H15.0117C14.2187 22.6409 13.6857 22.1069 13.6857 21.3009V18.5939H10.9647C10.1857 18.5939 9.6387 18.0469 9.6387 17.2539Z"
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
            d="              M4.2247 26.4961H27.4257C30.2557 26.4961 31.6507 25.1291 31.6507 22.3261V9.0231C31.6507 6.2211 30.2557 4.8531 27.4257 4.8531H22.7497V3.7731C22.7497 1.2031 21.3967 0.0001 18.9217 0.0001H12.7147C10.3767 0.0001 8.8867 1.2031 8.8867 3.7731V4.8531H4.2247C1.4087 4.8531 -0.0003 6.2211 -0.0003 9.0231V22.3261C-0.0003 25.1291 1.4087 26.4961 4.2247 26.4961ZM11.0057 3.6231C11.0057 2.5841 11.6207 1.9961 12.6877 1.9961H18.9627C20.0297 1.9961 20.6307 2.5841 20.6307 3.6231V4.8531H11.0057ZM9.3927 16.8981V14.4241C9.3927 13.7131 9.8707 13.2211 10.5957 13.2211H13.3987V10.4451C13.3987 9.7071 13.8767 9.2281 14.6017 9.2281H17.0627C17.7737 9.2281 18.2657 9.7071 18.2657 10.4451V13.2211H21.0547C21.7797 13.2211 22.2717 13.7131 22.2717 14.4241V16.8981C22.2717 17.6091 21.7797 18.1011 21.0547 18.1011H18.2657V20.8901C18.2657 21.6151 17.7737 22.0941 17.0627 22.0941H14.6017C13.8767 22.0941 13.3987 21.6151 13.3987 20.8901V18.1011H10.5957C9.8847 18.1011 9.3927 17.6091 9.3927 16.8981Z"
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
            d="              M4.5667 27.7264H28.2597C31.2677 27.7264 32.8397 26.1814 32.8397 23.2014V9.7484C32.8397 6.7674 31.2677 5.2224 28.2597 5.2224H23.7477V3.8554C23.7477 1.2574 22.3127 0.0004 19.6737 0.0004H13.1527C10.5957 0.0004 9.0917 1.2574 9.0917 3.8554V5.2224H4.5667C1.5727 5.2224 -0.0003 6.7674 -0.0003 9.7484V23.2014C-0.0003 26.1814 1.5727 27.7264 4.5667 27.7264ZM11.8397 3.9644C11.8397 3.0354 12.3727 2.5154 13.3297 2.5154H19.5097C20.4667 2.5154 20.9997 3.0354 20.9997 3.9644V5.2224H11.8397ZM9.8297 17.5414V15.3804C9.8297 14.5334 10.4047 13.9454 11.2517 13.9454H13.9047V11.3064C13.9047 10.4454 14.4787 9.8714 15.3397 9.8714H17.4997C18.3617 9.8714 18.9357 10.4454 18.9357 11.3064V13.9454H21.5877C22.4497 13.9454 23.0237 14.5334 23.0237 15.3804V17.5414C23.0237 18.3884 22.4497 18.9764 21.5877 18.9764H18.9357V21.6294C18.9357 22.4904 18.3617 23.0644 17.4997 23.0644H15.3397C14.4787 23.0644 13.9047 22.4904 13.9047 21.6294V18.9764H11.2517C10.4047 18.9764 9.8297 18.3884 9.8297 17.5414Z"
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
            d="              M3.4587 25.4843H26.6877C28.9977 25.4843 30.1467 24.3633 30.1467 22.0523V8.3123C30.1467 6.0023 28.9977 4.8813 26.6877 4.8813H21.5197V2.7753C21.5197 0.9843 20.4397 0.0003 18.5667 0.0003H11.5667C9.7347 0.0003 8.6267 0.9843 8.6267 2.7753V4.8813H3.4587C1.1487 4.8813 -0.0003 6.0023 -0.0003 8.3123V22.0523C-0.0003 24.3633 1.1487 25.4843 3.4587 25.4843ZM9.6247 2.7343C9.6247 1.6273 10.3227 0.9703 11.5257 0.9703H18.5937C19.8107 0.9703 20.5217 1.6273 20.5217 2.7343V4.8813H9.6247ZM9.1057 16.2153V14.0683C9.1057 13.3983 9.5567 12.9333 10.2267 12.9333H12.8787V10.2953C12.8787 9.6253 13.3297 9.1743 13.9997 9.1743H16.1467C16.8297 9.1743 17.2817 9.6253 17.2817 10.2953V12.9333H19.9197C20.6037 12.9333 21.0547 13.3983 21.0547 14.0683V16.2153C21.0547 16.8843 20.6037 17.3493 19.9197 17.3493H17.2817V19.9883C17.2817 20.6583 16.8297 21.1233 16.1467 21.1233H13.9997C13.3297 21.1233 12.8787 20.6583 12.8787 19.9883V17.3493H10.2267C9.5567 17.3493 9.1057 16.8843 9.1057 16.2153Z"
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
            d="              M3.2267 25.1839H26.4687C28.6287 25.1839 29.6957 24.1309 29.6957 21.9709V8.0939C29.6957 5.9339 28.6287 4.8949 26.4687 4.8949H21.1507V2.4749C21.1507 0.9159 20.1527 -0.0001 18.4567 -0.0001H11.2247C9.5427 -0.0001 8.5447 0.9159 8.5447 2.4749V4.8949H3.2267C1.0797 4.8949 -0.0003 5.9339 -0.0003 8.0939V21.9709C-0.0003 24.1309 1.0797 25.1839 3.2267 25.1839ZM9.2147 2.4749C9.2147 1.3399 9.9527 0.6699 11.1977 0.6699H18.4847C19.7557 0.6699 20.4807 1.3399 20.4807 2.4749V4.8949H9.2147ZM9.0237 16.0239V13.9589C9.0237 13.3029 9.4607 12.8519 10.1307 12.8519H12.7147V10.2539C12.7147 9.5979 13.1657 9.1469 13.8357 9.1469H15.8867C16.5567 9.1469 16.9937 9.5979 16.9937 10.2539V12.8519H19.5917C20.2477 12.8519 20.6997 13.3029 20.6997 13.9589V16.0239C20.6997 16.6799 20.2477 17.1309 19.5917 17.1309H16.9937V19.7149C16.9937 20.3849 16.5567 20.8359 15.8867 20.8359H13.8357C13.1657 20.8359 12.7147 20.3849 12.7147 19.7149V17.1309H10.1307C9.4607 17.1309 9.0237 16.6799 9.0237 16.0239Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
