import { IconProps } from "../../types"

export default function StarSquareOnSquareIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.703125 32.388671875"
          className={className}
        >
          <path
            d="              M5.3597 25.1149H7.5877V27.0289C7.5877 30.4059 9.5707 32.3889 12.9607 32.3889H27.3437C30.7347 32.3889 32.7027 30.4059 32.7027 27.0289V12.6189C32.7027 9.2419 30.7347 7.2599 27.3437 7.2599H25.1157V5.3589C25.1157 1.9689 23.1327 -0.0001 19.7557 -0.0001H5.3597C1.9827 -0.0001 -0.0003 1.9689 -0.0003 5.3589V19.7559C-0.0003 23.1329 1.9827 25.1149 5.3597 25.1149ZM6.0977 20.2619C5.2637 20.2619 4.8537 19.9199 4.8537 19.0039V6.0979C4.8537 5.1949 5.2637 4.8539 6.0977 4.8539H19.0177C19.8517 4.8539 20.2617 5.1949 20.2617 6.0979V7.2599H12.9607C9.5707 7.2599 7.5877 9.2419 7.5877 12.6189V20.2619ZM13.6997 27.5349C12.8517 27.5349 12.4417 27.1799 12.4417 26.2769V13.3709C12.4417 12.4689 12.8517 12.1269 13.6997 12.1269H26.6057C27.4397 12.1269 27.8497 12.4689 27.8497 13.3709V26.2769C27.8497 27.1799 27.4397 27.5349 26.6057 27.5349ZM17.1997 25.6489L20.1527 23.4749L23.1057 25.6489C23.8847 26.2089 24.7737 25.7439 24.4177 24.6779L23.2837 21.2189L26.2367 19.0859C26.8927 18.6069 26.8517 17.4859 25.7577 17.4999L22.0797 17.5549L20.9587 14.0549C20.6587 13.0839 19.6327 13.0839 19.3317 14.0549L18.2247 17.5549L14.5607 17.4999C13.4937 17.4859 13.3987 18.6069 14.0547 19.0859L17.0217 21.2319L15.8727 24.6779C15.5317 25.6899 16.4197 26.2229 17.1997 25.6489Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.81640625 30.515625"
          className={className}
        >
          <path
            d="              M4.8267 23.7202H7.1097V25.7172C7.1097 28.8202 8.8187 30.5152 11.9357 30.5152H25.9907C29.1077 30.5152 30.8167 28.8202 30.8167 25.7172V11.6072C30.8167 8.5042 29.1077 6.8082 25.9907 6.8082H23.7067V4.7992C23.7067 1.7092 21.9977 0.0002 18.8807 0.0002H4.8267C1.7087 0.0002 -0.0003 1.6952 -0.0003 4.7992V18.9222C-0.0003 22.0252 1.7087 23.7202 4.8267 23.7202ZM5.2087 20.1932C4.1157 20.1932 3.5277 19.6462 3.5277 18.4842V5.2362C3.5277 4.0742 4.1157 3.5412 5.2087 3.5412H18.4977C19.5917 3.5412 20.1797 4.0742 20.1797 5.2362V6.8082H11.9357C8.8187 6.8082 7.1097 8.5042 7.1097 11.6072V20.1932ZM12.3187 26.9882C11.2247 26.9882 10.6367 26.4552 10.6367 25.2932V12.0312C10.6367 10.8692 11.2247 10.3362 12.3187 10.3362H25.6077C26.7017 10.3362 27.2887 10.8692 27.2887 12.0312V25.2932C27.2887 26.4552 26.7017 26.9882 25.6077 26.9882ZM15.8457 24.5412L18.9907 22.2442L22.1207 24.5412C22.8457 25.0742 23.6387 24.5822 23.3377 23.6662L22.1077 19.9742L25.2657 17.7052C25.8947 17.2542 25.7847 16.2422 24.8007 16.2562L20.9177 16.2972L19.7287 12.5782C19.4547 11.7172 18.5117 11.7172 18.2387 12.5782L17.0487 16.2972L13.1657 16.2562C12.2227 16.2422 12.0587 17.2402 12.7017 17.7192L15.8597 19.9742L14.6287 23.6662C14.3277 24.5542 15.1207 25.0882 15.8457 24.5412Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.814453125 31.5"
          className={className}
        >
          <path
            d="              M5.1137 24.4594H7.3687V26.4144C7.3687 29.6544 9.2147 31.5004 12.4687 31.5004H26.7017C29.9687 31.5004 31.8147 29.6544 31.8147 26.4144V12.1404C31.8147 8.9004 29.9687 7.0544 26.7017 7.0544H24.4587V5.0994C24.4587 1.8454 22.5997 0.0004 19.3457 0.0004H5.1137C1.8457 0.0004 -0.0003 1.8454 -0.0003 5.0994V19.3594C-0.0003 22.6134 1.8457 24.4594 5.1137 24.4594ZM5.6877 20.2204C4.7167 20.2204 4.2247 19.7964 4.2247 18.7574V5.6874C4.2247 4.6624 4.7167 4.2244 5.6877 4.2244H18.7717C19.7287 4.2244 20.2207 4.6624 20.2207 5.6874V7.0544H12.4687C9.2147 7.0544 7.3687 8.9004 7.3687 12.1404V20.2204ZM13.0427 27.2754C12.0857 27.2754 11.5937 26.8374 11.5937 25.8124V12.7424C11.5937 11.7164 12.0857 11.2794 13.0427 11.2794H26.1407C27.0977 11.2794 27.5897 11.7164 27.5897 12.7424V25.8124C27.5897 26.8374 27.0977 27.2754 26.1407 27.2754ZM16.5707 25.1284L19.6057 22.9004L22.6407 25.1284C23.4067 25.6754 24.2407 25.1974 23.9117 24.1994L22.7227 20.6304L25.7847 18.4294C26.4137 17.9644 26.3457 16.8984 25.3067 16.9124L21.5337 16.9664L20.3847 13.3574C20.0837 12.4414 19.1137 12.4414 18.8127 13.3574L17.6777 16.9664L13.9047 16.9124C12.8927 16.8984 12.7697 17.9644 13.4117 18.4294L16.4747 20.6444L15.2847 24.1994C14.9707 25.1564 15.8047 25.6894 16.5707 25.1284Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.423828125 27.75390625"
          className={className}
        >
          <path
            d="              M4.0337 21.7927H6.6307V23.7477C6.6307 26.4007 7.9847 27.7537 10.6637 27.7537H24.3907C27.0567 27.7537 28.4237 26.3867 28.4237 23.7477V9.9527C28.4237 7.3147 27.0567 5.9607 24.3907 5.9607H21.7927V3.9917C21.7927 1.3667 20.4257 -0.0003 17.7597 -0.0003H4.0337C1.3537 -0.0003 -0.0003 1.3397 -0.0003 3.9917V17.8007C-0.0003 20.4397 1.3537 21.7927 4.0337 21.7927ZM4.0607 20.0977C2.5297 20.0977 1.6957 19.2907 1.6957 17.7047V4.0877C1.6957 2.5017 2.5297 1.6957 4.0607 1.6957H17.7327C19.2367 1.6957 20.0977 2.5017 20.0977 4.0877V5.9607H10.6637C7.9847 5.9607 6.6307 7.3007 6.6307 9.9527V20.0977ZM10.6917 26.0587C9.1597 26.0587 8.3267 25.2387 8.3267 23.6657V10.0347C8.3267 8.4627 9.1597 7.6427 10.6917 7.6427H24.3637C25.8677 7.6427 26.7287 8.4627 26.7287 10.0347V23.6657C26.7287 25.2387 25.8677 26.0587 24.3637 26.0587ZM13.9867 23.0097L17.5407 20.4117L21.0957 23.0097C21.6697 23.4337 22.2847 22.9957 22.0527 22.3257L20.6587 18.1287L24.2537 15.5727C24.7457 15.2167 24.5957 14.4237 23.8707 14.4237L19.4687 14.4507L18.1287 10.2537C17.9237 9.6117 17.1717 9.6117 16.9667 10.2537L15.6137 14.4507L11.2107 14.4237C10.5137 14.4237 10.3227 15.1897 10.8557 15.5727L14.4237 18.1287L13.0427 22.3257C12.8247 22.9957 13.4257 23.4337 13.9867 23.0097Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.61328125 29.298828125"
          className={className}
        >
          <path
            d="              M4.4847 22.805H6.8087V24.869C6.8087 27.781 8.3267 29.299 11.2927 29.299H25.1287C28.0817 29.299 29.6137 27.781 29.6137 24.869V10.924C29.6137 8.012 28.0817 6.494 25.1287 6.494H22.8047V4.43C22.8047 1.518 21.2737 0 18.3207 0H4.4847C1.5317 0 -0.0003 1.504 -0.0003 4.43V18.361C-0.0003 21.287 1.5317 22.805 4.4847 22.805ZM4.6487 20.125C3.3767 20.125 2.6797 19.469 2.6797 18.143V4.662C2.6797 3.336 3.3767 2.666 4.6487 2.666H18.1697C19.4277 2.666 20.1387 3.336 20.1387 4.662V6.494H11.2927C8.3267 6.494 6.8087 8.012 6.8087 10.924V20.125ZM11.4437 26.619C10.1717 26.619 9.4887 25.963 9.4887 24.637V11.156C9.4887 9.83 10.1717 9.174 11.4437 9.174H24.9647C26.2227 9.174 26.9337 9.83 26.9337 11.156V24.637C26.9337 25.963 26.2227 26.619 24.9647 26.619ZM14.9847 23.816L18.2247 21.437L21.4647 23.816C22.1617 24.322 22.9007 23.816 22.6267 22.982L21.3417 19.154L24.6097 16.816C25.2247 16.365 25.0747 15.436 24.1717 15.449L20.1527 15.477L18.9357 11.635C18.6757 10.842 17.7737 10.842 17.5277 11.635L16.2967 15.477L12.2777 15.449C11.3887 15.436 11.2107 16.365 11.8397 16.816L15.1077 19.154L13.8357 22.982C13.5627 23.803 14.3007 24.322 14.9847 23.816Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.9296875 28.642578125"
          className={className}
        >
          <path
            d="              M4.2927 22.3129H6.6307V24.4039C6.6307 27.2209 8.0527 28.6429 10.9237 28.6429H24.6507C27.4937 28.6429 28.9297 27.2209 28.9297 24.4039V10.5679C28.9297 7.7519 27.4937 6.3299 24.6507 6.3299H22.2987V4.2379C22.2987 1.4219 20.8637 -0.0001 18.0197 -0.0001H4.2927C1.4217 -0.0001 -0.0003 1.4219 -0.0003 4.2379V18.0739C-0.0003 20.8909 1.4217 22.3129 4.2927 22.3129ZM4.3207 20.1109C2.9527 20.1109 2.2017 19.3729 2.2017 17.9509V4.3609C2.2017 2.9399 2.9527 2.2009 4.3207 2.2009H17.9787C19.3317 2.2009 20.0977 2.9399 20.0977 4.3609V6.3299H10.9237C8.0527 6.3299 6.6307 7.7379 6.6307 10.5679V20.1109ZM10.9517 26.4419C9.5977 26.4419 8.8317 25.7029 8.8317 24.2809V10.6919C8.8317 9.2699 9.5977 8.5309 10.9517 8.5309H24.6097C25.9627 8.5309 26.7287 9.2699 26.7287 10.6919V24.2809C26.7287 25.7029 25.9627 26.4419 24.6097 26.4419ZM14.5057 23.4199L17.8007 20.9999L21.0957 23.4199C21.7657 23.9119 22.4767 23.3929 22.2167 22.6129L20.9047 18.7169L24.2407 16.3379C24.8557 15.8869 24.6637 14.9979 23.8167 15.0119L19.7287 15.0389L18.4707 11.1289C18.2387 10.3629 17.3637 10.3629 17.1177 11.1289L15.8727 15.0389L11.7847 15.0119C10.9377 14.9979 10.7327 15.8869 11.3617 16.3379L14.6837 18.7169L13.3847 22.6129C13.1247 23.3929 13.8357 23.9119 14.5057 23.4199Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.1328125 29.818359375"
          className={className}
        >
          <path
            d="              M4.6347 23.1878H6.9317V25.2248C6.9317 28.2328 8.5447 29.8188 11.5667 29.8188H25.4977C28.5197 29.8188 30.1327 28.2188 30.1327 25.2248V11.2108C30.1327 8.2168 28.5197 6.6168 25.4977 6.6168H23.2017V4.5798C23.2017 1.5858 21.5877 -0.0002 18.5667 -0.0002H4.6347C1.5997 -0.0002 -0.0003 1.5858 -0.0003 4.5798V18.5938C-0.0003 21.6018 1.5997 23.1878 4.6347 23.1878ZM4.8947 20.1528C3.6917 20.1528 3.0487 19.5368 3.0487 18.2798V4.9078C3.0487 3.6508 3.6917 3.0348 4.8947 3.0348H18.3067C19.4957 3.0348 20.1527 3.6508 20.1527 4.9078V6.6168H11.5667C8.5447 6.6168 6.9317 8.2168 6.9317 11.2108V20.1528ZM11.8267 26.7698C10.6227 26.7698 9.9807 26.1678 9.9807 24.9098V11.5258C9.9807 10.2678 10.6227 9.6658 11.8267 9.6658H25.2387C26.4277 9.6658 27.0837 10.2678 27.0837 11.5258V24.9098C27.0837 26.1678 26.4277 26.7698 25.2387 26.7698ZM15.3537 24.1168L18.5527 21.7798L21.7517 24.1168C22.4627 24.6508 23.2147 24.1448 22.9277 23.2698L21.6697 19.4958L24.8967 17.1988C25.5117 16.7478 25.3747 15.7778 24.4457 15.7908L20.4807 15.8318L19.2777 12.0308C19.0177 11.2108 18.0877 11.2108 17.8277 12.0308L16.6247 15.8318L12.6597 15.7908C11.7437 15.7778 11.5797 16.7348 12.2087 17.1988L15.4357 19.5098L14.1777 23.2698C13.8907 24.1168 14.6567 24.6508 15.3537 24.1168Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.75390625 26.578125"
          className={className}
        >
          <path
            d="              M3.6917 21.1228H6.6307V22.9138C6.6307 25.3208 7.9027 26.5778 10.3227 26.5778H24.0627C26.4827 26.5778 27.7537 25.2928 27.7537 22.9138V9.1468C27.7537 6.7538 26.4827 5.4688 24.0627 5.4688H21.1227V3.6778C21.1227 1.2848 19.8517 -0.0002 17.4317 -0.0002H3.6917C1.2717 -0.0002 -0.0003 1.2578 -0.0003 3.6778V17.4448C-0.0003 19.8518 1.2717 21.1228 3.6917 21.1228ZM3.7187 20.0978C1.9417 20.0978 1.0117 19.1818 1.0117 17.3908V3.7328C1.0117 1.9418 1.9417 1.0118 3.7187 1.0118H17.3907C19.1137 1.0118 20.0977 1.9418 20.0977 3.7328V5.4688H10.3227C7.9027 5.4688 6.6307 6.7268 6.6307 9.1468V20.0978ZM10.3497 25.5668C8.5727 25.5668 7.6427 24.6368 7.6427 22.8598V9.1878C7.6427 7.4098 8.5727 6.4808 10.3497 6.4808H24.0347C25.7437 6.4808 26.7287 7.4098 26.7287 9.1878V22.8598C26.7287 24.6368 25.7437 25.5668 24.0347 25.5668ZM13.2887 22.4898L17.1997 19.6328L21.1097 22.4898C21.5197 22.7778 21.9847 22.4898 21.8207 21.9708L20.3027 17.3628L24.2407 14.5608C24.5547 14.3278 24.4727 13.6988 23.9527 13.6988L19.1137 13.7128L17.6367 9.1058C17.4867 8.6538 16.9117 8.6538 16.7617 9.1058L15.2847 13.7128L10.4457 13.6988C9.9527 13.6988 9.7887 14.2868 10.1717 14.5738L14.0957 17.3628L12.5917 21.9708C12.4277 22.4898 12.8927 22.7778 13.2887 22.4898Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.3984375 25.990234375"
          className={className}
        >
          <path
            d="              M3.5137 20.768H6.6307V22.477C6.6307 24.773 7.8477 25.99 10.1447 25.99H23.8987C26.1817 25.99 27.3987 24.732 27.3987 22.477V8.723C27.3987 6.467 26.1817 5.209 23.8987 5.209H20.7677V3.514C20.7677 1.258 19.5507 0 17.2677 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V17.268C-0.0003 19.551 1.2167 20.768 3.5137 20.768ZM3.5407 20.098C1.6547 20.098 0.6697 19.127 0.6697 17.227V3.541C0.6697 1.654 1.6547 0.67 3.5407 0.67H17.2267C19.0447 0.67 20.0977 1.654 20.0977 3.541V5.209H10.1447C7.8477 5.209 6.6307 6.439 6.6307 8.723V20.098ZM10.1717 25.32C8.2847 25.32 7.3007 24.336 7.3007 22.449V8.764C7.3007 6.863 8.2847 5.879 10.1717 5.879H23.8577C25.6757 5.879 26.7287 6.863 26.7287 8.764V22.449C26.7287 24.336 25.6757 25.32 23.8577 25.32ZM12.9197 22.217L17.0217 19.236L21.1097 22.217C21.4377 22.436 21.8207 22.23 21.6837 21.793L20.1117 16.98L24.2267 14.041C24.4457 13.877 24.4047 13.33 23.9807 13.33H18.9217L17.3767 8.531C17.2537 8.176 16.7757 8.176 16.6527 8.531L15.1077 13.33H10.0487C9.6657 13.33 9.5157 13.822 9.8167 14.055L13.9177 16.98L12.3727 21.793C12.2227 22.23 12.6187 22.436 12.9197 22.217Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
