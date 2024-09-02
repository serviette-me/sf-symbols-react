import { IconProps } from "../../types"

export default function LightswitchOffIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.515625 30.953125"
          className={className}
        >
          <path
            d="              M5.3597 0C1.9827 0 -0.0003 1.969 -0.0003 5.359V25.594C-0.0003 28.984 1.9827 30.953 5.3597 30.953H18.1567C21.5337 30.953 23.5157 28.984 23.5157 25.594V5.359C23.5157 1.969 21.5337 0 18.1567 0ZM6.1117 4.854H17.4047C18.3067 4.854 18.6487 5.264 18.6487 6.098V24.855C18.6487 25.689 18.3067 26.1 17.4047 26.1H6.1117C5.1957 26.1 4.8537 25.689 4.8537 24.855V6.098C4.8537 5.264 5.1957 4.854 6.1117 4.854ZM7.9437 17.24C7.5747 17.24 7.4237 17.404 7.4237 17.773V22.996C7.4237 23.365 7.5747 23.529 7.9437 23.529H15.5587C15.9277 23.529 16.0777 23.365 16.0777 22.996V17.773C16.0777 17.404 15.9277 17.24 15.5587 17.24Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.779296875 30.59765625"
          className={className}
        >
          <path
            d="              M4.7987 0.0003C1.6957 0.0003 -0.0003 1.7093 -0.0003 4.8263V25.7712C-0.0003 28.8883 1.6957 30.5973 4.7987 30.5973H16.9807C20.0837 30.5973 21.7797 28.8883 21.7797 25.7712V4.8263C21.7797 1.7093 20.0837 0.0003 16.9807 0.0003ZM5.2227 3.5272H16.5427C17.7047 3.5272 18.2517 4.1013 18.2517 5.2093V25.3883C18.2517 26.4823 17.7047 27.0703 16.5427 27.0703H5.2227C4.0607 27.0703 3.5277 26.4823 3.5277 25.3883V5.2093C3.5277 4.1013 4.0607 3.5272 5.2227 3.5272ZM6.6037 17.4043C5.9887 17.4043 5.7287 17.6503 5.7287 18.2653V23.9803C5.7287 24.5953 5.9887 24.8423 6.6037 24.8423H15.1347C15.7637 24.8423 16.0097 24.5953 16.0097 23.9803V18.2653C16.0097 17.6503 15.7637 17.4043 15.1347 17.4043Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.6953125 30.7890625"
          className={className}
        >
          <path
            d="              M5.0997 0C1.8457 0 -0.0003 1.846 -0.0003 5.113V25.676C-0.0003 28.943 1.8457 30.789 5.0997 30.789H17.5957C20.8497 30.789 22.6957 28.943 22.6957 25.676V5.113C22.6957 1.846 20.8497 0 17.5957 0ZM5.6877 4.225H16.9937C18.0197 4.225 18.4567 4.717 18.4567 5.674V25.102C18.4567 26.072 18.0197 26.565 16.9937 26.565H5.6877C4.6617 26.565 4.2247 26.072 4.2247 25.102V5.674C4.2247 4.717 4.6617 4.225 5.6877 4.225ZM7.3147 17.322C6.8227 17.322 6.6307 17.527 6.6307 18.006V23.461C6.6307 23.953 6.8227 24.158 7.3147 24.158H15.3537C15.8457 24.158 16.0507 23.953 16.0507 23.461V18.006C16.0507 17.527 15.8457 17.322 15.3537 17.322Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.236328125 29.75"
          className={className}
        >
          <path
            d="              M3.9927 0.0004C1.3537 0.0004 -0.0003 1.3674 -0.0003 4.0334V25.7164C-0.0003 28.3964 1.3537 29.7504 3.9927 29.7504H15.2307C17.8827 29.7504 19.2367 28.3964 19.2367 25.7164V4.0334C19.2367 1.3674 17.8827 0.0004 15.2307 0.0004ZM4.0877 1.6954H15.1487C16.7207 1.6954 17.5407 2.5294 17.5407 4.0604V25.6894C17.5407 27.2344 16.7207 28.0544 15.1487 28.0544H4.0877C2.5017 28.0544 1.6957 27.2344 1.6957 25.6894V4.0604C1.6957 2.5294 2.5017 1.6954 4.0877 1.6954ZM4.6897 17.6644C3.7047 17.6644 3.2677 18.1014 3.2677 19.0724V25.0604C3.2677 26.0314 3.7047 26.4684 4.6897 26.4684H14.5057C15.4907 26.4684 15.9277 26.0314 15.9277 25.0604V19.0724C15.9277 18.1014 15.4907 17.6644 14.5057 17.6644Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.658203125 30.365234375"
          className={className}
        >
          <path
            d="              M4.4437 -0.0001C1.5177 -0.0001 -0.0003 1.5309 -0.0003 4.4839V25.8809C-0.0003 28.8479 1.5177 30.3649 4.4437 30.3649H16.2287C19.1547 30.3649 20.6587 28.8479 20.6587 25.8809V4.4839C20.6587 1.5309 19.1547 -0.0001 16.2287 -0.0001ZM4.6617 2.6799H15.9957C17.3227 2.6799 17.9787 3.3769 17.9787 4.6489V25.7309C17.9787 26.9879 17.3227 27.6859 15.9957 27.6859H4.6617C3.3357 27.6859 2.6797 26.9879 2.6797 25.7309V4.6489C2.6797 3.3769 3.3357 2.6799 4.6617 2.6799ZM5.7557 17.4999C4.9627 17.4999 4.6487 17.8149 4.6487 18.5799V24.6089C4.6487 25.3889 4.9627 25.6899 5.7557 25.6899H14.8617C15.6547 25.6899 15.9687 25.3889 15.9687 24.6089V18.5799C15.9687 17.8149 15.6547 17.4999 14.8617 17.4999Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.04296875 30.2421875"
          className={className}
        >
          <path
            d="              M4.2387 0.0002C1.4087 0.0002 -0.0003 1.4492 -0.0003 4.2932V25.9632C-0.0003 28.8202 1.4087 30.2422 4.2387 30.2422H15.8047C18.6207 30.2422 20.0427 28.8202 20.0427 25.9632V4.2932C20.0427 1.4492 18.6207 0.0002 15.8047 0.0002ZM4.3477 2.2012H15.6817C17.1037 2.2012 17.8417 2.9672 17.8417 4.3342V25.9222C17.8417 27.2892 17.1037 28.0412 15.6817 28.0412H4.3477C2.9257 28.0412 2.2017 27.2892 2.2017 25.9222V4.3342C2.2017 2.9672 2.9257 2.2012 4.3477 2.2012ZM5.2637 17.5682C4.4027 17.5682 4.0467 17.9102 4.0467 18.7712V24.9782C4.0467 25.8402 4.4027 26.1812 5.2637 26.1812H14.7107C15.5857 26.1812 15.9417 25.8402 15.9417 24.9782V18.7712C15.9417 17.9102 15.5857 17.5682 14.7107 17.5682Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.13671875 30.474609375"
          className={className}
        >
          <path
            d="              M4.5937 -0.0004C1.5857 -0.0004 -0.0003 1.6136 -0.0003 4.6346V25.8396C-0.0003 28.8746 1.5857 30.4746 4.5937 30.4746H16.5427C19.5507 30.4746 21.1367 28.8746 21.1367 25.8396V4.6346C21.1367 1.6136 19.5507 -0.0004 16.5427 -0.0004ZM4.9087 3.0486H16.2287C17.4867 3.0486 18.1017 3.6916 18.1017 4.8946V25.5806C18.1017 26.7836 17.4867 27.4256 16.2287 27.4256H4.9087C3.6507 27.4256 3.0487 26.7836 3.0487 25.5806V4.8946C3.0487 3.6916 3.6507 3.0486 4.9087 3.0486ZM6.1247 17.4726C5.4007 17.4726 5.1137 17.7466 5.1137 18.4566V24.3496C5.1137 25.0466 5.4007 25.3336 6.1247 25.3336H14.9847C15.6957 25.3336 15.9827 25.0466 15.9827 24.3496V18.4566C15.9827 17.7466 15.6957 17.4726 14.9847 17.4726Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.15625 29.09375"
          className={className}
        >
          <path
            d="              M3.6777 -0.0004C1.2577 -0.0004 -0.0003 1.2576 -0.0003 3.6776V25.4156C-0.0003 27.8356 1.2577 29.0936 3.6777 29.0936H14.4927C16.8987 29.0936 18.1567 27.8356 18.1567 25.4156V3.6776C18.1567 1.2576 16.8987 -0.0004 14.4927 -0.0004ZM3.7327 1.0116H14.4377C16.2287 1.0116 17.1447 1.9416 17.1447 3.7186V25.3746C17.1447 27.1526 16.2287 28.0816 14.4377 28.0816H3.7327C1.9417 28.0816 1.0117 27.1526 1.0117 25.3746V3.7186C1.0117 1.9416 1.9417 1.0116 3.7327 1.0116ZM3.9237 17.7866C2.8027 17.7866 2.2287 18.3616 2.2287 19.4686V25.1696C2.2287 26.2906 2.8027 26.8656 3.9237 26.8656H14.2327C15.3537 26.8656 15.9137 26.2906 15.9137 25.1696V19.4686C15.9137 18.3616 15.3537 17.7866 14.2327 17.7866Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.609375 28.765625"
          className={className}
        >
          <path
            d="              M3.5137 -0.0004C1.2167 -0.0004 -0.0003 1.2166 -0.0003 3.5136V25.2656C-0.0003 27.5486 1.2167 28.7656 3.5137 28.7656H14.1097C16.3927 28.7656 17.6097 27.5486 17.6097 25.2656V3.5136C17.6097 1.2166 16.3927 -0.0004 14.1097 -0.0004ZM3.5407 0.6696H14.0687C15.9687 0.6696 16.9397 1.6546 16.9397 3.5546V25.2246C16.9397 27.1246 15.9687 28.0956 14.0687 28.0956H3.5407C1.6547 28.0956 0.6697 27.1246 0.6697 25.2246V3.5546C0.6697 1.6546 1.6547 0.6696 3.5407 0.6696ZM3.5277 17.8696C2.3377 17.8696 1.6957 18.4976 1.6957 19.6876V25.2386C1.6957 26.4416 2.3377 27.0706 3.5277 27.0706H14.0817C15.2847 27.0706 15.9137 26.4416 15.9137 25.2386V19.6876C15.9137 18.4976 15.2847 17.8696 14.0817 17.8696Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
