
open -a Terminal "`pwd`"
osascript -e 'tell application "Terminal"' \
-e "do script \"redis-server\" in selected tab of the front window" \
-e 'end tell'

open -a Terminal "`pwd`"
osascript -e 'tell application "Terminal"' \
-e "do script \"npx nodemon server/main\" in selected tab of the front window" \
-e 'end tell'

open -a Terminal "`pwd`"
osascript -e 'tell application "Terminal"' \
-e "do script \"npm start\" in selected tab of the front window" \
-e 'end tell'

