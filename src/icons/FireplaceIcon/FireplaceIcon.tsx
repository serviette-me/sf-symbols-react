import { IconProps } from "../../types"

export default function FireplaceIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.1171875 33.76953125"
          className={className}
        >
          <path
            d="              M2.4337 33.7699H35.6977C37.0367 33.7699 38.1177 32.6759 38.1177 31.3359C38.1177 29.9959 37.0367 28.9159 35.6977 28.9159H34.2067V11.0059H35.7927C37.0647 11.0059 37.9667 10.1039 37.9667 8.8319V2.1599C37.9667 0.8749 37.0647 -0.0001 35.7927 -0.0001H2.3247C1.0387 -0.0001 0.1507 0.8749 0.1507 2.1599V8.8319C0.1507 10.1039 1.0387 11.0059 2.3247 11.0059H3.9237V28.9159H2.4337C1.0937 28.9159 -0.0003 29.9959 -0.0003 31.3359C-0.0003 32.6759 1.0937 33.7699 2.4337 33.7699ZM4.8537 6.6309C4.6617 6.6309 4.5257 6.4939 4.5257 6.3029V4.7169C4.5257 4.5119 4.6617 4.3749 4.8537 4.3749H33.2637C33.4547 4.3749 33.5917 4.5119 33.5917 4.7169V6.3029C33.5917 6.4939 33.4547 6.6309 33.2637 6.6309ZM27.7127 14.7249C27.7127 13.5489 26.9477 12.7969 25.7847 12.7969H12.3457C11.1697 12.7969 10.4047 13.5489 10.4047 14.7249V28.9159H8.2987V11.0059H29.8317V28.9159H27.7127ZM13.2067 16.1599C13.2067 15.8179 13.4397 15.5859 13.7947 15.5859H24.3357C24.6777 15.5859 24.9097 15.8179 24.9097 16.1599V28.9159H13.2067ZM18.9357 27.7129C21.4787 27.7129 23.1327 26.0039 23.1327 23.4749C23.1327 19.2359 19.5367 17.4859 17.0897 17.4859C16.3787 17.4859 16.0647 17.8829 16.4337 18.3889C16.9667 19.0589 17.5277 19.7969 17.5407 20.9729C17.2677 20.4669 16.8027 20.1109 16.3657 20.1109C16.1597 20.1109 16.0237 20.2349 16.0237 20.4529V20.9589C16.0237 22.1079 15.2437 22.7499 15.2437 24.4589C15.2437 26.4139 16.7347 27.7129 18.9357 27.7129ZM19.0857 26.3869C18.1977 26.3869 17.5817 25.8669 17.5817 25.0329C17.5817 24.1989 18.1977 23.8849 18.2797 23.2829C18.5527 23.4609 18.6897 23.6799 18.8267 24.0349C19.0857 23.6659 19.2907 23.0099 19.1137 22.0799C19.8247 22.3129 20.7817 23.3109 20.7817 24.5959C20.7817 25.5529 20.2347 26.3869 19.0857 26.3869Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.64453125 30.59765625"
          className={className}
        >
          <path
            d="              M1.7633 30.5976H32.8813C33.8513 30.5976 34.6443 29.8046 34.6443 28.8336C34.6443 27.8636 33.8513 27.0706 32.8813 27.0706H31.1313V9.2286H32.7713C33.8383 9.2286 34.5763 8.4906 34.5763 7.4106V1.8046C34.5763 0.7386 33.8383 -0.0004 32.7713 -0.0004H1.8593C0.7793 -0.0004 0.0413 0.7386 0.0413 1.8046V7.4106C0.0413 8.4906 0.7793 9.2286 1.8593 9.2286H3.5133V27.0706H1.7633C0.7933 27.0706 0.0003 27.8636 0.0003 28.8336C0.0003 29.8046 0.7933 30.5976 1.7633 30.5976ZM3.6773 5.9336C3.4723 5.9336 3.3363 5.7966 3.3363 5.5916V3.6506C3.3363 3.4456 3.4723 3.2946 3.6773 3.2946H30.9533C31.1443 3.2946 31.2953 3.4456 31.2953 3.6506V5.5916C31.2953 5.7966 31.1443 5.9336 30.9533 5.9336ZM25.6213 13.0976C25.6213 11.9216 24.8693 11.1696 23.6933 11.1696H10.9373C9.7613 11.1696 9.0093 11.9216 9.0093 13.0976V27.0706H6.7953V9.2286H27.8363V27.0706H25.6213ZM11.2793 14.0686C11.2793 13.6716 11.5253 13.4256 11.9083 13.4256H22.7223C23.1193 13.4256 23.3653 13.6716 23.3653 14.0686V27.0706H11.2793ZM17.1443 25.9496C19.7563 25.9496 21.4513 24.1996 21.4513 21.5876C21.4513 17.2126 17.7463 15.4086 15.2033 15.4086C14.5063 15.4086 14.2053 15.8046 14.5743 16.2966C15.1483 17.0216 15.7093 17.8286 15.6953 19.0316C15.4083 18.4976 14.9163 18.1286 14.4653 18.1286C14.2733 18.1286 14.1363 18.2516 14.1363 18.4566C14.1363 18.5796 14.1363 18.8126 14.1363 18.9906C14.1363 20.2066 13.3303 20.8496 13.3303 22.5996C13.3303 24.6226 14.8613 25.9496 17.1443 25.9496ZM17.2953 24.5816C16.3793 24.5816 15.7503 24.0356 15.7503 23.2016C15.7503 22.3396 16.3793 22.0256 16.4743 21.4106C16.7343 21.5876 16.8983 21.8336 17.0353 22.1756C17.3083 21.7796 17.4863 21.1096 17.3223 20.1936C18.0883 20.4536 19.0173 21.4786 19.0173 22.7496C19.0173 23.7206 18.4573 24.5816 17.2953 24.5816Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.4765625 32.279296875"
          className={className}
        >
          <path
            d="              M2.105 32.2796H34.371C35.533 32.2796 36.477 31.3226 36.477 30.1606C36.477 28.9976 35.533 28.0406 34.371 28.0406H32.744V10.1716H34.357C35.547 10.1716 36.367 9.3376 36.367 8.1626V1.9966C36.367 0.8206 35.547 -0.0004 34.357 -0.0004H2.105C0.916 -0.0004 0.096 0.8206 0.096 1.9966V8.1626C0.096 9.3376 0.916 10.1716 2.105 10.1716H3.732V28.0406H2.105C0.943 28.0406 0 28.9976 0 30.1606C0 31.3226 0.943 32.2796 2.105 32.2796ZM4.293 6.3026C4.102 6.3026 3.965 6.1656 3.965 5.9746V4.2246C3.965 4.0056 4.102 3.8696 4.293 3.8696H32.17C32.361 3.8696 32.498 4.0056 32.498 4.2246V5.9746C32.498 6.1656 32.361 6.3026 32.17 6.3026ZM26.729 13.9586C26.729 12.7836 25.963 12.0316 24.801 12.0316H11.676C10.514 12.0316 9.748 12.7836 9.748 13.9586V28.0406H7.588V10.1716H28.889V28.0406H26.729ZM12.291 15.1756C12.291 14.8066 12.537 14.5746 12.906 14.5746H23.57C23.939 14.5746 24.172 14.8066 24.172 15.1756V28.0406H12.291ZM18.088 26.8786C20.672 26.8786 22.34 25.1566 22.34 22.5856C22.34 18.2926 18.689 16.5016 16.201 16.5016C15.504 16.5016 15.189 16.9126 15.559 17.4046C16.105 18.1016 16.666 18.8806 16.666 20.0706C16.393 19.5376 15.914 19.1816 15.477 19.1816C15.258 19.1816 15.135 19.3046 15.135 19.5096C15.135 19.6196 15.135 19.8656 15.135 20.0426C15.135 21.2046 14.342 21.8616 14.342 23.5836C14.342 25.5666 15.859 26.8786 18.088 26.8786ZM18.238 25.5386C17.336 25.5386 16.721 25.0056 16.721 24.1716C16.721 23.3246 17.336 23.0096 17.432 22.4086C17.691 22.5726 17.842 22.8186 17.979 23.1606C18.252 22.7776 18.443 22.1216 18.266 21.1916C19.004 21.4376 19.947 22.4496 19.947 23.7346C19.947 24.6916 19.4 25.5386 18.238 25.5386Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.88671875 25.908203125"
          className={className}
        >
          <path
            d="              M0.9437 25.908H28.9437C29.4087 25.908 29.7907 25.525 29.7907 25.061C29.7907 24.596 29.4087 24.213 28.9437 24.213H26.9197V6.576H28.5467C29.3537 6.576 29.8867 6.043 29.8867 5.223V1.34C29.8867 0.519 29.3537 0 28.5467 0H1.3397C0.5337 0 -0.0003 0.519 -0.0003 1.34V5.223C-0.0003 6.043 0.5337 6.576 1.3397 6.576H2.9667V24.213H0.9437C0.4787 24.213 0.0957 24.596 0.0957 25.061C0.0957 25.525 0.4787 25.908 0.9437 25.908ZM2.0777 4.881C1.8597 4.881 1.6957 4.717 1.6957 4.484V2.092C1.6957 1.846 1.8597 1.682 2.0777 1.682H27.8087C28.0277 1.682 28.1917 1.846 28.1917 2.092V4.484C28.1917 4.717 28.0277 4.881 27.8087 4.881ZM22.6407 10.76C22.6407 9.584 21.9157 8.859 20.7537 8.859H9.1327C7.9707 8.859 7.2457 9.584 7.2457 10.76V24.213H4.6617V6.576H25.2247V24.213H22.6407ZM8.6267 11.074C8.6267 10.541 8.9417 10.227 9.4607 10.227H20.4257C20.9457 10.227 21.2597 10.541 21.2597 11.074V24.213H8.6267ZM14.7797 23.078C17.3767 23.078 19.0997 21.328 19.0997 18.676C19.0997 14.273 15.3537 12.414 12.6877 12.414C12.1137 12.414 11.8807 12.769 12.1677 13.166C12.8927 14.041 13.3987 15.012 13.2757 16.174C12.9887 15.6 12.4007 15.23 12.0037 15.23C11.8397 15.23 11.7437 15.312 11.7437 15.477C11.7437 15.613 11.7717 15.873 11.7717 16.078C11.7717 17.377 10.9237 17.978 10.9237 19.742C10.9237 21.766 12.4547 23.078 14.7797 23.078ZM14.9157 21.684C14.0137 21.684 13.3987 21.137 13.3987 20.316C13.3987 19.482 14.0137 19.182 14.1097 18.58C14.3557 18.744 14.5467 19.004 14.6697 19.318C14.9567 18.894 15.0937 18.197 14.9297 17.377C15.8187 17.746 16.6117 18.744 16.6117 19.879C16.6117 20.836 16.0507 21.684 14.9157 21.684Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.4296875 28.57421875"
          className={className}
        >
          <path
            d="              M1.3533 28.5739H31.0903C31.8283 28.5739 32.4293 27.9589 32.4293 27.2349C32.4293 26.4959 31.8283 25.8949 31.0903 25.8949H29.1753V8.0799H30.8573C31.8003 8.0799 32.4293 7.4379 32.4293 6.4939V1.5719C32.4293 0.6429 31.8003 -0.0001 30.8573 -0.0001H1.5723C0.6423 -0.0001 0.0003 0.6429 0.0003 1.5719V6.4939C0.0003 7.4379 0.6423 8.0799 1.5723 8.0799H3.2673V25.8949H1.3533C0.6153 25.8949 0.0133 26.4959 0.0133 27.2349C0.0133 27.9589 0.6153 28.5739 1.3533 28.5739ZM2.9393 5.4829C2.7343 5.4829 2.5973 5.3459 2.5973 5.1409V2.9669C2.5973 2.7479 2.7343 2.5979 2.9393 2.5979H29.4903C29.6953 2.5979 29.8453 2.7479 29.8453 2.9669V5.1409C29.8453 5.3459 29.6953 5.4829 29.4903 5.4829ZM24.2953 12.0449C24.2953 10.8689 23.5563 10.1309 22.3813 10.1309H10.0493C8.8863 10.1309 8.1343 10.8689 8.1343 12.0449V25.8949H5.8513V8.0799H26.5783V25.8949H24.2953ZM10.0493 12.7149C10.0493 12.2909 10.3083 12.0309 10.7183 12.0309H21.7113C22.1213 12.0309 22.3813 12.2909 22.3813 12.7149V25.8949H10.0493ZM16.0093 24.8149C18.6623 24.8149 20.3983 23.0369 20.3983 20.3709C20.3983 15.9279 16.6253 14.0679 14.0133 14.0679C13.3303 14.0679 13.0293 14.4789 13.3843 14.9569C14.0003 15.7229 14.5603 16.5699 14.5333 17.7869C14.2463 17.2399 13.7133 16.8579 13.2753 16.8579C13.0703 16.8579 12.9473 16.9809 12.9473 17.1719C12.9473 17.2949 12.9613 17.5549 12.9613 17.7329C12.9613 18.9769 12.1273 19.6329 12.1273 21.4099C12.1273 23.4609 13.6853 24.8149 16.0093 24.8149ZM16.1603 23.4199C15.2303 23.4199 14.6013 22.8729 14.6013 22.0119C14.6013 21.1509 15.2303 20.8219 15.3403 20.2069C15.5993 20.3709 15.7633 20.6309 15.9003 20.9729C16.1743 20.5759 16.3513 19.8929 16.1873 18.9629C16.9943 19.2499 17.9103 20.2889 17.9103 21.5609C17.9103 22.5589 17.3493 23.4199 16.1603 23.4199Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.25390625 27.42578125"
          className={className}
        >
          <path
            d="              M1.1487 27.4257H30.1057C30.7067 27.4257 31.2127 26.9197 31.2127 26.3187C31.2127 25.7167 30.7067 25.2247 30.1057 25.2247H28.1097V7.4377H29.8047C30.6657 7.4377 31.2537 6.8497 31.2537 5.9747V1.4357C31.2537 0.5877 30.6657 -0.0003 29.8047 -0.0003H1.4497C0.5877 -0.0003 -0.0003 0.5877 -0.0003 1.4357V5.9747C-0.0003 6.8497 0.5877 7.4377 1.4497 7.4377H3.1447V25.2247H1.1487C0.5467 25.2247 0.0407 25.7167 0.0407 26.3187C0.0407 26.9197 0.5467 27.4257 1.1487 27.4257ZM2.5567 5.2367C2.3517 5.2367 2.2017 5.0857 2.2017 4.8677V2.5707C2.2017 2.3517 2.3517 2.2017 2.5567 2.2017H28.6977C28.9027 2.2017 29.0527 2.3517 29.0527 2.5707V4.8677C29.0527 5.0857 28.9027 5.2367 28.6977 5.2367ZM23.5837 11.4567C23.5837 10.2677 22.8457 9.5427 21.6697 9.5427H9.5837C8.4087 9.5427 7.6697 10.2677 7.6697 11.4567V25.2247H5.3457V7.4377H25.9087V25.2247H23.5837ZM9.3927 11.9497C9.3927 11.5117 9.6527 11.2517 10.0767 11.2517H21.1777C21.6017 11.2517 21.8617 11.5117 21.8617 11.9497V25.2247H9.3927ZM15.4087 24.1717C18.0877 24.1717 19.8377 22.3807 19.8377 19.6877C19.8377 15.1897 16.0097 13.3167 13.3707 13.3167C12.6877 13.3167 12.4007 13.7127 12.7557 14.1917C13.3847 14.9847 13.9457 15.8597 13.9047 17.0767C13.6037 16.5157 13.0707 16.1327 12.6327 16.1327C12.4277 16.1327 12.3187 16.2557 12.3187 16.4477C12.3187 16.5707 12.3187 16.8297 12.3187 17.0217C12.3187 18.2797 11.4847 18.9357 11.4847 20.7407C11.4847 22.8187 13.0567 24.1717 15.4087 24.1717ZM15.5447 22.7637C14.6157 22.7637 13.9867 22.2027 13.9867 21.3417C13.9867 20.4667 14.6157 20.1527 14.7247 19.5237C14.9847 19.7017 15.1617 19.9607 15.2847 20.3027C15.5727 19.8927 15.7497 19.1957 15.5857 18.2797C16.4067 18.5797 17.3227 19.6187 17.3227 20.8907C17.3227 21.8887 16.7477 22.7637 15.5447 22.7637Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.38671875 29.435546875"
          className={className}
        >
          <path
            d="              M1.5313 29.4357H31.8553C32.7033 29.4357 33.3863 28.7517 33.3863 27.9047C33.3863 27.0707 32.7033 26.3867 31.8553 26.3867H30.0093V8.5587H31.6773C32.6753 8.5587 33.3593 7.8747 33.3593 6.8767V1.6547C33.3593 0.6697 32.6753 -0.0003 31.6773 -0.0003H1.6953C0.6973 -0.0003 0.0133 0.6697 0.0133 1.6547V6.8767C0.0133 7.8747 0.6973 8.5587 1.6953 8.5587H3.3633V26.3867H1.5313C0.6833 26.3867 0.0003 27.0707 0.0003 27.9047C0.0003 28.7517 0.6833 29.4357 1.5313 29.4357ZM3.2543 5.6737C3.0623 5.6737 2.9123 5.5237 2.9123 5.3187V3.2537C2.9123 3.0347 3.0623 2.8847 3.2543 2.8847H30.1193C30.3243 2.8847 30.4743 3.0347 30.4743 3.2537V5.3187C30.4743 5.5237 30.3243 5.6737 30.1193 5.6737ZM24.8693 12.4827C24.8693 11.3067 24.1173 10.5687 22.9553 10.5687H10.4313C9.2693 10.5687 8.5173 11.3067 8.5173 12.4827V26.3867H6.2613V8.5587H27.1253V26.3867H24.8693ZM10.5823 13.2887C10.5823 12.8787 10.8283 12.6187 11.2383 12.6187H22.1483C22.5453 12.6187 22.8043 12.8787 22.8043 13.2887V26.3867H10.5823ZM16.5023 25.2927C19.1403 25.2927 20.8493 23.5297 20.8493 20.8907C20.8493 16.4747 17.1033 14.6287 14.5193 14.6287C13.8363 14.6287 13.5353 15.0387 13.9043 15.5177C14.4923 16.2697 15.0523 17.1037 15.0393 18.3207C14.7523 17.7737 14.2323 17.3907 13.7953 17.3907C13.5903 17.3907 13.4663 17.5137 13.4663 17.7187C13.4663 17.8417 13.4663 18.0877 13.4663 18.2657C13.4663 19.4957 12.6463 20.1527 12.6463 21.9157C12.6463 23.9527 14.1913 25.2927 16.5023 25.2927ZM16.6523 23.9117C15.7223 23.9117 15.0933 23.3657 15.0933 22.5177C15.0933 21.6427 15.7223 21.3277 15.8323 20.7127C16.0913 20.8907 16.2563 21.1367 16.3923 21.4787C16.6663 21.0817 16.8433 20.3987 16.6793 19.4827C17.4593 19.7557 18.3883 20.7947 18.3883 22.0667C18.3883 23.0507 17.8283 23.9117 16.6523 23.9117Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.068359375 23.912109375"
          className={className}
        >
          <path
            d="              M0.6837 23.912H27.4117C27.6857 23.912 27.9177 23.68 27.9177 23.406C27.9177 23.119 27.6857 22.9 27.4117 22.9H25.3477V5.441H26.8787C27.6177 5.441 28.0687 4.99 28.0687 4.225V1.217C28.0687 0.465 27.6177 0 26.8787 0H1.2027C0.4517 0 -0.0003 0.465 -0.0003 1.217V4.225C-0.0003 4.99 0.4517 5.441 1.2027 5.441H2.7347V22.9H0.6837C0.4097 22.9 0.1777 23.119 0.1777 23.406C0.1777 23.68 0.4097 23.912 0.6837 23.912ZM1.4357 4.43C1.2027 4.43 1.0117 4.238 1.0117 3.992V1.463C1.0117 1.203 1.2027 1.025 1.4357 1.025H26.6467C26.8787 1.025 27.0567 1.203 27.0567 1.463V3.992C27.0567 4.238 26.8787 4.43 26.6467 4.43ZM21.3687 9.871C21.3687 8.668 20.6997 7.984 19.5237 7.984H8.5447C7.3827 7.984 6.6997 8.668 6.6997 9.871V22.9H3.7457V5.441H24.3357V22.9H21.3687ZM7.6157 9.953C7.6157 9.283 7.9847 8.887 8.6267 8.887H19.4547C20.0837 8.887 20.4667 9.283 20.4667 9.953V22.9H7.6157ZM13.9587 21.656C16.4607 21.656 18.1157 19.961 18.1157 17.363C18.1157 13.07 14.4647 11.238 11.7847 11.238C11.3477 11.238 11.1837 11.539 11.4027 11.813C12.2367 12.824 12.6597 13.904 12.4547 14.984C12.1677 14.41 11.5257 14.041 11.1697 14.041C11.0607 14.041 10.9927 14.096 10.9927 14.205C10.9927 14.342 11.0467 14.629 11.0467 14.848C11.0467 16.188 10.1857 16.721 10.1857 18.43C10.1857 20.385 11.6617 21.656 13.9587 21.656ZM14.0687 20.262C13.2067 20.262 12.6467 19.742 12.6467 18.977C12.6467 18.184 13.2067 17.896 13.3027 17.35C13.5347 17.486 13.7407 17.76 13.8497 18.033C14.1367 17.582 14.2327 16.898 14.0817 16.201C15.0527 16.666 15.6677 17.609 15.6677 18.566C15.6677 19.469 15.1347 20.262 14.0687 20.262Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.15234375 22.88671875"
          className={className}
        >
          <path
            d="              M0.5467 22.8865H26.6187C26.7967 22.8865 26.9477 22.7365 26.9477 22.5445C26.9477 22.3675 26.7967 22.2165 26.6187 22.2165H24.5407V4.8535H26.0177C26.7287 4.8535 27.1527 4.4435 27.1527 3.7055V1.1485C27.1527 0.4105 26.7287 0.0005 26.0177 0.0005H1.1347C0.4097 0.0005 -0.0003 0.4105 -0.0003 1.1485V3.7055C-0.0003 4.4435 0.4097 4.8535 1.1347 4.8535H2.6117V22.2165H0.5467C0.3687 22.2165 0.2187 22.3675 0.2187 22.5445C0.2187 22.7365 0.3687 22.8865 0.5467 22.8865ZM1.1077 4.1835C0.8617 4.1835 0.6697 3.9925 0.6697 3.7325V1.1215C0.6697 0.8615 0.8617 0.6695 1.1077 0.6695H26.0447C26.2907 0.6695 26.4827 0.8615 26.4827 1.1215V3.7325C26.4827 3.9925 26.2907 4.1835 26.0447 4.1835ZM20.7267 9.4065C20.7267 8.2035 20.0707 7.5195 18.8947 7.5195H8.2437C7.0817 7.5195 6.4117 8.2035 6.4117 9.4065V22.2165H3.2817V4.8535H23.8707V22.2165H20.7267ZM7.0957 9.3655C7.0957 8.6265 7.5057 8.2035 8.2027 8.2035H18.9497C19.6467 8.2035 20.0567 8.6265 20.0567 9.3655V22.2165H7.0957ZM13.5487 20.9185C15.9827 20.9185 17.6227 19.2505 17.6227 16.6795C17.6227 12.4415 14.0137 10.6365 11.3207 10.6365C10.9647 10.6365 10.8277 10.8965 11.0197 11.1155C11.9087 12.1815 12.2907 13.3165 12.0177 14.3695C11.7437 13.7945 11.0747 13.4255 10.7457 13.4255C10.6637 13.4255 10.6097 13.4535 10.6097 13.5355C10.6097 13.6855 10.6637 13.9725 10.6637 14.2055C10.6637 15.5725 9.8167 16.0785 9.8167 17.7465C9.8167 19.6735 11.2517 20.9185 13.5487 20.9185ZM13.6307 19.5235C12.7967 19.5235 12.2497 19.0175 12.2497 18.2795C12.2497 17.5135 12.7967 17.2405 12.8927 16.7075C13.1117 16.8435 13.3297 17.1175 13.4397 17.3635C13.7127 16.9125 13.7817 16.2285 13.6447 15.5855C14.6567 16.0915 15.1757 17.0215 15.1757 17.8825C15.1757 18.7575 14.6697 19.5235 13.6307 19.5235Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}