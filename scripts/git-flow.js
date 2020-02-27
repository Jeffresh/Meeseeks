const fs = require('fs')
const path = require('path')

/**
 * Gets the current branch.
 *
 * @returns {string} Branch name
 */
function branch() {
  const headpath = path.join(process.cwd(), '.git/HEAD')
  if (!fs.existsSync(headpath)) {
    console.warn('No HEAD found, aborting.')
    return null
  }
  const headcontent = fs.readFileSync(headpath, 'utf8')
  const branchRegex = /ref: refs\/heads\/(\S+)/
  const branchname = branchRegex.exec(headcontent)
  return branchname && branchname[1]
}

const main = () => {
  const branchName = branch()

  if (
    branchName.startsWith('feature/') ||
    branchName.startsWith('release/') ||
    branchName.startsWith('hotfix/') ||
    branchName.startsWith('experiment/') ||
    branchName.startsWith('fix/') ||
    branchName === 'master' ||
    branchName === 'develop' ||
    branchName === 'experimental'
  ) {
    console.log(`Branch name: \x1b[36m%s\x1b[0m (Valid)`, branchName)
    process.exit(0)
  } else {
    console.log(`Branch name: \x1b[31m%s\x1b[0m (Invalid)`, branchName)
    process.exit(1)
  }
}

main()
