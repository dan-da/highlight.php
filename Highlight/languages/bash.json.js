var x = {"lexems":"-?[a-z]+","keywords":{"keyword":"if then else elif fi for break continue while in do done exit return set declare case esac export exec","literal":"true false","built_in":"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo","operator":"-ne -eq -lt -gt -f -d -e -s -l -a"},"contains":[{"className":"shebang","begin":"^#![^\\n]+sh\\s*$","relevance":10},{"className":"function","begin":"\\w[\\w\\d_]*\\s*\\(\\s*\\)\\s*\\{","returnBegin":true,"contains":[{"className":"title","begin":"\\w[\\w\\d_]*"}],"relevance":0},{"className":"comment","begin":"#","end":"$"},{"className":"number","begin":"\\b\\d+(\\.\\d+)?","relevance":0},{"className":"string","begin":"\"","end":"\"","contains":[{"begin":"\\\\[\\s\\S]","relevance":0},{"className":"variable","begin":"\\$[\\w\\d#@][\\w\\d_]*"},{"className":"variable","begin":"\\$\\{(.*?)\\}"},{"className":"variable","begin":"\\$\\(","end":"\\)","contains":{"$ref":"#contains.4.contains.0"}}],"relevance":0},{"className":"string","begin":"'","end":"'","relevance":0},{"$ref":"#contains.4.contains.1"},{"$ref":"#contains.4.contains.2"}]}
