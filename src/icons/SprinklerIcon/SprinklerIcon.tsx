import { IconProps } from "../../types"

export default function SprinklerIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.607421875 24.787109375"
          className={className}
        >
          <path
            d="              M2.1057 24.7872H30.5017C31.6637 24.7872 32.6077 23.8302 32.6077 22.6812C32.6077 21.5192 31.6507 20.5762 30.5017 20.5762H20.0017V16.0232C21.2457 15.8052 22.0797 14.8612 22.0797 13.5902V10.8552C22.0797 9.5842 21.2457 8.6402 20.0017 8.4222V7.3012C21.2327 7.1912 22.0797 6.2622 22.0797 4.9902V3.5552C22.0797 1.3672 20.6447 0.0002 18.3477 0.0002H14.2597C11.9767 0.0002 10.5277 1.3672 10.5277 3.5552V4.9902C10.5277 6.2622 11.3747 7.1912 12.6057 7.3012V8.4222C11.3617 8.6402 10.5277 9.5842 10.5277 10.8552V13.5902C10.5277 14.8612 11.3617 15.8052 12.6057 16.0232V20.5762H2.1057C0.9437 20.5762 -0.0003 21.5332 -0.0003 22.6812C-0.0003 23.8442 0.9567 24.7872 2.1057 24.7872ZM13.8767 4.2112C13.7407 4.2112 13.6307 4.0882 13.6307 3.9512V3.5552C13.6307 3.2672 13.8497 3.0902 14.2187 3.0902H18.4027C18.7577 3.0902 18.9767 3.2672 18.9767 3.5552V3.9512C18.9767 4.0882 18.8677 4.2112 18.7307 4.2112ZM15.7087 8.3812V7.3012H16.9117V8.3812ZM13.8767 12.9742C13.7407 12.9742 13.6307 12.8512 13.6307 12.7152V11.7302C13.6307 11.5942 13.7407 11.4712 13.8767 11.4712H18.7307C18.8677 11.4712 18.9767 11.5942 18.9767 11.7302V12.7152C18.9767 12.8512 18.8677 12.9742 18.7307 12.9742ZM15.7087 20.5762V16.0642H16.9117V20.5762Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.6796875 23.54296875"
          className={className}
        >
          <path
            d="              M1.5997 23.5426H29.0797C29.9687 23.5426 30.6797 22.8186 30.6797 21.9436C30.6797 21.0546 29.9547 20.3296 29.0797 20.3296H18.5387V14.9026C19.7697 14.9026 20.6587 14.0406 20.6587 12.7966V10.1996C20.6587 8.9826 19.7967 8.1216 18.5387 8.0936V6.5356H18.6487C19.8247 6.5356 20.6587 5.7016 20.6587 4.5256V3.2126C20.6587 1.2716 19.3187 -0.0004 17.2677 -0.0004H13.4117C11.3617 -0.0004 10.0217 1.2716 10.0217 3.2126V4.5256C10.0217 5.7016 10.8557 6.5356 12.0447 6.5356H12.1547V8.0936C10.9237 8.0936 10.0217 8.9546 10.0217 10.1996V12.7966C10.0217 14.0136 10.8967 14.8746 12.1547 14.9026V20.3296H1.5997C0.7247 20.3296 -0.0003 21.0686 -0.0003 21.9436C-0.0003 22.8186 0.7247 23.5426 1.5997 23.5426ZM12.7837 4.0196C12.6467 4.0196 12.5367 3.9106 12.5367 3.7736V3.2126C12.5367 2.7616 12.8517 2.5016 13.3847 2.5016H17.2947C17.8417 2.5016 18.1427 2.7616 18.1427 3.2126V3.7736C18.1427 3.9106 18.0467 4.0196 17.8967 4.0196ZM14.6697 8.0936V6.5356H16.0237V8.0936ZM12.7837 12.3866C12.6467 12.3866 12.5367 12.2776 12.5367 12.1406V10.8556C12.5367 10.7186 12.6467 10.6096 12.7837 10.6096H17.8967C18.0467 10.6096 18.1427 10.7186 18.1427 10.8556V12.1406C18.1427 12.2776 18.0467 12.3866 17.8967 12.3866ZM14.6697 20.3296V14.9026H16.0237V20.3296Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.705078125 24.19921875"
          className={className}
        >
          <path
            d="              M1.8727 24.1994H29.8317C30.8577 24.1994 31.7047 23.3514 31.7047 22.3264C31.7047 21.3004 30.8437 20.4664 29.8317 20.4664H19.3187V15.5044C20.5627 15.3674 21.4097 14.4644 21.4097 13.2204V10.5414C21.4097 9.2964 20.5627 8.3944 19.3187 8.2574V6.9454C20.5077 6.9454 21.4097 6.0434 21.4097 4.7714V3.3904C21.4097 1.3264 20.0157 0.0004 17.8417 0.0004H13.8637C11.6897 0.0004 10.2947 1.3264 10.2947 3.3904V4.7714C10.2947 6.0154 11.1567 6.9044 12.3867 6.9454V8.2574C11.1427 8.3944 10.2947 9.2964 10.2947 10.5414V13.2204C10.2947 14.4644 11.1427 15.3674 12.3867 15.5044V20.4664H1.8727C0.8337 20.4664 -0.0003 21.3144 -0.0003 22.3264C-0.0003 23.3654 0.8477 24.1994 1.8727 24.1994ZM13.3577 4.1154C13.2207 4.1154 13.1117 4.0054 13.1117 3.8694V3.3904C13.1117 3.0214 13.3707 2.8164 13.8227 2.8164H17.8827C18.3207 2.8164 18.5937 3.0214 18.5937 3.3904V3.8694C18.5937 4.0054 18.4707 4.1154 18.3337 4.1154ZM15.2167 8.2444V6.9454H16.4887V8.2444ZM13.3707 12.7014C13.2207 12.7014 13.1117 12.5784 13.1117 12.4414V11.3204C13.1117 11.1834 13.2207 11.0744 13.3707 11.0744H18.3337C18.4707 11.0744 18.5937 11.1834 18.5937 11.3204V12.4414C18.5937 12.5784 18.4707 12.7014 18.3337 12.7014ZM15.2167 20.4664V15.5174H16.4887V20.4664Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.138671875 21.232421875"
          className={className}
        >
          <path
            d="              M0.8477 21.2325H26.2907C26.7557 21.2325 27.1387 20.8495 27.1387 20.3845C27.1387 19.9195 26.7557 19.5375 26.2907 19.5375H15.9137V12.9335H16.5297C17.4177 12.9335 18.0197 12.3325 18.0197 11.4435V9.0235C18.0197 8.1345 17.4177 7.5335 16.5297 7.5335H15.9137V5.3045H16.5297C17.4177 5.3045 18.0197 4.7035 18.0197 3.8145V2.5975C18.0197 1.0395 16.9257 0.0005 15.2987 0.0005H11.8127C10.1997 0.0005 9.1187 1.0395 9.1187 2.5975V3.8145C9.1187 4.7035 9.7207 5.3045 10.5957 5.3045H11.2387V7.5335H10.6097C9.7207 7.5335 9.1187 8.1345 9.1187 9.0235V11.4435C9.1187 12.3325 9.7207 12.9335 10.6097 12.9335H11.2387V19.5375H0.8477C0.3827 19.5375 -0.0003 19.9195 -0.0003 20.3845C-0.0003 20.8495 0.3827 21.2325 0.8477 21.2325ZM10.9517 3.7875C10.7457 3.7875 10.6227 3.6645 10.6227 3.4725V2.5975C10.6227 1.9005 11.0747 1.5175 11.8127 1.5175H15.2987C16.0647 1.5175 16.5017 1.9005 16.5017 2.5975V3.4725C16.5017 3.6645 16.3787 3.7875 16.1877 3.7875ZM12.7427 7.5335V5.3045H14.3967V7.5335ZM10.9517 11.4165C10.7597 11.4165 10.6367 11.2925 10.6367 11.0875V9.3785C10.6367 9.1735 10.7597 9.0505 10.9517 9.0505H16.1877C16.3787 9.0505 16.5017 9.1735 16.5017 9.3785V11.0875C16.5017 11.2925 16.3787 11.4165 16.1877 11.4165ZM12.7427 19.5375V12.9335H14.3967V19.5375Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.44921875 22.75"
          className={className}
        >
          <path
            d="              M1.2847 22.7504H28.1777C28.8747 22.7504 29.4497 22.1624 29.4497 21.4644C29.4497 20.7674 28.8747 20.1794 28.1777 20.1794H17.5957V14.1504H17.8687C18.9767 14.1504 19.7557 13.3844 19.7557 12.2914V9.7754C19.7557 8.6814 18.9767 7.9164 17.8687 7.9164H17.5957V6.0434H17.9237C19.0037 6.0434 19.7557 5.2914 19.7557 4.2244V3.0074C19.7557 1.2034 18.4847 0.0004 16.5837 0.0004H12.8657C10.9787 0.0004 9.6937 1.2034 9.6937 3.0074V4.2244C9.6937 5.2914 10.4457 6.0434 11.5257 6.0434H11.8537V7.9164H11.5797C10.4727 7.9164 9.7067 8.6814 9.7067 9.7754V12.2914C9.7067 13.3844 10.4727 14.1504 11.5797 14.1504H11.8537V20.1794H1.2847C0.5747 20.1794 -0.0003 20.7674 -0.0003 21.4644C-0.0003 22.1624 0.5877 22.7504 1.2847 22.7504ZM12.0857 3.8964C11.9357 3.8964 11.8397 3.8004 11.8397 3.6644V3.0074C11.8397 2.4334 12.2087 2.1324 12.8517 2.1324H16.5977C17.2407 2.1324 17.6097 2.4334 17.6097 3.0074V3.6644C17.6097 3.8004 17.5137 3.8964 17.3767 3.8964ZM13.9997 7.9164V6.0434H15.4627V7.9164ZM12.0857 12.0034C11.9357 12.0034 11.8397 11.9084 11.8397 11.7714V10.3084C11.8397 10.1584 11.9357 10.0624 12.0857 10.0624H17.3767C17.5137 10.0624 17.6097 10.1584 17.6097 10.3084V11.7714C17.6097 11.9084 17.5137 12.0034 17.3767 12.0034ZM13.9997 20.1794V14.1504H15.4627V20.1794Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.765625 22.3125"
          className={className}
        >
          <path
            d="              M1.0937 22.3127H27.6587C28.2597 22.3127 28.7657 21.8207 28.7657 21.2047C28.7657 20.6037 28.2597 20.1117 27.6587 20.1117H17.0627V13.7407H17.5277C18.5387 13.7407 19.2367 13.0427 19.2367 12.0177V9.5427C19.2367 8.5317 18.5387 7.8337 17.5277 7.8337H17.0627V5.7837H17.5277C18.5387 5.7837 19.2367 5.0727 19.2367 4.0607V2.8987C19.2367 1.1897 18.0057 -0.0003 16.2017 -0.0003H12.5507C10.7457 -0.0003 9.5157 1.1897 9.5157 2.8987V4.0607C9.5157 5.0727 10.2127 5.7837 11.2247 5.7837H11.7027V7.8337H11.2387C10.2267 7.8337 9.5157 8.5317 9.5157 9.5427V12.0177C9.5157 13.0427 10.2267 13.7407 11.2387 13.7407H11.7027V20.1117H1.0937C0.4927 20.1117 -0.0003 20.6037 -0.0003 21.2047C-0.0003 21.8207 0.4927 22.3127 1.0937 22.3127ZM11.6897 3.8417C11.5387 3.8417 11.4437 3.7597 11.4437 3.6097V2.8987C11.4437 2.2557 11.8397 1.9277 12.5507 1.9277H16.2017C16.9117 1.9277 17.3087 2.2557 17.3087 2.8987V3.6097C17.3087 3.7597 17.2127 3.8417 17.0767 3.8417ZM13.6307 7.8337V5.7837H15.1347V7.8337ZM11.6897 11.8127C11.5387 11.8127 11.4437 11.7167 11.4437 11.5667V9.9937C11.4437 9.8577 11.5387 9.7617 11.6897 9.7617H17.0767C17.2127 9.7617 17.3087 9.8577 17.3087 9.9937V11.5667C17.3087 11.7167 17.2127 11.8127 17.0767 11.8127ZM13.6307 20.1117V13.7407H15.1347V20.1117Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.982421875 23.091796875"
          className={className}
        >
          <path
            d="              M1.4217 23.0922H28.5607C29.3397 23.0922 29.9827 22.4492 29.9827 21.6702C29.9827 20.8902 29.3397 20.2482 28.5607 20.2482H18.0057V14.4782H18.1427C19.3187 14.4782 20.1387 13.6722 20.1387 12.5102V9.9532C20.1387 8.8052 19.3187 7.9982 18.1427 7.9982H18.0057V6.2622H18.2387C19.3597 6.2622 20.1387 5.4692 20.1387 4.3472V3.1032C20.1387 1.2302 18.8397 0.0002 16.8847 0.0002H13.0977C11.1427 0.0002 9.8437 1.2302 9.8437 3.1032V4.3472C9.8437 5.4692 10.6227 6.2622 11.7437 6.2622H11.9907V7.9982H11.8537C10.6637 7.9982 9.8437 8.8052 9.8437 9.9532V12.5102C9.8437 13.6722 10.6637 14.4782 11.8537 14.4782H11.9907V20.2482H1.4217C0.6427 20.2482 -0.0003 20.8902 -0.0003 21.6702C-0.0003 22.4492 0.6427 23.0922 1.4217 23.0922ZM12.3867 3.9512C12.2367 3.9512 12.1407 3.8552 12.1407 3.7052V3.1032C12.1407 2.5702 12.4827 2.2972 13.0837 2.2972H16.8987C17.4997 2.2972 17.8417 2.5702 17.8417 3.1032V3.7052C17.8417 3.8552 17.7457 3.9512 17.5957 3.9512ZM14.2867 7.9982V6.2622H15.6957V7.9982ZM12.3867 12.1682C12.2367 12.1682 12.1407 12.0722 12.1407 11.9222V10.5412C12.1407 10.4042 12.2367 10.2952 12.3867 10.2952H17.5957C17.7457 10.2952 17.8417 10.4042 17.8417 10.5412V11.9222C17.8417 12.0722 17.7457 12.1682 17.5957 12.1682ZM14.2867 20.2482V14.4782H15.6957V20.2482Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.9921875 19.783203125"
          className={className}
        >
          <path
            d="              M0.5057 19.7835H24.4867C24.7597 19.7835 24.9927 19.5505 24.9927 19.2775C24.9927 19.0035 24.7597 18.7715 24.4867 18.7715H14.3827V11.8535H15.2027C15.9277 11.8535 16.3927 11.3885 16.3927 10.6645V8.3395C16.3927 7.6155 15.9277 7.1505 15.2027 7.1505H14.3827V4.6755H15.2027C15.9277 4.6755 16.3927 4.2105 16.3927 3.4865V2.1875C16.3927 0.8615 15.5037 -0.0005 14.1227 -0.0005H10.8417C9.4747 -0.0005 8.5857 0.8615 8.5857 2.1875V3.4865C8.5857 4.2105 9.0507 4.6755 9.7617 4.6755H10.6227V7.1505H9.7757C9.0647 7.1505 8.5997 7.6155 8.5997 8.3395V10.6645C8.5997 11.3885 9.0647 11.8535 9.7757 11.8535H10.6227V18.7715H0.5057C0.2327 18.7715 -0.0003 19.0035 -0.0003 19.2775C-0.0003 19.5505 0.2327 19.7835 0.5057 19.7835ZM9.9667 3.7055C9.7067 3.7055 9.5427 3.5405 9.5427 3.2815V2.1875C9.5427 1.4215 10.0487 0.9565 10.8417 0.9565H14.1227C14.9437 0.9565 15.4357 1.4215 15.4357 2.1875V3.2815C15.4357 3.5405 15.2717 3.7055 14.9977 3.7055ZM11.5797 7.1505V4.6755H13.4257V7.1505ZM9.9807 10.8825C9.7207 10.8825 9.5567 10.7185 9.5567 10.4585V8.5445C9.5567 8.2715 9.7207 8.1075 9.9807 8.1075H14.9977C15.2717 8.1075 15.4357 8.2715 15.4357 8.5445V10.4585C15.4357 10.7185 15.2717 10.8825 14.9977 10.8825ZM11.5797 18.7715V11.8535H13.4257V18.7715Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.884765625 19.044921875"
          className={className}
        >
          <path
            d="              M0.3277 19.0454H23.5567C23.7347 19.0454 23.8847 18.8944 23.8847 18.7034C23.8847 18.5254 23.7347 18.3754 23.5567 18.3754H13.6037V11.2934H14.5337C15.1757 11.2934 15.5727 10.8964 15.5727 10.2544V7.9704C15.5727 7.3414 15.1757 6.9454 14.5337 6.9454H13.6037V4.3474H14.5337C15.1757 4.3474 15.5727 3.9514 15.5727 3.3084V1.9684C15.5727 0.7524 14.7797 0.0004 13.5077 0.0004H10.3357C9.0917 0.0004 8.3267 0.7524 8.3267 1.9684V3.3084C8.3267 3.9514 8.7087 4.3474 9.3377 4.3474H10.3087V6.9454H9.3517C8.7367 6.9454 8.3397 7.3414 8.3397 7.9704V10.2544C8.3397 10.8964 8.7367 11.2934 9.3517 11.2934H10.3087V18.3754H0.3277C0.1507 18.3754 -0.0003 18.5254 -0.0003 18.7034C-0.0003 18.8944 0.1507 19.0454 0.3277 19.0454ZM9.4747 3.6504C9.1737 3.6504 8.9957 3.4724 8.9957 3.1854V1.9684C8.9957 1.1754 9.5157 0.6704 10.3357 0.6704H13.5077C14.3687 0.6704 14.8887 1.1754 14.8887 1.9684V3.1854C14.8887 3.4724 14.6977 3.6504 14.3967 3.6504ZM10.9787 6.9454V4.3474H12.9197V6.9454ZM9.4887 10.5954C9.1877 10.5954 9.0097 10.4184 9.0097 10.1174V8.1074C9.0097 7.8064 9.1877 7.6154 9.4887 7.6154H14.3967C14.6977 7.6154 14.8887 7.8064 14.8887 8.1074V10.1174C14.8887 10.4184 14.6977 10.5954 14.3967 10.5954ZM10.9787 18.3754V11.2934H12.9197V18.3754Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
