import { IconProps } from "../../types"

export default function HandPointUpIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.248046875 33.03142607165483"
          className={className}
        >
          <path
            d="              M15.3127 33.0314C22.9007 33.0174 27.2477 28.5474 27.2477 20.7544V16.2014C27.2477 12.5784 25.2927 10.2134 22.1617 10.0354C21.6017 8.9414 20.4117 8.2714 19.0317 8.2714C18.7437 8.2714 18.4847 8.2854 18.2247 8.3534C17.5957 7.1504 16.5837 6.4804 15.2437 6.4804C15.2027 6.4804 15.1617 6.4804 15.1207 6.4944V4.2524C15.1207 1.7094 13.4667 0.0004 11.0327 0.0004C8.4907 0.0004 6.7677 1.7094 6.7677 4.2524V12.5914C6.7677 12.6874 6.7407 12.7424 6.6857 12.7424C6.6447 12.7424 6.6307 12.7284 6.6037 12.6874L6.4807 12.4964C5.8107 11.6754 4.8537 11.2244 3.7327 11.2244C1.5447 11.2244 -0.0003 12.7284 -0.0003 14.9164C-0.0003 15.5864 0.1227 16.2834 0.3557 16.8984L2.9667 24.0484C5.1137 29.9004 9.4477 33.0584 15.3127 33.0314ZM15.4217 28.7384C11.3477 28.7384 8.6817 26.6194 6.9587 22.5044L4.0467 15.5864C4.0197 15.4904 3.9917 15.4354 3.9917 15.3534C3.9917 15.1754 4.1157 15.0114 4.3617 15.0114C4.4977 15.0114 4.6207 15.0934 4.6757 15.2304L6.9997 19.5784C7.3967 20.3304 8.0667 20.6584 8.7367 20.6584C9.6657 20.6584 10.5277 19.9744 10.5277 18.7714L10.5547 4.0334C10.5547 3.8004 10.7047 3.6234 10.9377 3.6234C11.1697 3.6234 11.3617 3.8004 11.3617 4.0334V13.7404C11.3617 14.6014 12.0727 15.3124 12.9337 15.3124C13.7947 15.3124 14.5057 14.6014 14.5057 13.7404V10.5274C14.6287 10.5134 14.7657 10.5134 14.9027 10.5134C15.1347 10.5134 15.3397 10.6914 15.3397 10.9234V14.3964C15.3397 15.2444 16.0097 15.9144 16.8577 15.9144C17.7047 15.9144 18.3887 15.2444 18.3887 14.3964V12.3044C18.5117 12.3044 18.6487 12.2914 18.7847 12.2914C19.0037 12.2914 19.2087 12.4684 19.2087 12.7144V14.9574C19.2087 15.8324 19.9197 16.5294 20.7947 16.5294C21.6567 16.5294 22.3667 15.8324 22.3667 14.9574V14.3964C22.9827 14.3964 23.2697 14.7384 23.2697 15.5994V20.4534C23.2697 25.6894 20.3847 28.7384 15.4217 28.7384Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.787109375 30.898485871429003"
          className={className}
        >
          <path
            d="              M13.9867 30.8986C20.6717 30.8986 24.7867 26.7146 24.7867 19.6186V15.8456C24.7867 12.4686 23.0647 10.3636 20.2347 10.2536C19.7967 9.2016 18.7847 8.5586 17.5137 8.5586C17.1717 8.5586 16.8437 8.6136 16.5157 8.7086C16.0367 7.5606 15.0667 6.8766 13.8087 6.8766C13.6307 6.8766 13.4397 6.9046 13.2617 6.9586V3.5686C13.2617 1.4356 11.8667 -0.0004 9.8437 -0.0004C7.7517 -0.0004 6.3167 1.4356 6.3167 3.5686V13.4396C6.3167 13.5216 6.2757 13.5766 6.2207 13.5766C6.1797 13.5766 6.1527 13.5486 6.1247 13.4936L5.6057 12.3046C5.0447 11.3616 4.1567 10.8556 3.1167 10.8556C1.3537 10.8556 -0.0003 12.0316 -0.0003 13.8766C-0.0003 14.4106 0.0957 15.0386 0.3007 15.5726L2.8167 22.5446C4.7987 28.0276 8.6407 30.9116 13.9867 30.8986ZM14.0817 27.8086C10.1307 27.8086 7.3417 25.8676 5.6327 21.4786L2.9807 14.6426C2.9257 14.4926 2.8987 14.3686 2.8987 14.2186C2.8987 13.8906 3.1307 13.6036 3.5277 13.6036C3.8277 13.6036 4.0197 13.7816 4.1567 14.0816L6.2477 18.3336C6.5897 19.0586 7.1367 19.3316 7.7247 19.3316C8.4627 19.3316 9.1057 18.7576 9.1057 17.8416V3.3906C9.1057 2.9806 9.3927 2.6936 9.7887 2.6936C10.1857 2.6936 10.4727 2.9806 10.4727 3.3906V13.3026C10.4727 13.9726 11.0327 14.5056 11.7027 14.5056C12.3597 14.5056 12.9067 13.9726 12.9067 13.3026V9.8706C13.0977 9.8166 13.3167 9.7756 13.5217 9.7756C13.9727 9.7756 14.2867 10.0896 14.2867 10.5686V13.8906C14.2867 14.5606 14.8337 15.0666 15.4907 15.0666C16.1327 15.0666 16.6797 14.5606 16.6797 13.8906V11.5526C16.8577 11.4976 17.0757 11.4566 17.2817 11.4566C17.7327 11.4566 18.0467 11.7716 18.0467 12.2496V14.4376C18.0467 15.1206 18.6077 15.6406 19.2777 15.6406C19.9337 15.6406 20.4937 15.1206 20.4937 14.4376V13.3706C21.4097 13.3706 21.8887 14.1636 21.8887 15.6816V19.3596C21.8887 24.7326 18.9767 27.8086 14.0817 27.8086Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.0859375 32.03324931798514"
          className={className}
        >
          <path
            d="              M14.6977 32.0332C21.8477 32.0192 26.0857 27.6852 26.0857 20.2212V16.0372C26.0857 12.5232 24.2407 10.2812 21.2457 10.1442C20.7537 9.0642 19.6467 8.4082 18.3207 8.4082C18.0057 8.4082 17.7047 8.4492 17.4177 8.5172C16.8577 7.3422 15.8597 6.6722 14.5607 6.6722C14.4647 6.6722 14.3557 6.6852 14.2457 6.7132V3.9372C14.2457 1.5862 12.7147 0.0002 10.4727 0.0002C8.1487 0.0002 6.5627 1.5862 6.5627 3.9372V12.9882C6.5627 13.0842 6.5217 13.1382 6.4667 13.1382C6.4257 13.1382 6.3987 13.1112 6.3707 13.0702L6.0567 12.4142C5.4417 11.5392 4.5257 11.0602 3.4457 11.0602C1.4487 11.0602 -0.0003 12.4002 -0.0003 14.4372C-0.0003 15.0392 0.1097 15.7092 0.3277 16.2832L2.8987 23.3382C4.9627 29.0252 9.0647 32.0472 14.6977 32.0332ZM14.7797 28.3012C10.7737 28.3012 8.0527 26.2772 6.3297 22.0252L3.5407 15.1482C3.4997 15.0252 3.4727 14.9432 3.4727 14.8202C3.4727 14.5742 3.6507 14.3552 3.9787 14.3552C4.1837 14.3552 4.3337 14.4782 4.4297 14.6972L6.6447 19.0042C7.0137 19.7422 7.6287 20.0292 8.2577 20.0292C9.1057 20.0292 9.8577 19.4142 9.8577 18.3342L9.8707 3.7322C9.8707 3.4182 10.0897 3.1852 10.4047 3.1852C10.7047 3.1852 10.9377 3.4182 10.9377 3.7322V13.5352C10.9377 14.3142 11.5797 14.9292 12.3597 14.9292C13.1247 14.9292 13.7537 14.3142 13.7537 13.5352V10.2262C13.9047 10.1852 14.0817 10.1722 14.2457 10.1722C14.5877 10.1722 14.8337 10.4042 14.8337 10.7602V14.1642C14.8337 14.9292 15.4627 15.5172 16.2147 15.5172C16.9667 15.5172 17.5817 14.9292 17.5817 14.1642V11.9632C17.7327 11.9222 17.9097 11.9082 18.0737 11.9082C18.4027 11.9082 18.6617 12.1402 18.6617 12.4962V14.7112C18.6617 15.5042 19.3047 16.1192 20.0837 16.1192C20.8497 16.1192 21.4787 15.5042 21.4787 14.7112V13.9182C22.2437 13.9182 22.6137 14.4652 22.6137 15.6402V19.9472C22.6137 25.2382 19.7287 28.3012 14.7797 28.3012Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.56067369244353 27.849609375"
          className={className}
        >
          <path
            d="              M12.2779 27.8501C17.7189 27.8501 21.5609 24.2951 21.5609 17.9651V15.1761C21.5609 12.0451 20.1659 10.2681 17.7189 10.2401C17.4319 9.2691 16.6249 8.6541 15.5179 8.6541C15.0939 8.6541 14.6839 8.7361 14.2739 8.8731C13.9729 7.8341 13.1119 7.1781 11.9489 7.1781C11.6209 7.1781 11.2519 7.2461 10.8969 7.3551V2.6391C10.8969 1.0251 9.8169 0.0001 8.3809 0.0001C6.9179 0.0001 5.8519 1.0251 5.8519 2.6391V14.5601C5.8519 14.6291 5.8109 14.6841 5.7419 14.6841C5.6879 14.6841 5.6469 14.6561 5.6189 14.5881L4.4439 11.6891C4.0059 10.6371 3.2269 10.1031 2.3239 10.1031C1.0799 10.1031 -0.0131 10.9101 -0.0001 12.3051C-0.0001 12.6741 0.0819 13.1521 0.2189 13.5761L2.6939 20.5491C4.3889 25.3481 7.6569 27.8501 12.2779 27.8501ZM12.3189 26.4001C8.4769 26.4001 5.5649 24.4451 4.0199 20.0841L1.5449 13.1111C1.4629 12.8931 1.4219 12.7011 1.4219 12.4411C1.4219 11.9081 1.8319 11.4571 2.4479 11.4571C2.9399 11.4571 3.2679 11.7711 3.4999 12.3181L5.3049 16.5161C5.5649 17.1031 5.9339 17.3091 6.3849 17.3091C6.9049 17.3091 7.2869 16.9261 7.2869 16.3381V2.5571C7.2869 1.8591 7.7249 1.3811 8.3809 1.3811C9.0369 1.3811 9.4609 1.8591 9.4609 2.5571V12.3181C9.4609 12.7281 9.7619 13.0431 10.1579 13.0431C10.5549 13.0431 10.8419 12.7281 10.8419 12.3181V8.7641C11.1289 8.6411 11.4849 8.5591 11.7719 8.5591C12.5509 8.5591 13.0159 9.0641 13.0159 9.9121V12.8381C13.0159 13.3031 13.3439 13.5621 13.7129 13.5621C14.0689 13.5621 14.3969 13.3031 14.3969 12.8381V10.2261C14.6839 10.1171 15.0389 10.0351 15.3399 10.0351C16.1189 10.0351 16.5709 10.5411 16.5709 11.3751V13.3571C16.5709 13.8221 16.8989 14.0821 17.2679 14.0821C17.6229 14.0821 17.9509 13.8221 17.9509 13.3571V11.6891C19.3599 11.6891 20.1249 13.0021 20.1249 15.3671V17.8281C20.1249 23.3931 17.0349 26.4001 12.3189 26.4001Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.215995074363637 29.5313015297697"
          className={className}
        >
          <path
            d="              M13.1399 29.5317C19.2509 29.5317 23.2159 25.5387 23.2159 18.8947V15.6267C23.2159 12.3867 21.6439 10.4587 18.9919 10.3907C18.6359 9.3787 17.7339 8.7497 16.5579 8.7497C16.1609 8.7497 15.7919 8.8187 15.4229 8.9417C15.0269 7.8207 14.1109 7.1367 12.8799 7.1367C12.6199 7.1367 12.3469 7.1777 12.0739 7.2597V3.1307C12.0739 1.2577 10.8289 -0.0003 9.0789 -0.0003C7.2749 -0.0003 6.0169 1.2577 6.0169 3.1307V13.9727C6.0169 14.0547 5.9899 14.1097 5.9209 14.1097C5.8669 14.1097 5.8389 14.0687 5.8119 14.0137L5.0459 12.1957C4.5539 11.1697 3.7199 10.6227 2.7219 10.6227C1.2319 10.6227 0.0009 11.5797 0.0009 13.2067C-0.0121 13.6717 0.0969 14.2457 0.2609 14.7387L2.7079 21.5737C4.5949 26.8377 8.1359 29.5447 13.1399 29.5317ZM13.2219 27.2207C9.3529 27.2207 6.4819 25.3887 4.7999 20.8227L2.2979 14.0407C2.2299 13.8497 2.1889 13.6987 2.1889 13.4937C2.1889 13.0707 2.5029 12.7147 2.9949 12.7147C3.4059 12.7147 3.6519 12.9477 3.8159 13.3577L5.7569 17.5407C6.0849 18.2517 6.5499 18.4847 7.0699 18.4847C7.6989 18.4847 8.1909 17.9917 8.1909 17.2537V2.9807C8.1909 2.4607 8.5459 2.1057 9.0519 2.1057C9.5579 2.1057 9.8999 2.4607 9.8999 2.9807V13.0297C9.8999 13.5757 10.3649 13.9997 10.9109 13.9997C11.4449 13.9997 11.8959 13.5757 11.8959 13.0297V9.4607C12.1149 9.3787 12.3879 9.3107 12.6339 9.3107C13.2359 9.3107 13.6049 9.7067 13.6049 10.3357V13.5757C13.6049 14.1367 14.0699 14.5327 14.6029 14.5327C15.1219 14.5327 15.5869 14.1367 15.5869 13.5757V11.0737C15.7919 10.9787 16.0789 10.9237 16.3249 10.9237C16.9269 10.9237 17.2959 11.3207 17.2959 11.9487V14.0957C17.2959 14.6697 17.7609 15.0797 18.3079 15.0797C18.8269 15.0797 19.2919 14.6697 19.2919 14.0957V12.7147C20.3999 12.7147 21.0149 13.8087 21.0149 15.7367V18.6617C21.0149 24.1167 18.0749 27.2207 13.2219 27.2207Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.327463807123326 28.765625"
          className={className}
        >
          <path
            d="              M12.661 28.7659C18.445 28.7659 22.327 24.8829 22.327 18.4839V15.4899C22.327 12.3459 20.837 10.4999 18.294 10.4729C17.98 9.4609 17.146 8.8589 16.011 8.8589C15.601 8.8589 15.204 8.9279 14.808 9.0649C14.466 7.9569 13.564 7.2869 12.374 7.2869C12.06 7.2869 11.732 7.3279 11.404 7.4239V2.8709C11.404 1.1489 10.255 -0.0001 8.642 -0.0001C7.015 -0.0001 5.853 1.1489 5.853 2.8709V14.2739C5.853 14.3559 5.825 14.3969 5.757 14.3969C5.702 14.3969 5.661 14.3689 5.634 14.3009L4.732 12.1269C4.267 11.0609 3.474 10.4859 2.503 10.4859C1.163 10.4859 0.001 11.3339 0.001 12.8239C-0.012 13.2479 0.083 13.7949 0.247 14.2599L2.654 21.0269C4.472 26.1539 7.849 28.7659 12.661 28.7659ZM12.73 26.8789C8.915 26.8789 5.99 25.1149 4.322 20.4399L1.902 13.6989C1.833 13.4939 1.792 13.3159 1.792 13.0699C1.792 12.6059 2.148 12.1949 2.695 12.1949C3.159 12.1949 3.433 12.4689 3.624 12.9339L5.497 17.0899C5.798 17.7869 6.208 18.0059 6.7 18.0059C7.275 18.0059 7.671 17.5409 7.671 16.9259V2.7479C7.671 2.1739 8.081 1.7639 8.642 1.7639C9.202 1.7639 9.585 2.1739 9.585 2.7479V12.8649C9.585 13.3439 9.995 13.7129 10.46 13.7129C10.939 13.7129 11.322 13.3439 11.322 12.8649V9.2289C11.554 9.1189 11.868 9.0369 12.142 9.0369C12.825 9.0369 13.236 9.4879 13.236 10.2129V13.3849C13.236 13.8909 13.646 14.2329 14.111 14.2329C14.562 14.2329 14.972 13.8909 14.972 13.3849V10.8009C15.204 10.6909 15.519 10.6229 15.779 10.6229C16.462 10.6229 16.872 11.0609 16.872 11.7849V13.9179C16.872 14.4099 17.296 14.7519 17.761 14.7519C18.199 14.7519 18.609 14.4099 18.609 13.9179V12.3459C19.825 12.3459 20.523 13.5899 20.523 15.7639V18.2659C20.523 23.7619 17.57 26.8789 12.73 26.8789Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.884765625 30.119190647626116"
          className={className}
        >
          <path
            d="              M13.5077 30.1188C19.8657 30.1188 23.8847 26.0448 23.8847 19.1948V15.7228C23.8847 12.4278 22.2577 10.4038 19.5237 10.3358C19.1407 9.2968 18.1837 8.6678 16.9667 8.6678C16.5977 8.6678 16.2417 8.7228 15.9007 8.8318C15.4627 7.6968 14.5197 7.0278 13.2887 7.0278C13.0567 7.0278 12.8237 7.0548 12.5917 7.1228V3.3088C12.5917 1.3258 11.2797 -0.0002 9.4067 -0.0002C7.4787 -0.0002 6.1527 1.3258 6.1527 3.3088V13.7398C6.1527 13.8218 6.1117 13.8768 6.0427 13.8768C6.0017 13.8768 5.9747 13.8498 5.9477 13.7948L5.2777 12.2358C4.7577 11.2518 3.9097 10.7188 2.8847 10.7188C1.2847 10.7188 -0.0003 11.7718 -0.0003 13.4938C-0.0003 13.9858 0.0957 14.5878 0.2737 15.1078L2.7477 21.9978C4.6757 27.3438 8.3537 30.1328 13.5077 30.1188ZM13.5897 27.4668C9.6937 27.4668 6.8497 25.5938 5.1547 21.0958L2.5837 14.3008C2.5297 14.1228 2.4887 13.9858 2.4887 13.7948C2.4887 13.4258 2.7757 13.0978 3.2267 13.0978C3.5817 13.0978 3.8147 13.3028 3.9647 13.6718L5.9747 17.8828C6.3027 18.5938 6.8087 18.8398 7.3557 18.8398C8.0387 18.8398 8.5857 18.3198 8.5857 17.5138V3.1578C8.5857 2.6938 8.9137 2.3518 9.3657 2.3518C9.8297 2.3518 10.1447 2.6938 10.1447 3.1578V13.1528C10.1447 13.7398 10.6507 14.2188 11.2517 14.2188C11.8397 14.2188 12.3317 13.7398 12.3317 13.1528V9.6388C12.5367 9.5568 12.7827 9.5158 13.0157 9.5158C13.5487 9.5158 13.9047 9.8708 13.9047 10.4318V13.7128C13.9047 14.3148 14.3967 14.7658 14.9847 14.7658C15.5587 14.7658 16.0507 14.3148 16.0507 13.7128V11.2788C16.2557 11.1968 16.5017 11.1558 16.7347 11.1558C17.2677 11.1558 17.6227 11.5118 17.6227 12.0718V14.2458C17.6227 14.8608 18.1287 15.3258 18.7307 15.3258C19.3047 15.3258 19.8107 14.8608 19.8107 14.2458V13.0018C20.8357 13.0018 21.3967 13.9588 21.3967 15.7088V18.9628C21.3967 24.3768 18.4707 27.4668 13.5897 27.4668Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.548970816284893 26.6328125"
          className={className}
        >
          <path
            d="              M11.7579 26.6332C16.7619 26.6332 20.5489 23.5152 20.5489 17.2812V14.7522C20.5489 11.6212 19.2909 9.9392 16.9669 9.9122C16.7069 8.9822 15.9419 8.3812 14.8479 8.3812C14.4239 8.3812 13.9999 8.4632 13.5629 8.6132C13.3169 7.6702 12.5099 7.0412 11.4029 7.0412C11.0329 7.0412 10.6229 7.1232 10.2269 7.2462V2.3102C10.2269 0.8752 9.2419 0.0002 8.0529 0.0002C6.7949 0.0002 5.8379 0.8752 5.8379 2.3102V14.9302C5.8379 14.9982 5.7969 15.0532 5.7289 15.0532C5.6739 15.0532 5.6329 15.0122 5.5919 14.9432L4.0739 11.1012C3.6509 10.0762 2.9119 9.5842 2.0919 9.5702C0.9569 9.5702 -0.0131 10.3492 -0.0001 11.5942C0.0139 11.9082 0.0689 12.3052 0.1919 12.6462L2.7479 19.8922C4.2929 24.2672 7.4099 26.6332 11.7579 26.6332ZM11.7719 25.7442C7.9159 25.7442 5.0039 23.5702 3.6099 19.5782L1.0669 12.3322C0.9849 12.0992 0.9299 11.8812 0.9299 11.5942C0.9299 10.9652 1.4359 10.4592 2.1189 10.4592C2.6529 10.4592 3.0629 10.8142 3.3229 11.4712L5.0729 15.7362C5.2639 16.2012 5.5649 16.3792 5.9609 16.3792C6.4119 16.3792 6.7679 16.0782 6.7679 15.5582V2.2832C6.7679 1.4352 7.2739 0.8612 8.0529 0.8612C8.8319 0.8612 9.2969 1.4352 9.2969 2.2832V11.5942C9.2969 11.8812 9.4609 12.1402 9.7479 12.1402C10.0629 12.1402 10.2129 11.8812 10.2129 11.5942V8.1212C10.5689 7.9842 10.9789 7.9022 11.3069 7.9022C12.2089 7.9022 12.7289 8.4762 12.7289 9.5022V12.0992C12.7289 12.4962 12.9479 12.6602 13.1939 12.6602C13.4259 12.6602 13.6449 12.4962 13.6449 12.0992V9.4612C13.9999 9.3242 14.4099 9.2422 14.7389 9.2422C15.6409 9.2422 16.1739 9.8162 16.1739 10.8422V12.6192C16.1739 13.0152 16.3789 13.1932 16.6389 13.1932C16.8709 13.1932 17.0899 13.0152 17.0899 12.6192V10.8142C18.7439 10.8142 19.6189 12.1952 19.6189 14.8062V17.2262C19.6189 22.9002 16.3239 25.7442 11.7719 25.7442Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.02944797349797 26.017578125"
          className={className}
        >
          <path
            d="              M11.4979 26.0177C16.2829 26.0177 20.0299 23.1187 20.0299 16.9257V14.5327C20.0299 11.4157 18.8399 9.7757 16.5839 9.7617C16.3379 8.8457 15.5859 8.2437 14.5059 8.2437C14.0959 8.2437 13.6579 8.3257 13.1939 8.4907C12.9749 7.5877 12.2089 6.9727 11.1289 6.9727C10.7459 6.9727 10.3089 7.0547 9.8849 7.2047V2.1467C9.8849 0.7927 8.9419 -0.0003 7.8749 -0.0003C6.7269 -0.0003 5.8239 0.7927 5.8239 2.1467V15.1207C5.8239 15.1897 5.7969 15.2437 5.7289 15.2437C5.6739 15.2437 5.6189 15.2167 5.5779 15.1207L3.8829 10.8147C3.4729 9.8027 2.7479 9.3247 1.9829 9.3107C0.9029 9.3107 -0.0131 10.0627 -0.0001 11.2387C0.0139 11.5117 0.0689 11.8807 0.1779 12.1817L2.7759 19.5647C4.2389 23.7207 7.2869 26.0177 11.4979 26.0177ZM11.4979 25.4157C7.6159 25.4157 4.7309 23.1187 3.4049 19.3317L0.8209 11.9357C0.7249 11.6897 0.6839 11.4567 0.6839 11.1697C0.6839 10.4997 1.2169 9.9527 1.9549 9.9527C2.5019 9.9527 2.9529 10.3357 3.2409 11.0467L4.9489 15.3397C5.0999 15.7367 5.3729 15.9137 5.7419 15.9137C6.1529 15.9137 6.5079 15.6547 6.5079 15.1617V2.1467C6.5079 1.2167 7.0279 0.6017 7.8749 0.6017C8.7229 0.6017 9.2009 1.2167 9.2009 2.1467V11.2247C9.2009 11.4567 9.3109 11.6897 9.5429 11.6897C9.8029 11.6897 9.8849 11.4567 9.8849 11.2247V7.8067C10.2679 7.6697 10.7049 7.5747 11.0609 7.5747C12.0319 7.5747 12.5919 8.1897 12.5919 9.2967V11.7307C12.5919 12.0997 12.7419 12.2087 12.9339 12.2087C13.0979 12.2087 13.2619 12.0997 13.2619 11.7307V9.0777C13.6579 8.9417 14.0959 8.8457 14.4379 8.8457C15.4079 8.8457 15.9689 9.4607 15.9689 10.5687V12.2497C15.9689 12.6187 16.1189 12.7287 16.3109 12.7287C16.4749 12.7287 16.6529 12.6187 16.6529 12.2497V10.3767C18.4159 10.3767 19.3459 11.7987 19.3459 14.5327V16.9397C19.3459 22.6407 15.9549 25.4157 11.4979 25.4157Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}