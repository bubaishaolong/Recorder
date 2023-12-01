/*
录音
https://github.com/xiangyuecn/Recorder
src: i18n/fr.js
*/
!function(e){var n="object"==typeof window&&!!window.document;!function(e,n){"use strict";var t=e.i18n;e.CLog('Import Recorder i18n lang="fr"');var r={lang:"fr"};t.data.rtl$fr=!1,t.data.desc$fr="French, Français, 法语。Cette traduction provient principalement de : traduction google + traduction Baidu, traduit du chinois vers le français. 此翻译主要来自：google翻译+百度翻译，由中文翻译成法语。",t.put(r,["K8zP:Répéter l'importation {1}","mSxV:Les {1} GetContext restants n'ont pas été close","nMIy: (Remarque : ctx n'est pas dans l'état running. Au moins l'un des rec.open et start doit être appelé pendant l'opération de l'utilisateur (toucher, cliquer, etc.), sinon ctx.resume sera tenté pendant rec.start, ce qui peut entraîner une compatibilité. problèmes (iOS uniquement), voir la configuration de runningContext dans la documentation) ","ZGlf:. En raison des 375 rappels par seconde dans un délai de {1}, il peut y avoir des problèmes de performances du côté mobile qui peuvent entraîner la perte des rappels et un raccourcissement de l'enregistrement. Il n'y a aucun impact du côté PC. Il n'est pas recommandé d'activer {1} pour le moment.","7TU0:Connect utilise l'ancien {1}, ","JwCL:Mais {1} est configuré pour essayer d'activer {2}","VGjB:Vous pouvez configurer {1} pour essayer d'activer {2}","MxX1:{1} n'a renvoyé aucun son et a repris l'utilisation de {2}","XUap:{1} rappel redondant","yOta:Connect utilise {1} et la configuration de {2} peut restaurer l'ancien {3}","VwPd: (Ce navigateur ne prend pas en charge {1}) ","vHnb:{1} ne renvoie aucun audio, rétrogradez pour utiliser {2}","O9P7:{1} rappel redondant","LMEm:Connect utilise {1}, la configuration de {2} peut restaurer l'utilisation de {3} ou de l'ancien {4}","d48C:Le taux d'échantillonnage du filtre de {1} a changé, réinitialisez le filtre","tlbC:{1} semble passer dans chunk {2} qui n'est pas réinitialisé","VtS4:{1} et {2} doivent être des valeurs numériques","5tWi:L'enregistrement de open a échoué : ","dFm8:open a été annulé","VtJO:open a été interrompu","EMJq:, vous pouvez essayer la solution RecordApp","A5bm:Impossible d'enregistrer : ","1iU7:Ce navigateur ne prend pas en charge la récupération d'enregistrements à partir de flux","BTW2:Échec de l'ouverture de l'enregistrement à partir du flux : ","Nclz:Aucune autorisation d'enregistrement (inter-domaine, veuillez essayer d'ajouter une stratégie d'accès au microphone à l'iframe, telle que {1})","gyO5:L'utilisateur a refusé l'autorisation d'enregistrement","oWNo:Le navigateur interdit l'enregistrement des pages dangereuses, ce qui peut être résolu en activant https","jBa9:, pas de micro disponible","COxc:Ce navigateur ne prend pas en charge l'enregistrement","upb8:J'ai constaté que open était appelé plusieurs fois en même temps","Q1GA:La fonction d'enregistrement ne fonctionne pas : pas de flux audio","xEQR:Erreur lors de la demande d'autorisation d'enregistrement","bDOG:Impossible d'enregistrer : ","RiWe:, lorsque noiseSuppression et echoCancellation ne sont pas configurés, le navigateur peut activer automatiquement la réduction du bruit et l'annulation de l'écho, et le terminal mobile peut réduire le volume de lecture du système (récupérable après avoir désactivé l'enregistrement), veuillez vous référer à la configuration audioTrackSet dans le document","hWVz:close est ignoré (car plusieurs recs sont ouverts en même temps, seul le dernier sera en fait close)","UHvm:négligence","Essp:Ne prend pas en charge l'architecture {1}","2XBl:Le type {1} ne prend pas en charge le paramètre takeoffEncodeChunk","LG7e:(aucun encodeur chargé)","7uMV:L'environnement {1} ne prend pas en charge le traitement en temps réel","4Kfd:Compensation {1} ms","bM5i:Non compensé {1} ms","gFUF:Les erreurs dans les rappels ne sont pas autorisées et doivent être assurées qu'aucune exception n'est levée","2ghS:Faible performance, prend {1} ms","ufqH:Les buffers ne peuvent pas être effacés avant d'entrer en mode asynchrone","6WmN:Échec de start: pas open","kLDN:start, démarre l'enregistrement, ","Bp2y:start a été interrompu","upkE:, l'enregistrement peut ne pas être possible : ","Xq4s:stop, décalage horaire avec start : ","3CQP:compenser: ","u8JG:Échec de la fin de l'enregistrement : ","1skY:, veuillez définir {1}","Wv7l:Terminer l'enregistrement. L'encodage prend {1} ms. La durée audio est de {2} ms. La taille du fichier est de {3}b","Vkbd:L'encodeur {1} ne renvoie pas {2}","QWnr:Après avoir activé takeoffEncodeChunk, la longueur du blob renvoyée par stop est 0 et aucune donnée audio n'est fournie","Sz2H:Le {1} généré n'est pas valide","wf9t:L'enregistrement n'a pas démarré","Dl2c:, il n'y a aucune interaction de l'utilisateur avant de démarrer l'enregistrement, ce qui empêche AudioContext de s'exécuter","Ltz3:Aucun enregistrement n'a été collecté","xGuI:L'encodeur {1} n'est pas chargé. Veuillez essayer de trouver l'encodeur {1} dans src/engine de {2} et de le charger","AxOH:Erreur d'enregistrement : ","xkKd:Les tampons audio sont libérés","CxeT:Échantillon : {1} Fleur : {2}ms","NonBrowser-1:Environnement sans navigateur, ne prend pas en charge {1}","IllegalArgs-1:Erreur de paramètre : {1}","NeedImport-2:Pour appeler {1}, vous devez d'abord importer {2}","NotSupport-1:Non pris en charge : {1}","8HO5:Remplacer l'importation {1}"]),t.put(r,["b2mN:AMR-NB (NarrowBand), le paramètre sampleRate n'est pas valide (seul 8000 Hz est fourni), plage bitRate : {1} (par défaut 12.2 kbps), une image 20 ms, {2} octets ; les navigateurs ne prennent généralement pas en charge la lecture du format amr, disponible Recorder.amr2wav() Transcoder en wav pour la lecture","tQBv:AMR Info : ne correspond pas à l'ensemble {1}, a été mis à jour vers {2}","q12D:Les données sampleRate sont inférieures à {1}","TxjV:La version actuelle du navigateur est trop basse et ne peut pas être traitée en temps réel","Q7p7:takeoffEncodeChunk prend en charge les données binaires sorties par l'encodeur AMR. Seules les premières données de rappel (première image) contiennent l'en-tête AMR ; lors de la fusion dans un fichier AMR, si les données de la première image ne sont pas incluses, l'en-tête AMR doit être ajouté à la début du fichier : Recorder.AMR.AMR_HEADER (converti en binaire), sinon il ne peut pas être lu","6o9Z:L'environnement actuel ne prend pas en charge Web Worker et l'encodeur en temps réel amr s'exécute dans le thread principal","yYWs:amr worker reste {1} non stop","jOi8:encodeur amr pas start"]),t.put(r,["O8Gn:Ogg Vorbis, la valeur bitRate est de 16 à 100 kbps, la valeur sampleRate est illimitée","5si6:La version actuelle du navigateur est trop basse et ne peut pas être traitée en temps réel","R8yz:takeoffEncodeChunk prend en charge les données binaires sorties par l'encodeur OggVorbis. Ogg est composé de pages de données. Une page contient plusieurs images de données audio (y compris plusieurs secondes d'audio. Une page de données ne peut pas être décodée et lue séparément). Chaque sortie de ce L'encodeur est complet. Une page de données, donc les performances en temps réel seront relativement faibles ; lors de la fusion dans un fichier ogg complet, toutes les données de sortie doivent être fusionnées ensemble, sinon elles risquent de ne pas être lues et ne sont pas prises en charge. interceptez la partie médiane, décodez-la et jouez-la séparément","hB9D:L'environnement actuel ne prend pas en charge les Web Workers et l'encodeur en temps réel OggVorbis s'exécute dans le thread principal.","oTiy:ogg worker reste {1} non stop","dIpw:encodeur ogg pas start"]),t.put(r,["L49q:Ce navigateur ne prend pas en charge l'encodage Webm et MediaRecorder n'est pas implémenté","tsTW:Seuls les navigateurs les plus récents le prennent en charge et le taux de compression est similaire à celui du mp3. Puisqu'il n'existe aucun moyen d'encoder rapidement les données pcm existantes, les données ne peuvent être importées dans MediaRecorder que d'une manière similaire de lecture et d'écoute, et vous devez attendre quelques secondes. Bien que la taille du fichier audio de sortie puisse être contrôlée par le débit binaire, le débit binaire du fichier audio n'est pas le débit binaire défini. Puisque le taux d'échantillonnage est échantillonné par nous-mêmes, nous pouvons faire ce que nous voulons avec cet encodeur","aG4z:Ce navigateur ne prend pas en charge la conversion des enregistrements au format Webm","PIX0:Erreur de transcodage Webm : {1}"]),t.put(r,["d8YX:{1} ; {2} Le fichier audio ne peut pas être lu directement. Vous pouvez utiliser Recorder.{2}2wav() pour le transcoder en wav pour la lecture ; le paramètre de débit binaire du taux d'échantillonnage n'est pas valide et est fixé à 8 000 hz. taux, 16 bits, et chaque échantillon est compressé. dans un stockage de 8 bits, la taille du fichier audio est de 8 000 octets/seconde ; si vous avez besoin de prise en charge pour un taux d'échantillonnage, veuillez utiliser la méthode Recorder.{2}_encode()","29UK:Les données sampleRate sont inférieures à {1}","quVJ:encodeur {1} pas start"]),t.put(r,["Zm7L:Plage sampleRate : {1} ; plage bitRate : {2} (différents bitRate prennent en charge différentes plages sampleRate. Lorsqu'il est inférieur à 32 kbit/s, le sampleRate doit être inférieur à 32000)","eGB9:{1} n'est pas dans la plage de valeurs prise en charge par mp3 : {2}","zLTa:sampleRate a été mis à jour à {1} car {2} n'est pas dans la plage de valeurs prise en charge par mp3 : {3}","yhUs:La version actuelle du navigateur est trop basse et ne peut pas être traitée en temps réel","k9PT:L'environnement actuel ne prend pas en charge Web Worker et l'encodeur en temps réel mp3 s'exécute dans le thread principal","fT6M:mp3 worker left {1} unstopped","mPxH:encodeur mp3 pas start","uY9i:Ne correspond pas au paramètre {1}, a été mis à jour vers {2}","iMSm:Fix supprime {1} images","b9zm:Supprimer trop de cadres"]),t.put(r,["fWsN:pcm est une donnée audio originale non encapsulée. Les fichiers audio Pcm ne peuvent pas être lus directement. Recorder.pcm2wav() peut être utilisé pour transcoder en wav pour la lecture. Il prend en charge 8 et 16 chiffres (remplis dans bitRate) et la valeur de sampleRate est illimitée.","uMUJ:PCM Info: Le bit {1} n'est pas pris en charge et a été mis à jour vers le bit {2}","KmRz:pcm2wav doit fournir sampleRate et bitRate","sDkA:encodeur pcm pas start"]),t.put(r,["gPSE:Prend en charge les chiffres de 8 bits et 16 bits (remplis dans bitRate) et la valeur de sampleRate est illimitée ; cet encodeur ajoute uniquement un en-tête wav de 44 octets avant les données pcm, et le fichier wav codé de 16 bits supprime les 44 premiers bits. Octets pour obtenir pcm (remarque : les autres encodeurs wav peuvent ne pas faire 44 octets)","wyw9:WAV Info: Le bit {1} n'est pas pris en charge et a été mis à jour vers le bit {2}"]),t.put(r,["0XYC:La méthode getAudioSrc est obsolète : veuillez utiliser getMediaStream directement et l'attribuer à audio.srcObject. Cette méthode ne peut être appelée que dans les navigateurs qui ne prennent pas en charge srcObject et attribuée à audio.src pour des raisons de compatibilité.","I4h4:Répétition {1} start","P6Gs:Le navigateur ne prend pas en charge l'ouverture de {1}","JwDm:(Remarque : ctx n'est pas dans l'état running. start doit être appelé lorsque l'utilisateur opère (toucher, cliquer, etc.), sinon ctx.resume sera tenté, ce qui peut entraîner des problèmes de compatibilité (iOS uniquement). Veuillez vous référer au configuration runningContext dans le document)","6DDt:start est terminé par stop","qx6X:L'implémentation AudioBuffer de ce navigateur ne prend pas en charge les fonctionnalités dynamiques et utilise le mode de compatibilité","cdOx:Expiration du délai de détection de l'environnement","S2Bu:Peut ne pas jouer: {1}","ZfGG:L'appel input a échoué: non - PCM [int16,...] en entrée, il doit être décodé ou converti avec transform","N4ke:L'appel input a échoué: sampleRate n'a pas été fourni","IHZd:L'appel input a échoué: sampleRate={1} de Data est différent de ={2} précédent","TZPq:{1} la méthode start n'est pas appelée","iCFC:Le navigateur ne supporte pas le décodage audio","wE2k:Les données de décodage audio doivent être ArrayBuffer","mOaT:Le décodage audio a échoué: {1}"]),t.put(r,["3RBa:Le symbole [{1}] est invalide: {2}","U212:Note [{1}] invalide: {2}","7qAD:Doit être aligné lorsque plusieurs tonalités, différence {1}ms","QGsW:Happy Birthday to You","emJR:For Elise","GsYy:Canon - symbole de la main droite","bSFZ:Canon"]),t.put(r,["Ikdz:Web Worker n'est pas supporté dans l'environnement actuel, appel Sonic.Async n'est pas supporté","IC5Y:sonic worker reste {1} non flush"]),t.put(r,["WWoj:La méthode {2} dans {1} n'est pas implémentée, implémentez - la dans un fichier {3} ou dans un fichier de configuration","rCAM:L'enregistrement n'a pas commencé, mais les données Native PCM ont été reçues","t2OF:Iframe Cross - Domain détecté, NativeRecordReceivePCM ne peut pas être injecté à la couche supérieure, a écouté postMessage pour transmettre des données de transfert compatibles, s'il vous plaît implémenter vous - même pour transmettre les données reçues à la couche supérieure à cette iframe (couche illimitée), sinon les données d'enregistrement ne peuvent pas être reçues","Z2y2:L'enregistrement n'a pas commencé"]),t.put(r,["uXtA:Importation répétée {1}","kIBu:Plusieurs appels simultanés: {1}, l'ancien Callback est abandonné","ha2K:Enregistrement répété {1}","wpTL:Nettoyage des ressources uniquement","bpvP:L'enregistrement n'a pas commencé","fLJD:L'environnement actuel ne prend pas en charge le Callback en temps réel, impossible de faire {1}","YnzX:La demande d'autorisation d'enregistrement a échoué: ","nwKR:Appelez d'abord {1}","citA:Actuellement, ce n'est pas un environnement de navigateur, il est nécessaire d'introduire un fichier de support ({1}) pour cette plate - forme ou d'appeler {2} pour implémenter l'accès par vous - même","ecp9:Le début de l'enregistrement échoue: ","EKmS:Ne peut pas enregistrer: ","k7Qo:Enregistrement commencé","Douz:Fin de l'enregistrement échoué: ","wqSH:Et le décalage horaire de départ: {1}ms","g3VX:Fin de l'enregistrement, prend du temps {1}ms Durée audio {2}ms , taille du fichier {3}b , {4}"])}((n?window:Object).Recorder)}();