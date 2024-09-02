import { IconProps } from "../../types"

export default function TvBadgeWifiIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.16620892542133 31.486328125"
          className={className}
        >
          <path
            d="              M4.9357 26.0311H25.5797L24.3637 24.8281C23.4747 23.9261 23.2697 22.6411 23.9257 21.5331H5.6057C4.8807 21.5331 4.4977 21.2191 4.4977 20.4261V5.6191C4.4977 4.8121 4.8807 4.5121 5.6057 4.5121H31.2127C31.9377 4.5121 32.3207 4.8121 32.3207 5.6191V16.6391C33.0587 16.5161 33.8247 16.4471 34.5897 16.4471C35.3417 16.4471 36.0797 16.5161 36.8187 16.6251V4.9351C36.8187 1.8321 34.9867 0.0001 31.8827 0.0001H4.9357C1.8317 0.0001 -0.0003 1.8321 -0.0003 4.9351V21.0961C-0.0003 24.1991 1.8317 26.0311 4.9357 26.0311ZM26.8657 24.3361C27.1117 24.5821 27.4667 24.5271 27.6997 24.3081C29.5317 22.4631 31.7737 21.4651 34.3987 21.4651C37.0367 21.4651 39.4157 22.3261 41.1117 24.3081C41.3167 24.5551 41.6997 24.5821 41.9317 24.3361L42.9977 23.2691C43.2027 23.0511 43.2307 22.7501 43.0257 22.5171C41.1117 20.2621 37.7617 18.7031 34.3987 18.7031C31.0347 18.7031 27.6997 20.2621 25.7717 22.5171C25.5667 22.7501 25.6077 23.0511 25.8127 23.2691ZM29.9277 27.4121C30.1877 27.6721 30.5297 27.6721 30.8027 27.3571C31.7047 26.3461 33.0857 25.7441 34.3987 25.7441C35.7107 25.7441 36.9687 26.4691 37.9937 27.3571C38.2947 27.6311 38.6097 27.6721 38.8687 27.4121L40.0587 26.2361C40.2637 26.0451 40.2637 25.7301 40.0997 25.5251C38.8277 23.9941 36.6817 22.9821 34.3987 22.9821C32.1157 22.9821 29.9827 23.9941 28.7107 25.5251C28.5337 25.7301 28.5337 26.0451 28.7387 26.2361ZM34.3987 31.4861C34.6447 31.4861 34.8497 31.3911 35.1777 31.0621L36.9417 29.3261C37.1597 29.1211 37.2287 28.8891 37.0777 28.6421C36.5037 27.7671 35.3967 27.3031 34.3987 27.3031C33.4137 27.3031 32.3617 27.8221 31.7187 28.6421C31.5547 28.8611 31.6507 29.1211 31.8557 29.3261L33.6327 31.0621C33.9607 31.3911 34.1657 31.4861 34.3987 31.4861ZM10.8827 31.4861H25.9357C26.9747 31.4861 27.7817 30.6111 27.7817 29.6541C27.7817 28.6971 26.9747 27.8221 25.9357 27.8221H10.8827C9.8437 27.8221 9.0367 28.6971 9.0367 29.6541C9.0367 30.6111 9.8437 31.4861 10.8827 31.4861Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.99875061211786 29.708984375"
          className={className}
        >
          <path
            d="              M4.2247 24.377H25.2517L24.4177 23.543C23.7347 22.859 23.5297 21.889 23.8707 21.027H4.5797C3.7867 21.027 3.3497 20.617 3.3497 19.797V4.58C3.3497 3.76 3.7867 3.35 4.5797 3.35H30.9257C31.7047 3.35 32.1427 3.76 32.1427 4.58V15.777C32.7027 15.695 33.2637 15.654 33.8377 15.654C34.3987 15.654 34.9457 15.695 35.5057 15.764V4.225C35.5057 1.586 33.9197 0 31.2817 0H4.2247C1.5857 0 -0.0003 1.586 -0.0003 4.225V20.152C-0.0003 22.791 1.5857 24.377 4.2247 24.377ZM26.6057 22.941C26.8247 23.16 27.1527 23.119 27.3437 22.928C29.0117 21.178 31.1717 20.207 33.7427 20.207C36.3127 20.207 38.5407 21.109 40.1407 22.928C40.3187 23.133 40.6597 23.16 40.8787 22.941L41.8637 21.916C42.0277 21.752 42.0547 21.492 41.8767 21.301C40.0997 19.141 36.9277 17.705 33.7427 17.705C30.5567 17.705 27.3847 19.141 25.5937 21.301C25.4297 21.492 25.4567 21.752 25.6207 21.916ZM29.5317 25.867C29.7497 26.086 30.0507 26.086 30.2837 25.826C31.1447 24.896 32.4297 24.281 33.7427 24.268C35.0547 24.254 36.2307 25.006 37.2017 25.826C37.4607 26.059 37.7347 26.086 37.9527 25.867L39.0607 24.76C39.2387 24.582 39.2387 24.35 39.0877 24.144C37.9667 22.736 35.9437 21.793 33.7427 21.793C31.5407 21.793 29.5587 22.764 28.3967 24.144C28.2327 24.336 28.2457 24.582 28.4237 24.76ZM33.7427 29.709C33.9477 29.709 34.1247 29.627 34.4257 29.34L36.1207 27.686C36.3127 27.508 36.3537 27.303 36.2167 27.125C35.6697 26.346 34.6857 25.881 33.7427 25.881C32.7987 25.881 31.8417 26.359 31.2537 27.125C31.1307 27.289 31.1717 27.508 31.3637 27.686L33.0587 29.34C33.3597 29.627 33.5367 29.709 33.7427 29.709ZM10.5547 29.422H24.9517C25.7717 29.422 26.4277 28.725 26.4277 27.945C26.4277 27.166 25.7717 26.469 24.9517 26.469H10.5547C9.7347 26.469 9.0647 27.166 9.0647 27.945C9.0647 28.725 9.7347 29.422 10.5547 29.422Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.61260208407635 30.638671875"
          className={className}
        >
          <path
            d="              M4.5937 25.2519H25.4297L24.3907 24.2129C23.5977 23.4199 23.3927 22.2849 23.8987 21.2869H5.1267C4.3617 21.2869 3.9647 20.9319 3.9647 20.1249V5.1269C3.9647 4.3199 4.3617 3.9649 5.1267 3.9649H31.0767C31.8277 3.9649 32.2387 4.3199 32.2387 5.1269V16.2289C32.8947 16.1189 33.5647 16.0649 34.2347 16.0649C34.8907 16.0649 35.5467 16.1189 36.2027 16.2149V4.6079C36.2027 1.7089 34.4807 -0.0001 31.5957 -0.0001H4.5937C1.7087 -0.0001 -0.0003 1.7089 -0.0003 4.6079V20.6449C-0.0003 23.5289 1.7087 25.2519 4.5937 25.2519ZM26.7427 23.6799C26.9747 23.9119 27.3167 23.8709 27.5217 23.6519C29.2847 21.8479 31.4867 20.8629 34.0837 20.8629C36.6957 20.8629 39.0057 21.7519 40.6467 23.6519C40.8517 23.8709 41.2067 23.9119 41.4397 23.6799L42.4647 22.6269C42.6427 22.4359 42.6697 22.1619 42.4927 21.9429C40.6327 19.7289 37.3657 18.2379 34.0837 18.2379C30.8167 18.2379 27.5487 19.7289 25.6897 21.9429C25.5117 22.1619 25.5387 22.4359 25.7167 22.6269ZM29.7367 26.6739C29.9827 26.9199 30.3107 26.9199 30.5567 26.6329C31.4457 25.6619 32.7717 25.0609 34.0837 25.0469C35.4097 25.0329 36.6267 25.7849 37.6117 26.6329C37.8987 26.8929 38.1997 26.9199 38.4317 26.6739L39.5937 25.5389C39.7847 25.3479 39.7847 25.0739 39.6207 24.8689C38.4317 23.3929 36.3267 22.4219 34.0837 22.4219C31.8417 22.4219 29.7777 23.4199 28.5607 24.8689C28.3967 25.0739 28.3967 25.3479 28.5877 25.5389ZM34.0837 30.6389C34.3167 30.6389 34.5077 30.5569 34.8227 30.2419L36.5587 28.5469C36.7497 28.3559 36.8187 28.1369 36.6817 27.9319C36.1077 27.0979 35.0547 26.6329 34.0837 26.6329C33.1267 26.6329 32.1157 27.1249 31.4997 27.9319C31.3497 28.1229 31.4177 28.3559 31.6227 28.5469L33.3597 30.2419C33.6737 30.5569 33.8657 30.6389 34.0837 30.6389ZM10.7327 30.5159H25.4707C26.4007 30.5159 27.1527 29.7229 27.1527 28.8479C27.1527 27.9729 26.4007 27.1799 25.4707 27.1799H10.7327C9.7887 27.1799 9.0507 27.9729 9.0507 28.8479C9.0507 29.7229 9.7887 30.5159 10.7327 30.5159Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.872389719556104 26.919921875"
          className={className}
        >
          <path
            d="              M3.1997 22.1621H25.1977L24.8557 21.8201C24.4727 21.4371 24.2537 20.9591 24.2127 20.4671H3.2407C2.2557 20.4671 1.6957 19.9061 1.6957 18.9351V3.2261C1.6957 2.2561 2.2557 1.6951 3.2407 1.6951H30.0647C31.0347 1.6951 31.6097 2.2561 31.6097 3.2261V14.7111C31.8967 14.6831 32.1697 14.6831 32.4567 14.6831C32.7437 14.6831 33.0177 14.6831 33.3047 14.7111V3.1991C33.3047 1.1891 32.1017 0.0001 30.1057 0.0001H3.1997C1.1897 0.0001 -0.0003 1.1891 -0.0003 3.1991V18.9631C-0.0003 20.9731 1.1897 22.1621 3.1997 22.1621ZM25.9907 20.7541C26.1547 20.9181 26.3867 20.8911 26.5097 20.7541C28.0277 19.1681 30.0367 18.2381 32.4567 18.2381C34.8767 18.2381 36.8867 19.1681 38.4047 20.7541C38.5277 20.8911 38.7597 20.9181 38.9377 20.7541L39.7847 19.8651C39.8947 19.7421 39.9087 19.5781 39.7847 19.4411C38.2127 17.5001 35.3557 16.2691 32.4567 16.2691C29.5587 16.2691 26.7017 17.5001 25.1287 19.4411C25.0057 19.5781 25.0197 19.7421 25.1287 19.8651ZM28.6697 23.4331C28.8337 23.5981 29.0257 23.5981 29.1897 23.4201C29.9957 22.5861 31.1587 21.9841 32.4567 21.9711C33.7557 21.9571 34.8497 22.6541 35.7247 23.4201C35.9027 23.5701 36.0937 23.5981 36.2437 23.4331L37.1877 22.4901C37.3107 22.3671 37.2967 22.2171 37.1877 22.0661C36.1897 20.8361 34.4257 20.0291 32.4567 20.0291C30.4887 20.0291 28.7797 20.8911 27.7267 22.0661C27.6037 22.2031 27.6037 22.3671 27.7267 22.4901ZM32.4567 26.9201C32.6207 26.9201 32.7577 26.8511 32.9627 26.6601L34.5217 25.1561C34.6447 25.0331 34.6447 24.8831 34.5627 24.7731C34.0977 24.1721 33.2907 23.7621 32.4567 23.7621C31.6227 23.7621 30.8167 24.1721 30.3517 24.7731C30.2697 24.8831 30.2697 25.0331 30.3927 25.1561L31.9517 26.6601C32.1567 26.8511 32.3067 26.9201 32.4567 26.9201ZM9.9257 26.3321H23.3787C23.8437 26.3321 24.2267 25.9491 24.2267 25.4841C24.2267 25.0061 23.8437 24.6231 23.3787 24.6231H9.9257C9.4477 24.6231 9.0647 25.0061 9.0647 25.4841C9.0647 25.9491 9.4477 26.3321 9.9257 26.3321Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.248302797004364 28.57421875"
          className={className}
        >
          <path
            d="              M3.7737 23.3101H25.0467L24.4587 22.7231C23.9117 22.1621 23.6797 21.3961 23.8297 20.6851H3.9237C3.1037 20.6851 2.6117 20.2211 2.6117 19.3871V3.9101C2.6117 3.0761 3.1037 2.6111 3.9237 2.6111H30.7347C31.5547 2.6111 32.0467 3.0761 32.0467 3.9101V15.2171C32.4707 15.1621 32.9087 15.1351 33.3457 15.1351C33.7837 15.1351 34.2207 15.1621 34.6587 15.2171V3.7601C34.6587 1.4221 33.2367 0.0001 30.8847 0.0001H3.7737C1.4217 0.0001 -0.0003 1.4221 -0.0003 3.7601V19.5371C-0.0003 21.8751 1.4217 23.3101 3.7737 23.3101ZM26.4417 22.0391C26.6467 22.2441 26.9477 22.2171 27.1117 22.0391C28.6837 20.3571 30.7887 19.3871 33.3187 19.3871C35.8477 19.3871 37.9807 20.3301 39.5257 22.0391C39.6897 22.2171 39.9907 22.2441 40.1957 22.0391L41.1387 21.0551C41.2757 20.9181 41.2887 20.6851 41.1527 20.5211C39.4567 18.4301 36.3807 17.0621 33.3187 17.0621C30.2557 17.0621 27.1797 18.4301 25.4847 20.5211C25.3477 20.6851 25.3617 20.9181 25.5117 21.0551ZM29.2717 24.8691C29.4767 25.0741 29.7497 25.0741 29.9547 24.8551C30.7757 23.9671 31.9927 23.3511 33.3187 23.3241C34.6447 23.2971 35.7657 24.0761 36.6957 24.8551C36.9277 25.0471 37.1597 25.0741 37.3787 24.8691L38.4177 23.8161C38.5817 23.6521 38.5817 23.4611 38.4317 23.2561C37.4197 21.9161 35.4647 21.0271 33.3187 21.0271C31.1717 21.0271 29.2987 21.9841 28.2047 23.2561C28.0547 23.4471 28.0547 23.6521 28.2187 23.8161ZM33.3187 28.5741C33.4957 28.5741 33.6597 28.4921 33.9337 28.2321L35.5877 26.6331C35.7657 26.4691 35.7797 26.2911 35.6697 26.1411C35.1367 25.4161 34.2347 24.9651 33.3187 24.9651C32.4157 24.9651 31.5137 25.4301 30.9667 26.1411C30.8577 26.2771 30.8707 26.4691 31.0487 26.6331L32.7027 28.2321C32.9767 28.4921 33.1407 28.5741 33.3187 28.5741ZM10.3357 28.0821H24.3227C25.0057 28.0821 25.5667 27.5211 25.5667 26.8511C25.5667 26.1681 25.0057 25.6071 24.3227 25.6071H10.3357C9.6527 25.6071 9.0917 26.1681 9.0917 26.8511C9.0917 27.5211 9.6527 28.0821 10.3357 28.0821Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.82792096610437 27.9453125"
          className={className}
        >
          <path
            d="              M3.5137 22.709H24.9377L24.4867 22.258C24.0077 21.779 23.7757 21.137 23.8167 20.508H3.5547C2.7067 20.508 2.2017 20.002 2.2017 19.168V3.541C2.2017 2.707 2.7067 2.201 3.5547 2.201H30.6247C31.4727 2.201 31.9787 2.707 31.9787 3.541V14.902C32.3477 14.861 32.7167 14.848 33.0857 14.848C33.4547 14.848 33.8107 14.861 34.1797 14.902V3.514C34.1797 1.34 32.8537 0 30.6657 0H3.5137C1.3397 0 -0.0003 1.34 -0.0003 3.514V19.195C-0.0003 21.369 1.3397 22.709 3.5137 22.709ZM26.3457 21.533C26.5507 21.738 26.8377 21.711 26.9887 21.533C28.5057 19.906 30.5707 18.936 33.0857 18.936C35.5877 18.936 37.6657 19.906 39.1697 21.533C39.3337 21.711 39.6207 21.738 39.8127 21.533L40.7287 20.576C40.8517 20.453 40.8657 20.248 40.7427 20.084C39.0877 18.033 36.0797 16.721 33.0857 16.721C30.0777 16.721 27.0707 18.033 25.4297 20.084C25.2927 20.248 25.3067 20.453 25.4437 20.576ZM29.1207 24.309C29.3127 24.514 29.5727 24.5 29.7637 24.309C30.5707 23.447 31.7597 22.818 33.0857 22.791C34.4117 22.764 35.4927 23.557 36.4087 24.309C36.6137 24.473 36.8457 24.514 37.0367 24.309L38.0627 23.297C38.2127 23.133 38.2127 22.969 38.0767 22.764C37.1057 21.479 35.2047 20.604 33.0857 20.604C30.9667 20.604 29.1487 21.547 28.0957 22.764C27.9457 22.955 27.9587 23.133 28.1097 23.297ZM33.0857 27.945C33.2497 27.945 33.4007 27.863 33.6737 27.617L35.3007 26.045C35.4647 25.895 35.4647 25.717 35.3687 25.594C34.8357 24.91 33.9747 24.473 33.0857 24.473C32.1837 24.473 31.3227 24.91 30.8027 25.594C30.7067 25.717 30.7067 25.895 30.8707 26.045L32.4977 27.617C32.7577 27.863 32.9217 27.945 33.0857 27.945ZM10.2127 27.344H23.9667C24.5687 27.344 25.0747 26.852 25.0747 26.236C25.0747 25.621 24.5687 25.129 23.9667 25.129H10.2127C9.6117 25.129 9.1057 25.621 9.1057 26.236C9.1057 26.852 9.6117 27.344 10.2127 27.344Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.572986629568284 29.06640625"
          className={className}
        >
          <path
            d="              M3.9647 23.7612H25.1427L24.4457 23.0642C23.8297 22.4632 23.6117 21.6152 23.8437 20.8362H4.2107C3.4047 20.8362 2.9397 20.3852 2.9397 19.5642V4.1972C2.9397 3.3772 3.4047 2.9262 4.2107 2.9262H30.8167C31.6227 2.9262 32.0877 3.3772 32.0877 4.1972V15.4492C32.5797 15.3812 33.0727 15.3532 33.5647 15.3532C34.0567 15.3532 34.5347 15.3812 35.0277 15.4492V3.9652C35.0277 1.4902 33.5237 0.0002 31.0627 0.0002H3.9647C1.4907 0.0002 -0.0003 1.4902 -0.0003 3.9652V19.7972C-0.0003 22.2712 1.4907 23.7612 3.9647 23.7612ZM26.5097 22.4222C26.7287 22.6402 27.0427 22.5992 27.2207 22.4222C28.8337 20.7132 30.9527 19.7422 33.4957 19.7422C36.0527 19.7422 38.2127 20.6722 39.7847 22.4222C39.9627 22.6132 40.2777 22.6402 40.4957 22.4222L41.4527 21.4242C41.6037 21.2732 41.6177 21.0412 41.4667 20.8492C39.7307 18.7302 36.6137 17.3492 33.4957 17.3492C30.3927 17.3492 27.2757 18.7302 25.5387 20.8492C25.3887 21.0412 25.4027 21.2732 25.5527 21.4242ZM29.3807 25.2932C29.5997 25.5122 29.8727 25.5122 30.0917 25.2652C30.9397 24.3632 32.1837 23.7482 33.4957 23.7342C34.8227 23.7072 35.9567 24.4722 36.9137 25.2652C37.1597 25.4702 37.4067 25.5122 37.6247 25.2932L38.6917 24.2262C38.8687 24.0492 38.8687 23.8442 38.7187 23.6382C37.6527 22.2712 35.6697 21.3552 33.4957 21.3552C31.3357 21.3552 29.4087 22.3122 28.2867 23.6382C28.1227 23.8302 28.1367 24.0492 28.3007 24.2262ZM33.4957 29.0662C33.6877 29.0662 33.8657 28.9842 34.1527 28.7112L35.8207 27.0842C35.9977 26.9202 36.0257 26.7282 35.9157 26.5642C35.3687 25.8122 34.4257 25.3612 33.4957 25.3612C32.5797 25.3612 31.6507 25.8262 31.0897 26.5642C30.9667 26.7152 31.0077 26.9202 31.1857 27.0842L32.8537 28.7112C33.1407 28.9842 33.3187 29.0662 33.4957 29.0662ZM10.4317 28.6562H24.5957C25.3337 28.6562 25.9357 28.0412 25.9357 27.3162C25.9357 26.5922 25.3337 25.9762 24.5957 25.9762H10.4317C9.6797 25.9762 9.0917 26.5922 9.0917 27.3162C9.0917 28.0412 9.6797 28.6562 10.4317 28.6562Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.59912109375 25.56640625"
          className={className}
        >
          <path
            d="              M2.7757 21.4372H25.5257L25.3337 21.2462C25.0877 21.0002 24.8827 20.7132 24.7457 20.4262H2.8297C1.6677 20.4262 1.0117 19.7832 1.0117 18.6212V2.8162C1.0117 1.6542 1.6677 1.0122 2.8297 1.0122H29.3127C30.4607 1.0122 31.1177 1.6542 31.1177 2.8162V14.4652C31.2947 14.4512 31.4587 14.4512 31.6227 14.4512C31.8007 14.4512 31.9647 14.4512 32.1287 14.4652V2.7752C32.1287 1.0122 31.1177 0.0002 29.3537 0.0002H2.7757C1.0117 0.0002 -0.0003 1.0122 -0.0003 2.7752V18.6622C-0.0003 20.4262 1.0117 21.4372 2.7757 21.4372ZM25.4977 19.7012C25.6207 19.8242 25.7847 19.8242 25.8807 19.7152C27.3847 18.1832 29.3397 17.3082 31.6367 17.3082C33.9197 17.3082 35.8747 18.1832 37.3787 19.7152C37.4747 19.8242 37.6387 19.8242 37.7617 19.7012L38.5277 18.9082C38.6227 18.8122 38.6227 18.7032 38.5277 18.5802C37.0507 16.8032 34.3847 15.6682 31.6367 15.6682C28.8747 15.6682 26.2087 16.8032 24.7327 18.5802C24.6367 18.7032 24.6367 18.8122 24.7327 18.9082ZM28.0687 22.2852C28.1777 22.3942 28.3147 22.3812 28.4377 22.2582C29.2437 21.4372 30.3657 20.8772 31.6367 20.8772C32.8947 20.8772 34.0017 21.4652 34.8227 22.2582C34.9457 22.3812 35.0817 22.3942 35.1917 22.2852L36.0257 21.4372C36.1077 21.3282 36.0937 21.2192 36.0117 21.1232C34.9727 20.0022 33.4137 19.2632 31.6367 19.2632C29.8457 19.2632 28.3007 20.0152 27.2477 21.1232C27.1527 21.2192 27.1527 21.3282 27.2347 21.4372ZM31.6367 25.5662C31.7737 25.5662 31.9237 25.5122 32.0467 25.3882L33.4827 23.9802C33.5777 23.8982 33.5777 23.7752 33.4957 23.6802C33.1137 23.2012 32.3887 22.8322 31.6367 22.8322C30.8707 22.8322 30.1467 23.2012 29.7637 23.6802C29.6817 23.7752 29.6817 23.8982 29.7777 23.9802L31.2127 25.3882C31.3357 25.5122 31.4867 25.5662 31.6367 25.5662ZM9.5297 24.9922H22.5997C22.8867 24.9922 23.1187 24.7732 23.1187 24.4862C23.1187 24.1852 22.8867 23.9672 22.5997 23.9672H9.5297C9.2427 23.9672 9.0097 24.1852 9.0097 24.4862C9.0097 24.7732 9.2427 24.9922 9.5297 24.9922Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.95654296875 24.8828125"
          className={className}
        >
          <path
            d="              M2.5707 21.0684H25.7027L25.5797 20.9454C25.4027 20.7674 25.2107 20.5764 25.0057 20.3984H2.6117C1.3677 20.3984 0.6697 19.7144 0.6697 18.4704V2.5974C0.6697 1.3534 1.3677 0.6704 2.6117 0.6704H28.9157C30.1597 0.6704 30.8707 1.3534 30.8707 2.5974V14.3284C30.9807 14.3284 31.0897 14.3284 31.1997 14.3284C31.3227 14.3284 31.4177 14.3284 31.5407 14.3284V2.5704C31.5407 0.9164 30.6247 0.0004 28.9707 0.0004H2.5707C0.9157 0.0004 -0.0003 0.9164 -0.0003 2.5704V18.4984C-0.0003 20.1524 0.9157 21.0684 2.5707 21.0684ZM25.2517 19.1684C25.3617 19.2774 25.4707 19.2774 25.5667 19.1814C27.0567 17.6914 28.9847 16.8304 31.2127 16.8304C33.4417 16.8304 35.3557 17.6914 36.8597 19.1814C36.9417 19.2774 37.0647 19.2774 37.1597 19.1684L37.8847 18.4294C37.9807 18.3344 37.9807 18.2524 37.8847 18.1424C36.4627 16.4474 33.8927 15.3674 31.2127 15.3674C28.5197 15.3674 25.9497 16.4474 24.5277 18.1424C24.4317 18.2524 24.4317 18.3344 24.5277 18.4294ZM27.7677 21.6974C27.8497 21.7794 27.9457 21.7654 28.0547 21.6564C28.8477 20.8634 29.9547 20.3164 31.2127 20.3164C32.4567 20.3164 33.5647 20.8494 34.3577 21.6564C34.4667 21.7654 34.5627 21.7794 34.6587 21.6974L35.4377 20.8904C35.5057 20.8084 35.4787 20.7124 35.4097 20.6444C34.3437 19.5784 32.8947 18.8674 31.2127 18.8674C29.5177 18.8674 28.0687 19.5784 27.0017 20.6444C26.9337 20.7124 26.9067 20.8084 26.9747 20.8904ZM31.2127 24.8824C31.3497 24.8824 31.4867 24.8284 31.5687 24.7464L32.9627 23.3924C33.0317 23.3244 33.0317 23.2144 32.9627 23.1324C32.6077 22.6954 31.9237 22.3534 31.2127 22.3534C30.4887 22.3534 29.8047 22.6954 29.4497 23.1324C29.3807 23.2144 29.3807 23.3244 29.4497 23.3924L30.8437 24.7464C30.9257 24.8284 31.0627 24.8824 31.2127 24.8824ZM9.3377 24.3084H22.2027C22.4087 24.3084 22.5587 24.1714 22.5587 23.9664C22.5587 23.7614 22.4087 23.6384 22.2027 23.6384H9.3377C9.1327 23.6384 8.9827 23.7614 8.9827 23.9664C8.9827 24.1714 9.1327 24.3084 9.3377 24.3084Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}