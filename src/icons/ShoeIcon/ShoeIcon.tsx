import { IconProps } from "../../types"

export default function ShoeIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46.8125 22.90061500567182"
          className={className}
        >
          <path
            d="              M23.2147 1.2172C19.8787 -0.7248 16.4887 -0.4788 13.8767 2.9392C12.4007 4.8132 11.2927 5.4002 9.8987 5.4002C8.6137 5.4002 7.9027 5.1412 6.8227 4.5532C3.7047 2.9122 -0.0003 4.6762 -0.0003 8.5042V15.0392C-0.0003 21.3142 4.1977 22.9002 7.3147 22.9002H29.9007C35.0137 22.9002 38.0347 22.1212 41.8497 19.9752C45.1307 18.1702 46.8127 15.6822 46.8127 12.8382C46.8127 8.7642 43.8047 5.8242 39.6487 5.8242C37.9397 5.8242 34.3987 6.3982 33.2087 6.3982C32.1287 6.3982 32.0877 6.4122 30.9397 5.7422ZM6.5217 15.0252C5.1407 15.0252 4.4157 14.8482 4.0057 14.4242V8.4902C4.0057 7.9842 4.4297 7.8342 4.8127 8.0392C6.2477 8.7642 7.8207 9.3932 9.8987 9.3932C12.4007 9.3932 14.9977 8.0392 17.0487 5.3592C18.3207 3.7192 19.1267 3.5552 20.8637 4.4982L19.1547 6.8092C18.7717 7.3422 18.8127 8.1212 19.3317 8.5452C19.8377 8.9692 20.6587 8.9552 21.0817 8.3812L23.0237 5.7422L24.0347 6.3302L22.4497 8.4632C22.0117 9.0232 22.0797 9.7752 22.6137 10.1862C23.1877 10.6502 23.9397 10.6092 24.3767 10.0082L26.1677 7.5612L27.1797 8.1482L25.7437 10.0762C25.3337 10.6372 25.3887 11.3752 25.8947 11.7992C26.4417 12.2772 27.2067 12.2362 27.6447 11.6352L29.3127 9.3792C30.8707 10.2542 31.7047 10.3912 33.2087 10.3912C34.6997 10.3912 38.2677 9.8302 39.6207 9.8302C39.7847 9.8302 39.9357 9.8302 40.0727 9.8442H39.7307C40.8107 9.8852 41.2757 11.2662 39.7717 12.0722L37.3247 13.3852C35.1507 14.5472 33.5777 15.0252 29.9007 15.0252ZM7.2867 18.8812C5.7147 18.8812 4.6077 18.5802 4.1977 16.8982C4.8677 17.2132 5.5507 17.3502 6.5217 17.3502H29.9007C33.7697 17.3502 35.7797 16.7892 38.2127 15.4902L40.1267 14.4652C41.6307 13.6582 42.4647 12.7292 42.6697 11.7992C42.7517 12.1002 42.7797 12.4552 42.7797 12.8382C42.7797 14.3012 41.9177 15.4082 39.9217 16.5022C36.6267 18.3342 34.4527 18.8812 29.9007 18.8812Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.146484375 20.878315243742268"
          className={className}
        >
          <path
            d="              M21.5337 1.0816C18.5527 -0.6414 15.6547 -0.4224 13.3437 2.5856C11.8267 4.5266 10.4727 5.2516 8.9277 5.2516C7.5467 5.2516 6.6997 5.0056 5.6057 4.4586C2.9937 3.1866 -0.0003 4.5406 -0.0003 7.6986V14.0286C-0.0003 19.4696 3.4867 20.8786 6.3577 20.8786H28.5337C33.2777 20.8786 36.0527 20.1676 39.6757 18.1436C42.6837 16.4756 44.1467 14.3016 44.1467 11.7866C44.1467 8.1906 41.5487 5.6616 37.8847 5.6616C36.2847 5.6616 32.8397 6.2216 31.6097 6.2216C30.4477 6.2216 30.2837 6.1946 29.0667 5.4836ZM19.9607 3.7606L20.1117 3.8566L18.3477 6.2766C18.0197 6.7006 18.0607 7.3296 18.4847 7.6716C18.8947 8.0126 19.5647 7.9996 19.8927 7.5346L21.8477 4.8686L23.1877 5.6346L21.5467 7.8626C21.2047 8.3276 21.2597 8.9156 21.6837 9.2576C22.1617 9.6396 22.7497 9.5986 23.1057 9.1206L24.9237 6.6456L26.2497 7.4116L24.7597 9.4346C24.4177 9.8996 24.4587 10.4876 24.8827 10.8296C25.3207 11.2126 25.9357 11.1716 26.2907 10.6926L27.9727 8.4096C29.4087 9.1886 30.1877 9.3116 31.6097 9.3116C33.0587 9.3116 36.5177 8.7646 37.8577 8.7646C38.5957 8.7646 39.2107 8.8876 39.6897 9.1346H38.8417C39.7847 9.3936 39.8807 10.6246 38.0217 11.6086L35.5877 12.8936C33.5507 13.9876 32.0197 14.4116 28.5337 14.4116H5.5237C4.2107 14.4116 3.4997 14.2476 3.1037 13.8506V7.6846C3.1037 7.1106 3.5957 6.9326 4.0337 7.1516C5.4277 7.8216 6.9317 8.3546 8.9277 8.3546C11.3477 8.3546 13.8227 7.0426 15.8047 4.4716C17.1587 2.7356 18.0197 2.6536 19.9607 3.7606ZM6.3437 17.7746C4.8267 17.7746 3.7597 17.4466 3.3227 15.9286C3.9517 16.2166 4.5937 16.3396 5.5237 16.3396H28.5337C32.1837 16.3396 34.0977 15.8196 36.3947 14.6026L38.5687 13.4816C40.0587 12.6886 40.7697 11.8956 40.9607 10.9936C41.0017 11.2396 41.0297 11.4996 41.0297 11.7866C41.0297 13.2496 40.1817 14.3436 38.1857 15.4366C34.9867 17.2276 32.8537 17.7746 28.5337 17.7746Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.5546875 21.93945680027505"
          className={className}
        >
          <path
            d="              M22.4217 1.1579C19.2497 -0.6871 16.0917 -0.4551 13.6307 2.7849C12.1267 4.6719 10.9097 5.3419 9.4477 5.3419C8.1077 5.3419 7.3417 5.0679 6.2477 4.5079C3.3637 3.0449 -0.0003 4.6169 -0.0003 8.1309V14.5699C-0.0003 20.4489 3.8557 21.9399 6.8637 21.9399H29.2577C34.1937 21.9399 37.1057 21.2009 40.8247 19.1089C43.9687 17.3729 45.5547 15.0349 45.5547 12.3419C45.5547 8.4999 42.7387 5.7519 38.8147 5.7519C37.1597 5.7519 33.6597 6.3129 32.4567 6.3129C31.3357 6.3129 31.2407 6.3129 30.0507 5.6149ZM6.0567 14.7339C4.7027 14.7339 3.9787 14.5699 3.5817 14.1599V8.1039C3.5817 7.5699 4.0337 7.4059 4.4437 7.6249C5.8657 8.3219 7.3967 8.9099 9.4477 8.9099C11.9087 8.9099 14.4377 7.5699 16.4607 4.9449C17.7867 3.2359 18.6207 3.1269 20.5217 4.1929L18.7717 6.5589C18.4157 7.0369 18.4567 7.7479 18.9217 8.1309C19.3867 8.5269 20.1387 8.4999 20.5217 7.9809L22.4767 5.3279L23.6387 5.9979L22.0257 8.1859C21.6287 8.7049 21.6977 9.3749 22.1757 9.7439C22.7087 10.1819 23.3787 10.1409 23.7757 9.5939L25.5797 7.1329L26.7427 7.8029L25.2797 9.7849C24.8967 10.2909 24.9517 10.9609 25.4157 11.3439C25.9087 11.7809 26.6057 11.7399 27.0017 11.1929L28.6837 8.9239C30.1737 9.7439 30.9807 9.8809 32.4567 9.8809C33.9337 9.8809 37.4477 9.3339 38.7867 9.3339C39.3067 9.3339 39.7717 9.3889 40.1547 9.5119H39.3207C40.3317 9.6619 40.6187 10.9609 38.9517 11.8629L36.5037 13.1619C34.3987 14.2829 32.8397 14.7339 29.2577 14.7339ZM6.8497 18.3709C5.2907 18.3709 4.2107 18.0429 3.7867 16.4429C4.4297 16.7439 5.0997 16.8669 6.0567 16.8669H29.2577C33.0177 16.8669 34.9867 16.3339 37.3517 15.0759L39.3887 13.9959C40.8927 13.2029 41.6717 12.3279 41.8637 11.4119C41.9177 11.6989 41.9587 11.9999 41.9587 12.3419C41.9587 13.8049 41.0977 14.9119 39.1017 16.0059C35.8477 17.8109 33.7017 18.3709 29.2577 18.3709Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.427734375 18.138390825784477"
          className={className}
        >
          <path
            d="              M19.2087 0.9116C16.7347 -0.5374 14.4927 -0.3464 12.5917 2.1146C11.0057 4.1516 9.3377 5.0406 7.6157 5.0406C6.1117 5.0406 5.0727 4.7396 3.9647 4.1926C2.1187 3.3316 -0.0003 4.2206 -0.0003 6.4626V12.8476C-0.0003 16.8256 2.2837 18.1386 4.9357 18.1386H26.8657C30.8847 18.1386 33.2907 17.4956 36.6407 15.6366C39.2797 14.1596 40.4277 12.4236 40.4277 10.3586C40.4277 7.3926 38.4317 5.4236 35.3827 5.4236C33.9197 5.4236 30.6247 5.9566 29.3537 5.9566C28.0817 5.9566 27.7677 5.8886 26.4547 5.1366ZM18.3617 2.3746L19.0857 2.7986L17.1717 5.4646C16.9667 5.7376 17.0077 6.1346 17.2677 6.3396C17.5407 6.5446 17.9517 6.5176 18.1567 6.2436L20.1657 3.4276L22.0387 4.5076L20.2757 6.9546C20.0567 7.2556 20.1117 7.6106 20.3707 7.8166C20.6717 8.0486 21.0407 8.0216 21.2597 7.7206L23.1057 5.1366L24.9517 6.2166L23.3377 8.4586C23.1327 8.7456 23.1597 9.1146 23.4337 9.3196C23.7067 9.5526 24.0897 9.5116 24.3087 9.2246L26.0317 6.8316C27.3437 7.5426 28.0137 7.6516 29.3537 7.6516C30.7347 7.6516 34.0427 7.1186 35.3687 7.1186C36.8187 7.1186 37.7887 7.5696 38.3087 8.4726H37.8297C38.3907 8.9376 38.2127 9.9486 36.2437 10.9746L33.0727 12.5466C31.3767 13.4216 29.9417 13.7496 26.8657 13.7496H3.8687C2.7757 13.7496 2.1187 13.6266 1.7087 13.3126C1.6957 13.1616 1.6957 13.0116 1.6957 12.8476V6.4626C1.6957 5.6016 2.4337 5.3146 3.1037 5.6696C4.3887 6.2716 5.7557 6.7226 7.6157 6.7226C9.8437 6.7226 12.0727 5.5466 13.9317 3.1406C15.3397 1.3356 16.4067 1.2396 18.3617 2.3746ZM4.9357 16.4426C3.4047 16.4426 2.3787 15.9916 1.9277 14.6656C2.4887 14.8986 3.0487 14.9936 3.8687 14.9936H26.8657C30.0237 14.9936 31.6917 14.6106 33.6737 13.6126L36.8457 12.0676C37.9117 11.5216 38.4587 11.0016 38.7327 10.4006C38.7327 11.8906 37.9257 12.9976 35.8337 14.1596C32.7307 15.8826 30.6527 16.4426 26.8657 16.4426Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.4375 19.59531504038831"
          className={className}
        >
          <path
            d="              M20.4527 1.0016C17.7047 -0.5984 15.1207 -0.3794 13.0157 2.3686C11.4567 4.3516 9.9397 5.1576 8.3127 5.1576C6.8767 5.1576 5.9197 4.9256 4.8267 4.4056C2.5427 3.3536 -0.0003 4.4466 -0.0003 7.1816V13.3886C-0.0003 18.2826 3.0217 19.5956 5.7427 19.5956H27.6447C32.1697 19.5956 34.7947 18.9116 38.2947 16.9706C41.1117 15.3976 42.4377 13.4156 42.4377 11.1326C42.4377 7.8376 40.1137 5.5676 36.7497 5.5676C35.2187 5.5676 31.8277 6.1146 30.5837 6.1146C29.3677 6.1146 29.1207 6.0606 27.8637 5.3356ZM19.1677 3.1886L19.6327 3.4626L17.8277 5.9376C17.5407 6.3066 17.5817 6.8396 17.9377 7.1266C18.2927 7.4136 18.8537 7.3866 19.1267 7.0036L21.0957 4.3106L22.6407 5.2126L20.9727 7.4816C20.6717 7.8926 20.7267 8.3846 21.0817 8.6576C21.5057 8.9996 21.9977 8.9586 22.2987 8.5486L24.1177 6.0606L25.6487 6.9486L24.1307 9.0266C23.8297 9.4236 23.8707 9.9296 24.2267 10.2026C24.6097 10.5446 25.1157 10.5036 25.4157 10.0936L27.1117 7.7826C28.4647 8.5076 29.2167 8.6306 30.5837 8.6306C32.0057 8.6306 35.4097 8.0976 36.7227 8.0976C37.6657 8.0976 38.3907 8.2886 38.9097 8.6856H38.2677C39.1287 9.0816 38.9787 10.2166 36.9137 11.3236L34.4807 12.5956C32.5257 13.6346 31.0217 14.0306 27.6447 14.0306H4.8677C3.6097 14.0306 2.9257 13.8806 2.5297 13.4976C2.5297 13.3886 2.5297 13.3886 2.5297 13.3886V7.1676C2.5297 6.5526 3.0487 6.3606 3.5407 6.6066C4.8947 7.2226 6.3577 7.6876 8.3127 7.6876C10.6637 7.6876 13.0707 6.4156 15.0117 3.8996C16.3657 2.1636 17.2537 2.0816 19.1677 3.1886ZM5.7287 17.0796C4.2517 17.0796 3.2127 16.7376 2.7617 15.3296C3.3637 15.5896 3.9927 15.6986 4.8677 15.6986H27.6447C31.1717 15.6986 33.0177 15.2206 35.2327 14.0586L37.5707 12.8556C39.0337 12.0896 39.6617 11.4056 39.8677 10.5306C39.8807 10.7226 39.8947 10.9136 39.8947 11.1326C39.8947 12.5816 39.0747 13.6756 37.0777 14.7696C33.9197 16.5196 31.8277 17.0796 27.6447 17.0796Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.48046875 18.87556375920774"
          className={className}
        >
          <path
            d="              M19.8517 0.952C17.2407 -0.566 14.8207 -0.361 12.8247 2.237C11.2517 4.247 9.6387 5.108 7.9707 5.108C6.4937 5.108 5.4827 4.876 4.3887 4.37C2.2837 3.454 -0.0003 4.397 -0.0003 6.899V13.024C-0.0003 17.618 2.7617 18.876 5.4007 18.876H27.1527C31.5407 18.876 34.0837 18.206 37.5157 16.305C40.2227 14.788 41.4807 12.915 41.4807 10.755C41.4807 7.637 39.3067 5.505 36.1077 5.505C34.6177 5.505 31.2677 6.038 30.0097 6.038C28.7517 6.038 28.4787 5.983 27.1797 5.245ZM18.7307 2.866L19.3597 3.235L17.5277 5.737C17.2817 6.065 17.3087 6.557 17.6367 6.803C17.9517 7.063 18.4567 7.036 18.7027 6.708L20.6857 4.001L22.3397 4.958L20.6587 7.268C20.3847 7.637 20.4257 8.075 20.7537 8.321C21.1227 8.622 21.5747 8.594 21.8477 8.225L23.6657 5.723L25.3207 6.68L23.7757 8.799C23.5017 9.155 23.5297 9.606 23.8577 9.852C24.1997 10.153 24.6637 10.112 24.9377 9.756L26.6327 7.432C27.9317 8.13 28.6697 8.239 30.0097 8.239C31.4177 8.239 34.7817 7.706 36.0937 7.706C37.1187 7.706 37.8987 7.952 38.4317 8.43L37.9527 8.417C38.7597 8.909 38.4727 9.989 36.2847 11.151L33.8517 12.409C31.9517 13.421 30.4607 13.803 27.1527 13.803H4.5117C3.2817 13.803 2.5977 13.667 2.2017 13.297C2.2017 13.215 2.2017 13.12 2.2017 13.024V6.885C2.2017 6.243 2.7477 6.038 3.2537 6.284C4.5937 6.872 6.0427 7.309 7.9707 7.309C10.2817 7.309 12.6467 6.051 14.5607 3.577C15.9137 1.84 16.8167 1.758 18.7307 2.866ZM5.3867 16.674C3.9237 16.674 2.8987 16.333 2.4607 14.979C3.0347 15.239 3.6507 15.335 4.5117 15.335H27.1527C30.5977 15.335 32.4157 14.87 34.5767 13.735L37.0097 12.505C38.4587 11.753 39.0197 11.137 39.2387 10.29C39.2517 10.426 39.2657 10.59 39.2657 10.755C39.2657 12.204 38.4457 13.284 36.4497 14.391C33.3317 16.128 31.2537 16.674 27.1527 16.674Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.17578125 20.150757641466228"
          className={className}
        >
          <path
            d="              M20.9177 1.0379C18.0747 -0.6171 15.3537 -0.3981 13.1527 2.4589C11.6207 4.4279 10.1587 5.2069 8.5857 5.2069C7.1637 5.2069 6.2617 4.9609 5.1547 4.4419C2.7347 3.2799 -0.0003 4.4829 -0.0003 7.4089V13.6699C-0.0003 18.7969 3.2267 20.1509 6.0017 20.1509H28.0277C32.6487 20.1509 35.3417 19.4539 38.8827 17.4709C41.7947 15.8719 43.1757 13.7929 43.1757 11.4149C43.1757 7.9969 40.7287 5.6179 37.2287 5.6179C35.6697 5.6179 32.2657 6.1649 31.0217 6.1649C29.8317 6.1649 29.6267 6.1239 28.3827 5.3989ZM19.5097 3.4439L19.8377 3.6349L18.0467 6.0819C17.7457 6.4789 17.7867 7.0529 18.1697 7.3679C18.5527 7.6819 19.1547 7.6549 19.4547 7.2449L21.4237 4.5509L22.8867 5.3989L21.2187 7.6549C20.9047 8.0919 20.9587 8.6119 21.3417 8.9259C21.7797 9.2819 22.3267 9.2409 22.6547 8.8029L24.4587 6.3149L25.9087 7.1489L24.4047 9.2129C24.0897 9.6369 24.1307 10.1699 24.4997 10.4849C24.9097 10.8399 25.4707 10.7989 25.7987 10.3619L27.4807 8.0649C28.8617 8.8029 29.6407 8.9259 31.0217 8.9259C32.4567 8.9259 35.8887 8.3929 37.2147 8.3929C38.0767 8.3929 38.7597 8.5569 39.2657 8.8849H38.5137C39.4157 9.2269 39.3617 10.4029 37.3927 11.4559L34.9587 12.7269C32.9627 13.7929 31.4587 14.2039 28.0277 14.2039H5.1547C3.8687 14.2039 3.1717 14.0399 2.7757 13.6569V7.3949C2.7757 6.7929 3.2817 6.6159 3.7457 6.8479C5.1267 7.4769 6.6037 7.9829 8.5857 7.9829C10.9647 7.9829 13.3987 6.6979 15.3537 4.1409C16.7067 2.4179 17.5817 2.3359 19.5097 3.4439ZM5.9887 17.3749C4.4977 17.3749 3.4457 17.0469 3.0077 15.5839C3.6227 15.8719 4.2517 15.9809 5.1547 15.9809H28.0277C31.6097 15.9809 33.4827 15.4889 35.7387 14.2989L38.0077 13.1369C39.4847 12.3579 40.1407 11.6199 40.3317 10.7309C40.3727 10.9499 40.3867 11.1679 40.3867 11.4149C40.3867 12.8769 39.5527 13.9709 37.5567 15.0649C34.3847 16.8289 32.2657 17.3749 28.0277 17.3749Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.046875 17.149608978849237"
          className={className}
        >
          <path
            d="              M18.3747 0.8393C16.0647 -0.5007 14.0547 -0.3097 12.3047 1.9463C10.6777 4.0113 8.9417 4.9403 7.1507 4.9403C5.5917 4.9403 4.5117 4.5443 3.4047 3.9563C1.9007 3.1773 -0.0003 3.9833 -0.0003 5.8973V12.5973C-0.0003 15.7823 1.6407 17.1493 4.3337 17.1493H26.4957C29.9957 17.1493 32.2387 16.5483 35.4927 14.7433C38.0077 13.3353 39.0467 11.7763 39.0467 9.8483C39.0467 7.0593 37.2837 5.3233 34.4117 5.3233C33.0177 5.3233 29.7777 5.8563 28.5057 5.8563C27.2067 5.8563 26.8247 5.7743 25.4847 4.9953ZM17.8557 1.7273L18.7307 2.2333L16.7067 5.1183C16.5707 5.3093 16.6117 5.5833 16.8027 5.7203C16.9937 5.8703 17.2677 5.8153 17.4177 5.6243L19.4957 2.6843L21.6287 3.9293L19.7837 6.5403C19.6327 6.7453 19.6737 7.0053 19.8657 7.1413C20.0707 7.2923 20.3297 7.2513 20.4807 7.0463L22.3807 4.3663L24.4727 5.5833L22.7777 8.0033C22.6407 8.2083 22.6677 8.4683 22.8597 8.6043C23.0647 8.7553 23.3247 8.7143 23.4747 8.5093L25.2387 6.0203C26.5507 6.7723 27.1527 6.8683 28.5057 6.8683C29.8457 6.8683 33.0857 6.3483 34.4117 6.3483C36.3127 6.3483 37.4607 7.0733 37.8707 8.5363L37.6797 8.5503C37.8987 8.9733 37.8707 9.8893 36.2027 10.7233L32.0467 12.7203C30.5977 13.4313 29.2577 13.6633 26.4957 13.6633H3.0347C2.1327 13.6633 1.5037 13.5813 1.0527 13.3623C1.0257 13.1303 1.0117 12.8703 1.0117 12.5973V5.8973C1.0117 4.7633 1.9957 4.3523 2.8987 4.8453C4.1157 5.4873 5.3867 5.9523 7.1507 5.9523C9.2557 5.9523 11.3067 4.8723 13.0977 2.5613C14.5747 0.6753 15.8597 0.5653 17.8557 1.7273ZM4.3337 16.1383C2.7207 16.1383 1.6817 15.5633 1.2437 14.2513C1.7497 14.4563 2.2557 14.5383 3.0347 14.5383H26.4957C29.2437 14.5383 30.7477 14.2783 32.4707 13.4443L36.6137 11.4893C37.2697 11.1753 37.7067 10.8193 37.9807 10.4503C37.8027 11.7633 36.9547 12.7613 35.0137 13.8543C31.9237 15.5633 29.8457 16.1383 26.4957 16.1383Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.3359375 16.650099080951865"
          className={className}
        >
          <path
            d="              M17.9377 0.8176C15.7367 -0.4804 13.8357 -0.3034 12.1547 1.8576C10.5137 3.9486 8.7497 4.8926 6.9047 4.8926C5.3317 4.8926 4.2387 4.4546 3.1177 3.8396C1.7907 3.0876 -0.0003 3.8536 -0.0003 5.6036V12.4806C-0.0003 15.2556 1.3127 16.6496 4.0197 16.6496H26.3047C29.5447 16.6496 31.7047 16.0626 34.9047 14.2846C37.3657 12.9036 38.3357 11.4546 38.3357 9.5956C38.3357 6.8886 36.6817 5.2746 33.9197 5.2746C32.5387 5.2746 29.3397 5.7946 28.0547 5.7946C26.7557 5.7946 26.3457 5.7126 24.9787 4.9336ZM17.6097 1.3926L18.5527 1.9526L16.4747 4.9336C16.3657 5.0836 16.4067 5.2886 16.5567 5.3986C16.7067 5.5216 16.9117 5.4666 17.0347 5.3026L19.1547 2.3086L21.4097 3.6206L19.5237 6.3276C19.4277 6.4786 19.4547 6.6836 19.6057 6.7926C19.7697 6.9016 19.9747 6.8606 20.0837 6.6966L21.9977 3.9626L24.2267 5.2746L22.4907 7.7766C22.3807 7.9276 22.4217 8.1326 22.5727 8.2416C22.7227 8.3516 22.9277 8.2966 23.0507 8.1466L24.8277 5.6166C26.1547 6.3686 26.7017 6.4646 28.0547 6.4646C29.3807 6.4646 32.5937 5.9446 33.9197 5.9446C36.1487 5.9446 37.3787 6.9156 37.6247 8.8436C37.6247 9.2806 37.4477 9.9916 36.1757 10.5936L31.5277 12.8086C30.2147 13.4376 28.9027 13.6146 26.3047 13.6146H2.5977C1.8187 13.6146 1.2027 13.5736 0.7387 13.4096C0.6977 13.1226 0.6697 12.8086 0.6697 12.4806V5.6036C0.6697 4.3456 1.7777 3.8666 2.8027 4.4276C3.9647 5.0696 5.2087 5.5626 6.9047 5.5626C8.9687 5.5626 10.9097 4.5236 12.6737 2.2806C14.1917 0.3396 15.5727 0.2166 17.6097 1.3926ZM4.0197 15.9806C2.3657 15.9806 1.3127 15.3376 0.8887 14.0386C1.3677 14.2306 1.8457 14.2986 2.5977 14.2986H26.3047C28.8477 14.2986 30.2557 14.0936 31.8557 13.3556L36.5037 11.1946C36.9827 10.9626 37.3377 10.7026 37.5837 10.4296C37.3377 11.6596 36.4907 12.6306 34.5897 13.6966C31.5137 15.4056 29.4357 15.9806 26.3047 15.9806Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}