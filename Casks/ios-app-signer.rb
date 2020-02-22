cask 'ios-app-signer' do
  version '1.13.1'
  sha256 'baf6826427706b0b3f685ffb3beced86cf348b74d60e1f81d75c4c3e8a779f47'

  # github.com/DanTheMan827/ios-app-signer was verified as official when first introduced to the cask
  url "https://github.com/DanTheMan827/ios-app-signer/releases/download/#{version}/iOS.App.Signer.app.zip"
  appcast 'https://github.com/DanTheMan827/ios-app-signer/releases.atom'
  name 'iOS App Signer'
  homepage 'https://dantheman827.github.io/ios-app-signer/'

  app 'iOS App Signer.app'
end