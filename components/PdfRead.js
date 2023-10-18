// import { View, Text, StyleSheet, Dimensions} from 'react-native'
// import React from 'react'
// import Pdf from 'react-native-pdf'

// const PdfRead = () => {
//     const Pdfsource = { uri: 'http://www.joker-nightlife.de/assets/erziehungsbeauftragung_disco_joker.pdf', cache: true };
//   return (
//     <View style={styles.container}>
//       <Pdf
//         trustAllCerts={false}
//         source={Pdfsource}
//         style={styles.pdf}
//         onLoadComplete={(numbersOfPages, filePath) => {
//             console.log(`numbers of pages: ${numbersOfPages}`)
//         }}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create ({
//     container: {
//         flex: 1
//     },
//     pdf: {
//         flex: 1,
//         width: Dimensions.get('window').width / 1.4,
//         height: Dimensions.get('window').height / 1.4
//     }
// })

// export default PdfRead