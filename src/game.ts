import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script2 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script3 from "../03829f2d-a9ab-4292-aa97-6f51a02b3ba9/src/item"
import Script4 from "../a491051c-8092-4245-ae85-d274e90d8443/src/item"
import Script5 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"
import Script6 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script7 from "../76d3a347-02b1-4c74-bbf3-7787ede6a3b1/src/item"
import Script8 from "../58dc566a-2add-4326-b61c-0fdf46903195/src/item"
import Script9 from "../6ef2baf2-3d2e-4093-b22b-34c2b6bb0e7b/src/item"
import Script10 from "../6c75f42f-03c6-430c-b49d-b7b37c1e0c3d/src/item"
import Script11 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script12 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script13 from "../0764e129-9fff-4158-98f0-6db8665dcf7b/src/item"
import Script14 from "../12b03cb6-2066-4f72-b8ef-27bb851de48e/src/item"
import Script15 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script16 from "../8186a12c-d2ef-4f9d-96b9-cc2dd87567d1/src/item"
import Script17 from "../d5ee9a47-8484-4824-a609-996298830b51/src/item"
import Script18 from "../a72de884-e275-490d-b1bb-7f7eaca4777f/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const openedQuadrupleGlassDoors = new Entity('openedQuadrupleGlassDoors')
engine.addEntity(openedQuadrupleGlassDoors)
openedQuadrupleGlassDoors.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(23.855384826660156, 1.5617024898529053, 16.085466384887695),
  rotation: new Quaternion(-3.5054926507822578e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067094802856),
  scale: new Vector3(0.24499917030334473, 0.24500000476837158, 0.24499917030334473)
})
openedQuadrupleGlassDoors.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("f3afe10e-641e-410a-bcee-1eb954f8208e/scene.gltf")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
openedQuadrupleGlassDoors.addComponentOrReplace(gltfShape)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(23.91610336303711, 3.86525821685791, 15.974266052246094),
  rotation: new Quaternion(-0.003067057579755783, 0.7071002125740051, 0.003066953271627426, 0.7071000933647156),
  scale: new Vector3(12.32815933227539, 3.5563199520111084, 1.056492805480957)
})
imageFromURL.addComponentOrReplace(transform3)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(23.5, 3.740492820739746, 28.985881805419922),
  rotation: new Quaternion(-1.8182431745073473e-16, -0.7071068286895752, 8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(12.71451473236084, 3.25610089302063, 1)
})
wallPlainGlass.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape2)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(0.5453338623046875, 1.850123643875122, 6.73213005065918),
  rotation: new Quaternion(2.3227847816958145e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.8055176734924316, 3.805450439453125, 3.8055176734924316)
})
imageFromURL3.addComponentOrReplace(transform5)

const wallPlainRed = new Entity('wallPlainRed')
engine.addEntity(wallPlainRed)
wallPlainRed.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(23.593360900878906, 0.04133439064025879, 28.636470794677734),
  rotation: new Quaternion(3.4390931027722827e-15, 0.7088461518287659, -8.45010461603124e-8, -0.7053631544113159),
  scale: new Vector3(4.756399154663086, 0.9653239250183105, 1.0001314878463745)
})
wallPlainRed.addComponentOrReplace(transform6)
const gltfShape3 = new GLTFShape("7d28a209-e379-4cc4-a9e1-706f24c0a99b/PlainRedWall.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wallPlainRed.addComponentOrReplace(gltfShape3)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(22.40198516845703, 14.106225967407227, 29.734146118164062),
  rotation: new Quaternion(-1.4400796771426097e-14, 5.960464477539063e-8, -1.7445056900780576e-14, -1),
  scale: new Vector3(9.62541389465332, 4.287121295928955, 1.000000238418579)
})
wallPlainGlass4.addComponentOrReplace(transform7)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(22.69141387939453, 0.20978593826293945, 2.5),
  rotation: new Quaternion(-1.4400796771426097e-14, 5.960464477539063e-8, -1.7445056900780576e-14, -1),
  scale: new Vector3(9.834718704223633, 4.217061519622803, 1.000000238418579)
})
wallPlainGlass5.addComponentOrReplace(transform8)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape4 = new GLTFShape("2c66317c-4923-4094-ad90-8ad72db010b1/FloorBaseTiles_01/FloorBaseTiles_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
entity.addComponentOrReplace(gltfShape4)
const transform9 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform9)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape4)
const transform10 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform10)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform11)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape4)
const transform12 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform12)

const wallPlainRed2 = new Entity('wallPlainRed2')
engine.addEntity(wallPlainRed2)
wallPlainRed2.setParent(_scene)
wallPlainRed2.addComponentOrReplace(gltfShape3)
const transform13 = new Transform({
  position: new Vector3(23.5, 0, 13),
  rotation: new Quaternion(3.4390931027722827e-15, 0.7088461518287659, -8.45010461603124e-8, -0.7053631544113159),
  scale: new Vector3(4.791298866271973, 0.9650573134422302, 1.0001449584960938)
})
wallPlainRed2.addComponentOrReplace(transform13)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(2.335015058517456, 10.110498428344727, 16.042766571044922),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(2.9909162521362305, 2.9526846408843994, 3.4344379901885986)
})
videoStream.addComponentOrReplace(transform14)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(0.9590104818344116, 8.93018913269043, 8.477724075317383),
  rotation: new Quaternion(2.3227847816958145e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.000072956085205, 3, 3.000072956085205)
})
imageFromURL5.addComponentOrReplace(transform15)

const dropChandelier = new Entity('dropChandelier')
engine.addEntity(dropChandelier)
dropChandelier.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(21.230751037597656, 11.319607734680176, 7.701869964599609),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4127823114395142, 1.4127823114395142, 1.0163494348526)
})
dropChandelier.addComponentOrReplace(transform16)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(0.6304415464401245, 1.850510835647583, 25.245498657226562),
  rotation: new Quaternion(2.3227847816958145e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.8055148124694824, 3.805450439453125, 3.8055148124694824)
})
imageFromURL6.addComponentOrReplace(transform17)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(0.651940643787384, 1.7734489440917969, 15.707799911499023),
  rotation: new Quaternion(-0.003067057579755783, 0.7071002125740051, 0.003066953271627426, 0.7071000933647156),
  scale: new Vector3(10.985180854797363, 3.8495066165924072, 1.4255919456481934)
})
imageFromURL7.addComponentOrReplace(transform18)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(23.5, 0.36546754837036133, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.3122544288635254, 4.125351905822754, 1)
})
wallPlainGlass2.addComponentOrReplace(transform19)
wallPlainGlass2.addComponentOrReplace(gltfShape2)

const indicatorArrowGree = new Entity('indicatorArrowGree')
engine.addEntity(indicatorArrowGree)
indicatorArrowGree.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(21.358022689819336, 3.9185843467712402, 25.209911346435547),
  rotation: new Quaternion(0.999577522277832, 0.017334794625639915, 0.023333542048931122, 0.00014634267427027225),
  scale: new Vector3(2.475696086883545, 2.7000486850738525, 2.699840784072876)
})
indicatorArrowGree.addComponentOrReplace(transform20)

const indicatorArrowGree2 = new Entity('indicatorArrowGree2')
engine.addEntity(indicatorArrowGree2)
indicatorArrowGree2.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(18.743064880371094, 8.154878616333008, 25.735464096069336),
  rotation: new Quaternion(-2.201458746946424e-15, -0.7018202543258667, 8.366349391053518e-8, 0.7123541235923767),
  scale: new Vector3(1.6956899166107178, 1.6956901550292969, 1.6956899166107178)
})
indicatorArrowGree2.addComponentOrReplace(transform21)

const invisibleWall = new Entity('invisibleWall')
engine.addEntity(invisibleWall)
invisibleWall.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(5.144311904907227, 8.094335556030273, 16.140079498291016),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6634783744812012, 6.16755485534668, 27.552186965942383)
})
invisibleWall.addComponentOrReplace(transform22)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(23.85222816467285, 2.1847002506256104, 10.993555068969727),
  rotation: new Quaternion(-3.5430090105655716e-15, 0.6981033682823181, -8.322040656594254e-8, 0.715997040271759),
  scale: new Vector3(1.2383341789245605, 1.2368412017822266, 5.316238880157471)
})
plainText.addComponentOrReplace(transform23)

const fridgeCounter2 = new Entity('fridgeCounter2')
engine.addEntity(fridgeCounter2)
fridgeCounter2.setParent(_scene)
const gltfShape5 = new GLTFShape("cd54d23e-eef5-48f6-bfb2-ff7878b37d0b/Fridge_Counter.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
fridgeCounter2.addComponentOrReplace(gltfShape5)
const transform24 = new Transform({
  position: new Vector3(3.8087158203125, 0.011486053466796875, 26.81082534790039),
  rotation: new Quaternion(-5.478408991307026e-16, -0.7080463171005249, 8.440569132517339e-8, 0.7061659693717957),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
fridgeCounter2.addComponentOrReplace(transform24)

const greenButton2 = new Entity('greenButton2')
engine.addEntity(greenButton2)
greenButton2.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(3.7439117431640625, 0.9157201051712036, 17.05462646484375),
  rotation: new Quaternion(0.4885311722755432, -0.5072606205940247, -0.5457345247268677, -0.45409005880355835),
  scale: new Vector3(1.0000015497207642, 1.0000016689300537, 1.0000009536743164)
})
greenButton2.addComponentOrReplace(transform25)

const verticalPlatform = new Entity('verticalPlatform')
engine.addEntity(verticalPlatform)
verticalPlatform.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(21.43265151977539, 0, 27.466299057006836),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.2192492485046387, 0.5646438002586365, 1.8861253261566162)
})
verticalPlatform.addComponentOrReplace(transform26)

const halfHexFloorPanel = new Entity('halfHexFloorPanel')
engine.addEntity(halfHexFloorPanel)
halfHexFloorPanel.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(0.586944580078125, 7.850666046142578, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.672816753387451, 2.5, 7.990712642669678)
})
halfHexFloorPanel.addComponentOrReplace(transform27)
const gltfShape6 = new GLTFShape("a14f1390-1c37-4fe1-affc-7c4616bfb9c4/FloorHexa_02/FloorHexa_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
halfHexFloorPanel.addComponentOrReplace(gltfShape6)

const fridgeCounter4 = new Entity('fridgeCounter4')
engine.addEntity(fridgeCounter4)
fridgeCounter4.setParent(_scene)
fridgeCounter4.addComponentOrReplace(gltfShape5)
const transform28 = new Transform({
  position: new Vector3(3.8087158203125, 0.039513587951660156, 17.41095542907715),
  rotation: new Quaternion(-5.478408991307026e-16, -0.7080463171005249, 8.440569132517339e-8, 0.7061659693717957),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
fridgeCounter4.addComponentOrReplace(transform28)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(7.961117744445801, 8.250550270080566, 3.2478041648864746),
  rotation: new Quaternion(5.0547233228486615e-15, 0.0017392635345458984, -2.0734747252504349e-10, 0.9999985694885254),
  scale: new Vector3(3.534120798110962, 6.164636135101318, 3.805518865585327)
})
imageFromURL10.addComponentOrReplace(transform29)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(12.289586067199707, 8.250550270080566, 3.170696258544922),
  rotation: new Quaternion(5.0547233228486615e-15, 0.0017392635345458984, -2.0734747252504349e-10, 0.9999985694885254),
  scale: new Vector3(3.5341179370880127, 6.164636135101318, 3.805516004562378)
})
imageFromURL2.addComponentOrReplace(transform30)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(16.285804748535156, 8.250550270080566, 3.151852607727051),
  rotation: new Quaternion(5.0547233228486615e-15, 0.0017392635345458984, -2.0734747252504349e-10, 0.9999985694885254),
  scale: new Vector3(3.5341198444366455, 6.164636135101318, 3.8055179119110107)
})
imageFromURL8.addComponentOrReplace(transform31)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(20.225215911865234, 8.40007209777832, 3.1737589836120605),
  rotation: new Quaternion(5.0547233228486615e-15, 0.0017392635345458984, -2.0734747252504349e-10, 0.9999985694885254),
  scale: new Vector3(3.534123182296753, 6.164636135101318, 3.805521249771118)
})
imageFromURL9.addComponentOrReplace(transform32)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(10.683850288391113, 8.300323486328125, 29.075956344604492),
  rotation: new Quaternion(2.193378433794444e-14, -0.9999861121177673, 1.192076055644975e-7, 0.005284079350531101),
  scale: new Vector3(13.863591194152832, 7.547001838684082, 4.661921977996826)
})
imageFromURL12.addComponentOrReplace(transform33)

const invisibleWall2 = new Entity('invisibleWall2')
engine.addEntity(invisibleWall2)
invisibleWall2.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(21.147335052490234, 0, 27.262893676757812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.601300239562988, 0.987927258014679, 3.9028515815734863)
})
invisibleWall2.addComponentOrReplace(transform34)

const imageScreen = new Entity('imageScreen')
engine.addEntity(imageScreen)
imageScreen.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(17.789466857910156, 0.15309250354766846, 4.446870803833008),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
imageScreen.addComponentOrReplace(transform35)

const wallPlainWhite = new Entity('wallPlainWhite')
engine.addEntity(wallPlainWhite)
wallPlainWhite.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(0.4139842987060547, 0.19489002227783203, 2.726165771484375),
  rotation: new Quaternion(-5.3412716439941454e-17, 0.708279550075531, -8.443350196785104e-8, 0.705932080745697),
  scale: new Vector3(13.491790771484375, 4.28220272064209, 1.002870798110962)
})
wallPlainWhite.addComponentOrReplace(transform36)
const gltfShape7 = new GLTFShape("45eb9e1a-2eca-4b6f-a5c4-b0278dc7e635/PlainWhiteWall.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
wallPlainWhite.addComponentOrReplace(gltfShape7)

const wallPlainRed3 = new Entity('wallPlainRed3')
engine.addEntity(wallPlainRed3)
wallPlainRed3.setParent(_scene)
wallPlainRed3.addComponentOrReplace(gltfShape3)
const transform37 = new Transform({
  position: new Vector3(23.582565307617188, 0, 3.869382858276367),
  rotation: new Quaternion(3.4390931027722827e-15, 0.7088461518287659, -8.45010461603124e-8, -0.7053631544113159),
  scale: new Vector3(0.7309144735336304, 4.2812042236328125, 1.0001182556152344)
})
wallPlainRed3.addComponentOrReplace(transform37)

const wallPlainRed4 = new Entity('wallPlainRed4')
engine.addEntity(wallPlainRed4)
wallPlainRed4.setParent(_scene)
wallPlainRed4.addComponentOrReplace(gltfShape3)
const transform38 = new Transform({
  position: new Vector3(23.5, 0, 29.896272659301758),
  rotation: new Quaternion(3.4390931027722827e-15, 0.7088461518287659, -8.45010461603124e-8, -0.7053631544113159),
  scale: new Vector3(0.730915367603302, 4.2812042236328125, 1.0001174211502075)
})
wallPlainRed4.addComponentOrReplace(transform38)

const wallPlainRed5 = new Entity('wallPlainRed5')
engine.addEntity(wallPlainRed5)
wallPlainRed5.setParent(_scene)
wallPlainRed5.addComponentOrReplace(gltfShape3)
const transform39 = new Transform({
  position: new Vector3(23.72243309020996, 0, 2.7128543853759766),
  rotation: new Quaternion(-5.2031137543287215e-15, -0.00021833181381225586, 2.601704789106929e-11, -1),
  scale: new Vector3(0.7309154272079468, 4.2812042236328125, 1.0001243352890015)
})
wallPlainRed5.addComponentOrReplace(transform39)

const wallPlainRed6 = new Entity('wallPlainRed6')
engine.addEntity(wallPlainRed6)
wallPlainRed6.setParent(_scene)
wallPlainRed6.addComponentOrReplace(gltfShape3)
const transform40 = new Transform({
  position: new Vector3(23.76016616821289, 0, 29.906347274780273),
  rotation: new Quaternion(-5.2031137543287215e-15, -0.00021833181381225586, 2.601704789106929e-11, -1),
  scale: new Vector3(0.73091721534729, 4.2812042236328125, 1.000127911567688)
})
wallPlainRed6.addComponentOrReplace(transform40)

const wallPlainWhite3 = new Entity('wallPlainWhite3')
engine.addEntity(wallPlainWhite3)
wallPlainWhite3.setParent(_scene)
wallPlainWhite3.addComponentOrReplace(gltfShape7)
const transform41 = new Transform({
  position: new Vector3(3.1797103881835938, 0, 29.630413055419922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.455206036567688, 4.266236782073975, 1)
})
wallPlainWhite3.addComponentOrReplace(transform41)

const wallPlainWhite5 = new Entity('wallPlainWhite5')
engine.addEntity(wallPlainWhite5)
wallPlainWhite5.setParent(_scene)
wallPlainWhite5.addComponentOrReplace(gltfShape7)
const transform42 = new Transform({
  position: new Vector3(0.20323586463928223, 17.08229637145996, 1.8464469909667969),
  rotation: new Quaternion(-0.5025500059127808, -0.4991026520729065, 0.5008844137191772, -0.4974483847618103),
  scale: new Vector3(14.065361022949219, 5.852236747741699, 1.0029282569885254)
})
wallPlainWhite5.addComponentOrReplace(transform42)

const floorGrey = new Entity('floorGrey')
engine.addEntity(floorGrey)
floorGrey.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(18.819995880126953, 7.727148056030273, 29.25759506225586),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.504716873168945, 1, 6.618274688720703)
})
floorGrey.addComponentOrReplace(transform43)
const gltfShape8 = new GLTFShape("6f079b74-7a6b-4792-84c8-a487ecd759ce/GreyFloor.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
floorGrey.addComponentOrReplace(gltfShape8)

const floorGrey2 = new Entity('floorGrey2')
engine.addEntity(floorGrey2)
floorGrey2.setParent(_scene)
floorGrey2.addComponentOrReplace(gltfShape8)
const transform44 = new Transform({
  position: new Vector3(23.40683937072754, 7.727148056030273, 25.327043533325195),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.6156407594680786, 1, 5.6321892738342285)
})
floorGrey2.addComponentOrReplace(transform44)

const plainText7 = new Entity('plainText7')
engine.addEntity(plainText7)
plainText7.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(22.663095474243164, 0.268375039100647, 16.177448272705078),
  rotation: new Quaternion(-0.525847315788269, 0.468781977891922, 0.5307703614234924, 0.4711804687976837),
  scale: new Vector3(2.235992908477783, 2.2359981536865234, 2.235966920852661)
})
plainText7.addComponentOrReplace(transform45)

const dropChandelier4 = new Entity('dropChandelier4')
engine.addEntity(dropChandelier4)
dropChandelier4.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(21.230751037597656, 11.319607734680176, 15.808113098144531),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4127823114395142, 1.4127823114395142, 1.0163494348526)
})
dropChandelier4.addComponentOrReplace(transform46)

const dropChandelier2 = new Entity('dropChandelier2')
engine.addEntity(dropChandelier2)
dropChandelier2.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(21.230751037597656, 11.319607734680176, 22.668848037719727),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4127823114395142, 1.4127823114395142, 1.0163494348526)
})
dropChandelier2.addComponentOrReplace(transform47)

const wallPlainRed8 = new Entity('wallPlainRed8')
engine.addEntity(wallPlainRed8)
wallPlainRed8.setParent(_scene)
wallPlainRed8.addComponentOrReplace(gltfShape3)
const transform48 = new Transform({
  position: new Vector3(0.41512203216552734, 7.850343704223633, 29.555648803710938),
  rotation: new Quaternion(3.4390931027722827e-15, 0.7088461518287659, -8.45010461603124e-8, -0.7053631544113159),
  scale: new Vector3(13.509937286376953, 2.196420431137085, 1.0001803636550903)
})
wallPlainRed8.addComponentOrReplace(transform48)

const imageFromURL15 = new Entity('imageFromURL15')
engine.addEntity(imageFromURL15)
imageFromURL15.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(0.959010124206543, 8.93018913269043, 23.602937698364258),
  rotation: new Quaternion(2.3227847816958145e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.000079393386841, 3, 3.000079393386841)
})
imageFromURL15.addComponentOrReplace(transform49)

const qrDonationsBanner = new Entity('qrDonationsBanner')
engine.addEntity(qrDonationsBanner)
qrDonationsBanner.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(5.720250129699707, 7.878476619720459, 6.292576313018799),
  rotation: new Quaternion(2.3165432076657343e-15, 0.5155304670333862, -6.145600650597771e-8, 0.8568713068962097),
  scale: new Vector3(1.532455563545227, 1.5324532985687256, 1.532455563545227)
})
qrDonationsBanner.addComponentOrReplace(transform50)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(5.799501419067383, 7.951797962188721, 6.337768077850342),
  rotation: new Quaternion(2.6465591023772713e-15, 0.522205650806427, -6.225175752661016e-8, 0.8528196811676025),
  scale: new Vector3(2.492145538330078, 4.041445255279541, 4.59752893447876)
})
imageFromURL4.addComponentOrReplace(transform51)

const imageFromURL14 = new Entity('imageFromURL14')
engine.addEntity(imageFromURL14)
imageFromURL14.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(6.06840181350708, 0.2645498514175415, 27.91847801208496),
  rotation: new Quaternion(-9.391672620259923e-15, 0.9116321802139282, -1.0867499611322273e-7, 0.4110071361064911),
  scale: new Vector3(1.6566163301467896, 2.6864664554595947, 3.0561363697052)
})
imageFromURL14.addComponentOrReplace(transform52)

const qrDonationsBanner3 = new Entity('qrDonationsBanner3')
engine.addEntity(qrDonationsBanner3)
qrDonationsBanner3.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(6.021146297454834, 0.21581101417541504, 27.956483840942383),
  rotation: new Quaternion(-2.7721067493357773e-15, 0.9083950519561768, -1.0828910035343142e-7, 0.4181131422519684),
  scale: new Vector3(1.0186710357666016, 1.018666386604309, 1.0186710357666016)
})
qrDonationsBanner3.addComponentOrReplace(transform53)

const imageFromURL16 = new Entity('imageFromURL16')
engine.addEntity(imageFromURL16)
imageFromURL16.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(5.8243560791015625, 0.18869256973266602, 4.203210830688477),
  rotation: new Quaternion(2.6451966498816128e-15, 0.4575572907924652, -5.454507245872264e-8, 0.8891801834106445),
  scale: new Vector3(1.656609296798706, 2.6864664554595947, 3.056124210357666)
})
imageFromURL16.addComponentOrReplace(transform54)

const qrDonationsBanner4 = new Entity('qrDonationsBanner4')
engine.addEntity(qrDonationsBanner4)
qrDonationsBanner4.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(5.776695251464844, 0.15291011333465576, 4.165712356567383),
  rotation: new Quaternion(1.872027516726729e-15, 0.45060014724731445, -5.371570921397506e-8, 0.8927258849143982),
  scale: new Vector3(1.0186680555343628, 1.018666386604309, 1.0186680555343628)
})
qrDonationsBanner4.addComponentOrReplace(transform55)

const imageScreen3 = new Entity('imageScreen3')
engine.addEntity(imageScreen3)
imageScreen3.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(2.2463736534118652, 8.095905303955078, 16.076671600341797),
  rotation: new Quaternion(6.816898924887744e-16, 0.7032039761543274, -8.382843930121453e-8, 0.7109881639480591),
  scale: new Vector3(1.3092339038848877, 1.3092575073242188, 1.1112689971923828)
})
imageScreen3.addComponentOrReplace(transform56)

const wallPlainRed9 = new Entity('wallPlainRed9')
engine.addEntity(wallPlainRed9)
wallPlainRed9.setParent(_scene)
wallPlainRed9.addComponentOrReplace(gltfShape3)
const transform57 = new Transform({
  position: new Vector3(23.526138305664062, 4.624759674072266, 25.459699630737305),
  rotation: new Quaternion(-5.2031137543287215e-15, -0.00021833181381225586, 2.601704789106929e-11, -1),
  scale: new Vector3(2.27571177482605, 3.157423734664917, 1.000130295753479)
})
wallPlainRed9.addComponentOrReplace(transform57)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(21.200679779052734, 8.340716361999512, 24.92819595336914),
  rotation: new Quaternion(2.237847324712116e-14, -0.9999986886978149, 1.1920910480966995e-7, 0.0016238987445831299),
  scale: new Vector3(3.5341172218322754, 6.164636135101318, 3.805516242980957)
})
imageFromURL13.addComponentOrReplace(transform58)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(10.410508155822754, 0.6602294445037842, 29.075956344604492),
  rotation: new Quaternion(2.193378433794444e-14, -0.9999861121177673, 1.192076055644975e-7, 0.005284079350531101),
  scale: new Vector3(12.113828659057617, 6.594485759735107, 4.0735182762146)
})
imageFromURL11.addComponentOrReplace(transform59)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
wallPlainGlass6.addComponentOrReplace(gltfShape2)
const transform60 = new Transform({
  position: new Vector3(19.100114822387695, 7.765097141265869, 28.494258880615234),
  rotation: new Quaternion(3.0824793147257766e-15, -0.6967158913612366, 8.30550064279123e-8, -0.717347264289856),
  scale: new Vector3(0.36885714530944824, 0.9329359531402588, 0.99933260679245)
})
wallPlainGlass6.addComponentOrReplace(transform60)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape2)
const transform61 = new Transform({
  position: new Vector3(19.132007598876953, 7.765097141265869, 25.07423210144043),
  rotation: new Quaternion(3.0824793147257766e-15, -0.6967158913612366, 8.30550064279123e-8, -0.717347264289856),
  scale: new Vector3(0.5872533321380615, 0.9329359531402588, 0.9996448755264282)
})
wallPlainGlass8.addComponentOrReplace(transform61)

const wallPlainRed10 = new Entity('wallPlainRed10')
engine.addEntity(wallPlainRed10)
wallPlainRed10.setParent(_scene)
wallPlainRed10.addComponentOrReplace(gltfShape3)
const transform62 = new Transform({
  position: new Vector3(18.787508010864258, 4.596208572387695, 29.252580642700195),
  rotation: new Quaternion(3.4390931027722827e-15, 0.7088461518287659, -8.45010461603124e-8, -0.7053631544113159),
  scale: new Vector3(1.9986566305160522, 0.7896213531494141, 0.6099241375923157)
})
wallPlainRed10.addComponentOrReplace(transform62)

const plainText8 = new Entity('plainText8')
engine.addEntity(plainText8)
plainText8.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(21.19478416442871, 5.278274059295654, 25.073440551757812),
  rotation: new Quaternion(0.0016151120653375983, 0.9993773698806763, 0.030667424201965332, 0.01737414114177227),
  scale: new Vector3(1.6256712675094604, 1.625628113746643, 1.6256777048110962)
})
plainText8.addComponentOrReplace(transform63)

const plainText9 = new Entity('plainText9')
engine.addEntity(plainText9)
plainText9.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(18.615232467651367, 5.097280502319336, 27.45760154724121),
  rotation: new Quaternion(-0.022839222103357315, -0.7185481786727905, -0.020529814064502716, 0.6947988867759705),
  scale: new Vector3(1.8811943531036377, 1.8811362981796265, 1.881202220916748)
})
plainText9.addComponentOrReplace(transform64)

const plainText10 = new Entity('plainText10')
engine.addEntity(plainText10)
plainText10.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(18.615232467651367, 11.974678993225098, 27.45760154724121),
  rotation: new Quaternion(-0.022839222103357315, -0.7185481786727905, -0.020529814064502716, 0.6947988867759705),
  scale: new Vector3(1.881194829940796, 1.8811360597610474, 1.8812024593353271)
})
plainText10.addComponentOrReplace(transform65)

const wallPlainRed11 = new Entity('wallPlainRed11')
engine.addEntity(wallPlainRed11)
wallPlainRed11.setParent(_scene)
wallPlainRed11.addComponentOrReplace(gltfShape3)
const transform66 = new Transform({
  position: new Vector3(18.787508010864258, 11.473607063293457, 29.252580642700195),
  rotation: new Quaternion(3.4390931027722827e-15, 0.7088461518287659, -8.45010461603124e-8, -0.7053631544113159),
  scale: new Vector3(1.9986562728881836, 1.3517776727676392, 0.609923779964447)
})
wallPlainRed11.addComponentOrReplace(transform66)

const imageFromURL17 = new Entity('imageFromURL17')
engine.addEntity(imageFromURL17)
imageFromURL17.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(17.80229377746582, 1.614200234413147, 4.448947906494141),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.625192165374756, 3.8679568767547607, 3.8679568767547607)
})
imageFromURL17.addComponentOrReplace(transform67)

const imageFromURL18 = new Entity('imageFromURL18')
engine.addEntity(imageFromURL18)
imageFromURL18.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(21.97595977783203, 1.614200234413147, 8.314661026000977),
  rotation: new Quaternion(1.0243505067951604e-15, 0.7065980434417725, -8.42330436512384e-8, -0.7076151967048645),
  scale: new Vector3(7.062571048736572, 3.8679568767547607, 3.867981433868408)
})
imageFromURL18.addComponentOrReplace(transform68)

const imageScreen4 = new Entity('imageScreen4')
engine.addEntity(imageScreen4)
imageScreen4.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(21.97801971435547, 0.15309244394302368, 8.30183219909668),
  rotation: new Quaternion(1.0243505067951604e-15, 0.7065980434417725, -8.42330436512384e-8, -0.7076151967048645),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
imageScreen4.addComponentOrReplace(transform69)

const wallPlainWhite6 = new Entity('wallPlainWhite6')
engine.addEntity(wallPlainWhite6)
wallPlainWhite6.setParent(_scene)
wallPlainWhite6.addComponentOrReplace(gltfShape7)
const transform70 = new Transform({
  position: new Vector3(23.998960494995117, 3.9413161277770996, 9.799206733703613),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.050295617431402206, 0.8665619492530823, 0.14216768741607666)
})
wallPlainWhite6.addComponentOrReplace(transform70)

const wallPlainWhite8 = new Entity('wallPlainWhite8')
engine.addEntity(wallPlainWhite8)
wallPlainWhite8.setParent(_scene)
wallPlainWhite8.addComponentOrReplace(gltfShape7)
const transform71 = new Transform({
  position: new Vector3(23.99178123474121, 7.382071018218994, 9.755276679992676),
  rotation: new Quaternion(0.7067891955375671, -2.9121030843085472e-15, -8.425583075677423e-8, 0.7074242830276489),
  scale: new Vector3(0.050295617431402206, 3.1173927783966064, 0.14225000143051147)
})
wallPlainWhite8.addComponentOrReplace(transform71)

const wallPlainWhite10 = new Entity('wallPlainWhite10')
engine.addEntity(wallPlainWhite10)
wallPlainWhite10.setParent(_scene)
wallPlainWhite10.addComponentOrReplace(gltfShape7)
const transform72 = new Transform({
  position: new Vector3(24.014175415039062, 3.9532814025878906, 22.195486068725586),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.050295617431402206, 0.8665619492530823, 0.14216768741607666)
})
wallPlainWhite10.addComponentOrReplace(transform72)

const wallPlainWhite4 = new Entity('wallPlainWhite4')
engine.addEntity(wallPlainWhite4)
wallPlainWhite4.setParent(_scene)
wallPlainWhite4.addComponentOrReplace(gltfShape7)
const transform73 = new Transform({
  position: new Vector3(23.961776733398438, 3.8699874877929688, 9.742677688598633),
  rotation: new Quaternion(0.7067891955375671, -2.9121030843085472e-15, -8.425583075677423e-8, 0.7074242830276489),
  scale: new Vector3(0.050295617431402206, 3.1173927783966064, 0.14225000143051147)
})
wallPlainWhite4.addComponentOrReplace(transform73)

const fridgeCounter = new Entity('fridgeCounter')
engine.addEntity(fridgeCounter)
fridgeCounter.setParent(_scene)
fridgeCounter.addComponentOrReplace(gltfShape5)
const transform74 = new Transform({
  position: new Vector3(3.8087158203125, 0.11078500747680664, 8.301311492919922),
  rotation: new Quaternion(-5.478408991307026e-16, -0.7080463171005249, 8.440569132517339e-8, 0.7061659693717957),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
fridgeCounter.addComponentOrReplace(transform74)

const wallPlainRed12 = new Entity('wallPlainRed12')
engine.addEntity(wallPlainRed12)
wallPlainRed12.setParent(_scene)
wallPlainRed12.addComponentOrReplace(gltfShape3)
const transform75 = new Transform({
  position: new Vector3(23.274967193603516, 0.0460507869720459, 14.072548866271973),
  rotation: new Quaternion(0.7100406885147095, -5.967642727905138e-15, -8.464343892455872e-8, 0.704160749912262),
  scale: new Vector3(1, 0.9999411106109619, 0.541820228099823)
})
wallPlainRed12.addComponentOrReplace(transform75)

const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(5.125608444213867, 0.498842716217041, 15.397669792175293),
  rotation: new Quaternion(-3.5430090105655716e-15, 0.6981033682823181, -8.322040656594254e-8, 0.715997040271759),
  scale: new Vector3(1.2067959308624268, 1.4630930423736572, 6.288010120391846)
})
plainText3.addComponentOrReplace(transform76)

const floorWood2 = new Entity('floorWood2')
engine.addEntity(floorWood2)
floorWood2.setParent(_scene)
const gltfShape9 = new GLTFShape("8880cce8-844b-4686-9fd8-a73874be7983/WoodFloor.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
floorWood2.addComponentOrReplace(gltfShape9)
const transform77 = new Transform({
  position: new Vector3(23.76869010925293, 0.010346829891204834, 29.534366607666016),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.852457046508789, 4.847462177276611, 6.727320671081543)
})
floorWood2.addComponentOrReplace(transform77)

const toolbox = new Entity('toolbox')
engine.addEntity(toolbox)
toolbox.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(17.695798873901367, 17.56172752380371, 5.983933925628662),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6496376395225525, 0.7935539484024048, 0.909637987613678)
})
toolbox.addComponentOrReplace(transform78)

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(13.339798927307129, 0.13470900058746338, 27.707738876342773),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.377459764480591, 0.9879980087280273, 3.6498794555664062)
})
triggerArea.addComponentOrReplace(transform79)

const invisibleWall3 = new Entity('invisibleWall3')
engine.addEntity(invisibleWall3)
invisibleWall3.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(21.147335052490234, 13.553204536437988, 27.262893676757812),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.601300239562988, 11.188833236694336, 3.9028515815734863)
})
invisibleWall3.addComponentOrReplace(transform80)

const scifiLever = new Entity('scifiLever')
engine.addEntity(scifiLever)
scifiLever.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(3.7224366664886475, 8.065478324890137, 27.87489891052246),
  rotation: new Quaternion(-1.4537470619663262e-14, -0.7121668457984924, 8.489688951840435e-8, 0.7020102739334106),
  scale: new Vector3(1.0000081062316895, 1, 1.0000081062316895)
})
scifiLever.addComponentOrReplace(transform81)

const plainText4 = new Entity('plainText4')
engine.addEntity(plainText4)
plainText4.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(5.125608444213867, 0.6304197311401367, 6.236734390258789),
  rotation: new Quaternion(-3.5430090105655716e-15, 0.6981033682823181, -8.322040656594254e-8, 0.715997040271759),
  scale: new Vector3(0.97567218542099, 1.0477306842803955, 4.503212928771973)
})
plainText4.addComponentOrReplace(transform82)

const triggerArea2 = new Entity('triggerArea2')
engine.addEntity(triggerArea2)
triggerArea2.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(18.68374252319336, 7.76909065246582, 27.493242263793945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6118365526199341, 3.7997372150421143, 3.194430351257324)
})
triggerArea2.addComponentOrReplace(transform83)

const scifiLever2 = new Entity('scifiLever2')
engine.addEntity(scifiLever2)
scifiLever2.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(3.734278440475464, 8.120180130004883, 26.380573272705078),
  rotation: new Quaternion(-1.4537470619663262e-14, -0.7121668457984924, 8.489688951840435e-8, 0.7020102739334106),
  scale: new Vector3(1.0000090599060059, 1, 1.0000090599060059)
})
scifiLever2.addComponentOrReplace(transform84)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(5.173656463623047, 0.498842716217041, 24.599178314208984),
  rotation: new Quaternion(-3.5430090105655716e-15, 0.6981033682823181, -8.322040656594254e-8, 0.715997040271759),
  scale: new Vector3(1.2067960500717163, 1.4630930423736572, 6.2880120277404785)
})
plainText2.addComponentOrReplace(transform85)

const wallPlainWhite7 = new Entity('wallPlainWhite7')
engine.addEntity(wallPlainWhite7)
wallPlainWhite7.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(26.945186614990234, 0, 8.62090015411377),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8875198364257812, 0.11192422360181808, 6.277723789215088)
})
wallPlainWhite7.addComponentOrReplace(transform86)
wallPlainWhite7.addComponentOrReplace(gltfShape7)

const imageFromURL20 = new Entity('imageFromURL20')
engine.addEntity(imageFromURL20)
imageFromURL20.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(26.155017852783203, 0.6408191919326782, 7.641229629516602),
  rotation: new Quaternion(-2.033725259324628e-15, 0.704778790473938, -8.40161717974297e-8, 0.7094271779060364),
  scale: new Vector3(1.8342499732971191, 2.1177988052368164, 1.8342499732971191)
})
imageFromURL20.addComponentOrReplace(transform87)

const imageFromURL22 = new Entity('imageFromURL22')
engine.addEntity(imageFromURL22)
imageFromURL22.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(26.139503479003906, 0.6408191919326782, 7.64123010635376),
  rotation: new Quaternion(-1.3822133508015113e-14, -0.7068589329719543, 8.426412279050055e-8, 0.7073545455932617),
  scale: new Vector3(1.8342511653900146, 2.1177988052368164, 1.8342511653900146)
})
imageFromURL22.addComponentOrReplace(transform88)

const facebookButtonLink = new Entity('facebookButtonLink')
engine.addEntity(facebookButtonLink)
facebookButtonLink.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(26.967418670654297, 0.10033297538757324, 7.6209001541137695),
  rotation: new Quaternion(9.465915058086763e-16, 0.7599895000457764, -9.059778705022836e-8, 0.6499354243278503),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
facebookButtonLink.addComponentOrReplace(transform89)

const wallPlainWhite11 = new Entity('wallPlainWhite11')
engine.addEntity(wallPlainWhite11)
wallPlainWhite11.setParent(_scene)
wallPlainWhite11.addComponentOrReplace(gltfShape7)
const transform90 = new Transform({
  position: new Vector3(9.73798942565918, 0.36449337005615234, 4.689684867858887),
  rotation: new Quaternion(3.391876309918776e-15, -0.7105632424354553, 8.470572510077545e-8, 0.7036333680152893),
  scale: new Vector3(0.8875203132629395, 0.11192422360181808, 6.277716159820557)
})
wallPlainWhite11.addComponentOrReplace(transform90)

const twitterButtonLink2 = new Entity('twitterButtonLink2')
engine.addEntity(twitterButtonLink2)
twitterButtonLink2.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(26.905271530151367, 0.10076093673706055, 23.930801391601562),
  rotation: new Quaternion(-1.1878565588563286e-15, -0.7382045984268188, 8.800083151072613e-8, 0.6745768785476685),
  scale: new Vector3(1, 1, 1)
})
twitterButtonLink2.addComponentOrReplace(transform91)

const wallPlainWhite12 = new Entity('wallPlainWhite12')
engine.addEntity(wallPlainWhite12)
wallPlainWhite12.setParent(_scene)
wallPlainWhite12.addComponentOrReplace(gltfShape7)
const transform92 = new Transform({
  position: new Vector3(26.88489532470703, 0, 24.924509048461914),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8875198364257812, 0.11192422360181808, 6.277723789215088)
})
wallPlainWhite12.addComponentOrReplace(transform92)

const youtubeButtonLink = new Entity('youtubeButtonLink')
engine.addEntity(youtubeButtonLink)
youtubeButtonLink.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(23.423730850219727, 1.3483935594558716, 19.44214630126953),
  rotation: new Quaternion(2.442833067244272e-15, -0.7097013592720032, 8.460298062118454e-8, 0.7045026421546936),
  scale: new Vector3(0.8698586821556091, 0.8698577880859375, 0.8698586821556091)
})
youtubeButtonLink.addComponentOrReplace(transform93)

const instagramButtonLink = new Entity('instagramButtonLink')
engine.addEntity(instagramButtonLink)
instagramButtonLink.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(10.708600997924805, 0.5032297372817993, 4.692889213562012),
  rotation: new Quaternion(1.6025890467105675e-14, 0.014802992343902588, -1.7646624161926638e-9, 0.9998904466629028),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
instagramButtonLink.addComponentOrReplace(transform94)

const imageFromURL27 = new Entity('imageFromURL27')
engine.addEntity(imageFromURL27)
imageFromURL27.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(10.598731994628906, 1.0053125619888306, 3.9079136848449707),
  rotation: new Quaternion(8.080719727794443e-15, -0.00818699598312378, 9.75964864480261e-10, 0.9999665021896362),
  scale: new Vector3(1.8342511653900146, 2.120685338973999, 1.8342511653900146)
})
imageFromURL27.addComponentOrReplace(transform95)

const imageFromURL28 = new Entity('imageFromURL28')
engine.addEntity(imageFromURL28)
imageFromURL28.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(10.598883628845215, 1.0053125619888306, 3.892399787902832),
  rotation: new Quaternion(6.884399192212676e-15, -0.9999896883964539, 1.1920801767928424e-7, -0.004549682140350342),
  scale: new Vector3(1.8342519998550415, 2.120685338973999, 1.8342519998550415)
})
imageFromURL28.addComponentOrReplace(transform96)

const imageFromURL23 = new Entity('imageFromURL23')
engine.addEntity(imageFromURL23)
imageFromURL23.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(26.155017852783203, 0.6408191919326782, 23.977991104125977),
  rotation: new Quaternion(-2.033725259324628e-15, 0.704778790473938, -8.40161717974297e-8, 0.7094271779060364),
  scale: new Vector3(1.8342506885528564, 2.1217472553253174, 1.8342506885528564)
})
imageFromURL23.addComponentOrReplace(transform97)

const imageFromURL24 = new Entity('imageFromURL24')
engine.addEntity(imageFromURL24)
imageFromURL24.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(26.139503479003906, 0.6408191919326782, 23.977991104125977),
  rotation: new Quaternion(-1.3822133508015113e-14, -0.7068589329719543, 8.426412279050055e-8, 0.7073545455932617),
  scale: new Vector3(1.8342511653900146, 2.1217472553253174, 1.8342511653900146)
})
imageFromURL24.addComponentOrReplace(transform98)

const imageFromURL25 = new Entity('imageFromURL25')
engine.addEntity(imageFromURL25)
imageFromURL25.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(23.49951171875, 0.6408195495605469, 22.194028854370117),
  rotation: new Quaternion(-1.3822133508015113e-14, -0.7068589329719543, 8.426412279050055e-8, 0.7073545455932617),
  scale: new Vector3(4.601306438446045, 2.7430531978607178, 4.338621616363525)
})
imageFromURL25.addComponentOrReplace(transform99)

const wallPlainWhite2 = new Entity('wallPlainWhite2')
engine.addEntity(wallPlainWhite2)
wallPlainWhite2.setParent(_scene)
wallPlainWhite2.addComponentOrReplace(gltfShape7)
const transform100 = new Transform({
  position: new Vector3(3.179710865020752, 0, 2.655803680419922),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.455206036567688, 4.266236782073975, 1)
})
wallPlainWhite2.addComponentOrReplace(transform100)

const plainText6 = new Entity('plainText6')
engine.addEntity(plainText6)
plainText6.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(3.6039669513702393, 9.383023262023926, 26.241708755493164),
  rotation: new Quaternion(0.022688623517751694, 0.7236050963401794, 0.020696129649877548, -0.6895307898521423),
  scale: new Vector3(1.0547469854354858, 1.0547059774398804, 1.0547473430633545)
})
plainText6.addComponentOrReplace(transform101)

const plainText5 = new Entity('plainText5')
engine.addEntity(plainText5)
plainText5.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(3.6182055473327637, 9.383023262023926, 27.900314331054688),
  rotation: new Quaternion(0.022688623517751694, 0.7236050963401794, 0.020696129649877548, -0.6895307898521423),
  scale: new Vector3(1.0547477006912231, 1.0547059774398804, 1.054747223854065)
})
plainText5.addComponentOrReplace(transform102)

const wallPlainRed7 = new Entity('wallPlainRed7')
engine.addEntity(wallPlainRed7)
wallPlainRed7.setParent(_scene)
wallPlainRed7.addComponentOrReplace(gltfShape3)
const transform103 = new Transform({
  position: new Vector3(3.795131206512451, 7.850343704223633, 28.952375411987305),
  rotation: new Quaternion(3.4390931027722827e-15, 0.7088461518287659, -8.45010461603124e-8, -0.7053631544113159),
  scale: new Vector3(2.0317912101745605, 0.46533873677253723, 0.7003260254859924)
})
wallPlainRed7.addComponentOrReplace(transform103)

const plainText11 = new Entity('plainText11')
engine.addEntity(plainText11)
plainText11.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(3.8874857425689697, 8.703021049499512, 26.986434936523438),
  rotation: new Quaternion(-0.020793406292796135, 0.6864185333251953, 0.02259949781000614, 0.7265579700469971),
  scale: new Vector3(1.4521452188491821, 1.452099084854126, 1.452149510383606)
})
plainText11.addComponentOrReplace(transform104)

const plainText12 = new Entity('plainText12')
engine.addEntity(plainText12)
plainText12.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(4.060522556304932, 8.793963432312012, 26.936994552612305),
  rotation: new Quaternion(-3.5430090105655716e-15, 0.6981033682823181, -8.322040656594254e-8, 0.715997040271759),
  scale: new Vector3(1.5032775402069092, 1.5014629364013672, 6.45365571975708)
})
plainText12.addComponentOrReplace(transform105)

const invisibleRamp2 = new Entity('invisibleRamp2')
engine.addEntity(invisibleRamp2)
invisibleRamp2.setParent(_scene)
const transform106 = new Transform({
  position: new Vector3(18.386995315551758, 0, 27.553401947021484),
  rotation: new Quaternion(7.447551747112217e-17, 0.6932232975959778, -8.263864970103896e-8, -0.7207229137420654),
  scale: new Vector3(3.5896189212799072, 1.0197654962539673, 1.0029642581939697)
})
invisibleRamp2.addComponentOrReplace(transform106)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
const script14 = new Script14()
const script15 = new Script15()
const script16 = new Script16()
const script17 = new Script17()
const script18 = new Script18()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script13.init(options)
script14.init(options)
script15.init(options)
script16.init(options)
script17.init(options)
script18.init(options)
script1.spawn(imageFromURL, {"image":"https://bafybeihrio4s5oy4gph2kakntcoiyilqgulzatrdhyebbeis4rh3nx353q.ipfs.dweb.link/logo-idfc-first-bank-1200.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script1.spawn(imageFromURL3, {"image":"https://bafybeic4feitggot67sspfd5s25ltzrv3kxnlnc4ollxqe6kmn42rw3a4u.ipfs.dweb.link/uni.png"}, createChannel(channelId, imageFromURL3, channelBus))
script2.spawn(videoStream, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"station":"https://theuniverse.club/live/consensys/index.m3u8","customStation":"https://bafybeic2ka3pbgrxtcqpnjozbvieuyndjgjuuogzaivodmerlaj6ily4ji.ipfs.dweb.link/idfc.mp4"}, createChannel(channelId, videoStream, channelBus))
script1.spawn(imageFromURL5, {"image":"https://bafybeic4feitggot67sspfd5s25ltzrv3kxnlnc4ollxqe6kmn42rw3a4u.ipfs.dweb.link/uni.png"}, createChannel(channelId, imageFromURL5, channelBus))
script3.spawn(dropChandelier, {"startOn":true,"clickable":false}, createChannel(channelId, dropChandelier, channelBus))
script1.spawn(imageFromURL6, {"image":"https://bafybeic4feitggot67sspfd5s25ltzrv3kxnlnc4ollxqe6kmn42rw3a4u.ipfs.dweb.link/uni.png"}, createChannel(channelId, imageFromURL6, channelBus))
script1.spawn(imageFromURL7, {"image":"https://bafybeihrio4s5oy4gph2kakntcoiyilqgulzatrdhyebbeis4rh3nx353q.ipfs.dweb.link/logo-idfc-first-bank-1200.jpg"}, createChannel(channelId, imageFromURL7, channelBus))
script4.spawn(indicatorArrowGree, {"active":true}, createChannel(channelId, indicatorArrowGree, channelBus))
script4.spawn(indicatorArrowGree2, {"active":true}, createChannel(channelId, indicatorArrowGree2, channelBus))
script5.spawn(invisibleWall, {"enabled":true}, createChannel(channelId, invisibleWall, channelBus))
script6.spawn(plainText, {"text":"IDFC First Bank\n\nUNIverse Branch","font":"SF_Heavy","color":"#808080"}, createChannel(channelId, plainText, channelBus))
script7.spawn(greenButton2, {"onClick":[{"entityName":"invisibleWall","actionId":"disable","values":{}}]}, createChannel(channelId, greenButton2, channelBus))
script8.spawn(verticalPlatform, {"distance":16,"speed":5,"autoStart":true,"onReachEnd":[{"entityName":"verticalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalPlatform","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalPlatform, channelBus))
script1.spawn(imageFromURL10, {"image":"https://bafybeic7rq63h2fr6qdfyzdgnzbogfkshftn7l2i6kah3alwacbupktjxm.ipfs.dweb.link/UNI_Mob_TailoredSessions.jpg"}, createChannel(channelId, imageFromURL10, channelBus))
script1.spawn(imageFromURL2, {"image":"https://bafybeiflq3jygzyfmu66odlrv4ky7k5773ie3eyjvax2tp4h56mmshveqa.ipfs.dweb.link/UNI_Mob_Streams.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script1.spawn(imageFromURL8, {"image":"https://bafybeigxnygf2ofj6vt67fvuylaqg5zgpxa6eap5qcmxjnace7i2nudluu.ipfs.dweb.link/UNI_Mob_Home_Page.jpg"}, createChannel(channelId, imageFromURL8, channelBus))
script1.spawn(imageFromURL9, {"image":"https://bafybeiflyfauvasfh6tryztrt6ltvvud2txgr7xanrrp2zj2orv66tyhpa.ipfs.dweb.link/UNI_Mob_Splash_Screen.jpg"}, createChannel(channelId, imageFromURL9, channelBus))
script1.spawn(imageFromURL12, {"image":"https://bafybeidayhhgekd3hirrashbeaizgszslnpahsdfwzcgrbqtmxco5znln4.ipfs.dweb.link/UNI_Web_Landing_Page.png"}, createChannel(channelId, imageFromURL12, channelBus))
script5.spawn(invisibleWall2, {"enabled":true}, createChannel(channelId, invisibleWall2, channelBus))
script9.spawn(imageScreen, {"image":"https://bafybeie7kcyawd4irgmgmkzltojmzrcbnffdq3ptl73wukonzzk6u4mzjy.ipfs.dweb.link/UNI_Mob_ExpCounselor.jpg"}, createChannel(channelId, imageScreen, channelBus))
script6.spawn(plainText7, {"text":"WELCOME","font":"SF_Heavy","color":"#808080"}, createChannel(channelId, plainText7, channelBus))
script3.spawn(dropChandelier4, {"startOn":true,"clickable":false}, createChannel(channelId, dropChandelier4, channelBus))
script3.spawn(dropChandelier2, {"startOn":true,"clickable":false}, createChannel(channelId, dropChandelier2, channelBus))
script1.spawn(imageFromURL15, {"image":"https://bafybeic4feitggot67sspfd5s25ltzrv3kxnlnc4ollxqe6kmn42rw3a4u.ipfs.dweb.link/uni.png"}, createChannel(channelId, imageFromURL15, channelBus))
script10.spawn(qrDonationsBanner, {"publicKey":"","text":"IDFC First Bank","fontSize":10}, createChannel(channelId, qrDonationsBanner, channelBus))
script1.spawn(imageFromURL4, {"image":"https://bafybeie7kcyawd4irgmgmkzltojmzrcbnffdq3ptl73wukonzzk6u4mzjy.ipfs.dweb.link/UNI_Mob_ExpCounselor.jpg"}, createChannel(channelId, imageFromURL4, channelBus))
script1.spawn(imageFromURL14, {"image":"https://bafybeie7kcyawd4irgmgmkzltojmzrcbnffdq3ptl73wukonzzk6u4mzjy.ipfs.dweb.link/UNI_Mob_ExpCounselor.jpg"}, createChannel(channelId, imageFromURL14, channelBus))
script10.spawn(qrDonationsBanner3, {"publicKey":"","text":"IDFC First Bank","fontSize":10}, createChannel(channelId, qrDonationsBanner3, channelBus))
script1.spawn(imageFromURL16, {"image":"https://bafybeie7kcyawd4irgmgmkzltojmzrcbnffdq3ptl73wukonzzk6u4mzjy.ipfs.dweb.link/UNI_Mob_ExpCounselor.jpg"}, createChannel(channelId, imageFromURL16, channelBus))
script10.spawn(qrDonationsBanner4, {"publicKey":"","text":"IDFC First Bank","fontSize":10}, createChannel(channelId, qrDonationsBanner4, channelBus))
script9.spawn(imageScreen3, {"image":"https://i.imgur.com/d25gO61.jpg"}, createChannel(channelId, imageScreen3, channelBus))
script1.spawn(imageFromURL13, {"image":"https://bafybeigi3x26y5ewfdbrctz6nptputd5f4nrfvov5bstgjrlbhix3pkw2u.ipfs.dweb.link/MicrosoftTeams-image%20%282%29.png"}, createChannel(channelId, imageFromURL13, channelBus))
script1.spawn(imageFromURL11, {"image":"https://bafybeidayhhgekd3hirrashbeaizgszslnpahsdfwzcgrbqtmxco5znln4.ipfs.dweb.link/UNI_Web_Landing_Page.png"}, createChannel(channelId, imageFromURL11, channelBus))
script6.spawn(plainText8, {"text":"Conference \n    Room","font":"SF_Heavy","color":"#808080"}, createChannel(channelId, plainText8, channelBus))
script6.spawn(plainText9, {"text":"Conference \n    Room","font":"SF_Heavy","color":"#808080"}, createChannel(channelId, plainText9, channelBus))
script6.spawn(plainText10, {"text":"Reception \n    Area","font":"SF_Heavy","color":"#808080"}, createChannel(channelId, plainText10, channelBus))
script1.spawn(imageFromURL17, {"image":"https://bafybeia2hfhw5dtxecbupl6m7gktbpeid23ahdpruococ7ngrojiyqunoi.ipfs.dweb.link/MicrosoftTeams-image%20%287%29.png"}, createChannel(channelId, imageFromURL17, channelBus))
script1.spawn(imageFromURL18, {"image":"https://bafybeidayhhgekd3hirrashbeaizgszslnpahsdfwzcgrbqtmxco5znln4.ipfs.dweb.link/UNI_Web_Landing_Page.png"}, createChannel(channelId, imageFromURL18, channelBus))
script9.spawn(imageScreen4, {"image":"https://bafybeie7kcyawd4irgmgmkzltojmzrcbnffdq3ptl73wukonzzk6u4mzjy.ipfs.dweb.link/UNI_Mob_ExpCounselor.jpg"}, createChannel(channelId, imageScreen4, channelBus))
script6.spawn(plainText3, {"text":"IDFC First Bank\n    Help Desk","font":"SF","color":"#000000"}, createChannel(channelId, plainText3, channelBus))
script11.spawn(toolbox, {}, createChannel(channelId, toolbox, channelBus))
script12.spawn(triggerArea, {"enabled":false,"onEnter":[{"entityName":"toolbox","actionId":"print","values":{"message":"Counselling Started\nRefer to the Event Schedule Board for next\nCounselling Session.","duration":5,"multiplayer":false}},{"entityName":"invisibleWall3","actionId":"enable","values":{}}],"onLeave":[]}, createChannel(channelId, triggerArea, channelBus))
script5.spawn(invisibleWall3, {"enabled":false}, createChannel(channelId, invisibleWall3, channelBus))
script13.spawn(scifiLever, {"onActivate":[{"entityName":"invisibleWall3","actionId":"enable","values":{}},{"entityName":"triggerArea","actionId":"enable","values":{}},{"entityName":"triggerArea2","actionId":"enable","values":{}},{"entityName":"toolbox","actionId":"print","values":{"message":"Counseling Started.","duration":3,"multiplayer":true}}],"onDeactivate":[{"entityName":"invisibleWall3","actionId":"disable","values":{}},{"entityName":"triggerArea","actionId":"disable","values":{}},{"entityName":"triggerArea2","actionId":"disable","values":{}},{"entityName":"toolbox","actionId":"print","values":{"message":"Counseling Ended.","duration":3,"multiplayer":true}}]}, createChannel(channelId, scifiLever, channelBus))
script6.spawn(plainText4, {"text":"Education Loan","font":"SF","color":"#000000"}, createChannel(channelId, plainText4, channelBus))
script12.spawn(triggerArea2, {"enabled":false,"onEnter":[{"entityName":"toolbox","actionId":"print","values":{"message":"\nYou can access the Reception Area after Counselling.","duration":5,"multiplayer":false}},{"entityName":"invisibleWall3","actionId":"enable","values":{}}],"onLeave":[]}, createChannel(channelId, triggerArea2, channelBus))
script13.spawn(scifiLever2, {"onActivate":[{"entityName":"invisibleWall","actionId":"enable","values":{}},{"entityName":"toolbox","actionId":"print","values":{"message":"Invisible Wall is Activated","duration":4,"multiplayer":false}}],"onDeactivate":[{"entityName":"invisibleWall","actionId":"disable","values":{}},{"entityName":"toolbox","actionId":"print","values":{"message":"Invisible Wall is Deactivated.","duration":3,"multiplayer":false}}]}, createChannel(channelId, scifiLever2, channelBus))
script6.spawn(plainText2, {"text":"UNIdesk","font":"SF","color":"#000000"}, createChannel(channelId, plainText2, channelBus))
script1.spawn(imageFromURL20, {"image":"https://bafybeie2kciczpgrohvw6wityl7crld7zvubvfoqpldzpkt35fi25axc2u.ipfs.dweb.link/Idfc_facebook_post.png"}, createChannel(channelId, imageFromURL20, channelBus))
script1.spawn(imageFromURL22, {"image":"https://bafybeiedyyjjlowfdsbhtzt6kvt6vssqumzliuqthj6smzhrukvk4rupxe.ipfs.dweb.link/Screenshot%20from%202022-05-05%2010-55-47.png"}, createChannel(channelId, imageFromURL22, channelBus))
script14.spawn(facebookButtonLink, {"url":"https://www.facebook.com/idfcfirstbank/","bnw":false,"name":"IDFC First Bank"}, createChannel(channelId, facebookButtonLink, channelBus))
script15.spawn(twitterButtonLink2, {"url":"https://twitter.com/IDFCFIRSTBank","bnw":false,"name":"IDFC First Bank"}, createChannel(channelId, twitterButtonLink2, channelBus))
script16.spawn(youtubeButtonLink, {"url":"https://www.youtube.com/channel/UC3fyk0wieN6OdUIO-FARXDA","bnw":false,"name":"IDFC First Bank"}, createChannel(channelId, youtubeButtonLink, channelBus))
script17.spawn(instagramButtonLink, {"url":"https://www.instagram.com/idfcfirstbank/?hl=en","bnw":false,"name":"IDFC First Bank"}, createChannel(channelId, instagramButtonLink, channelBus))
script1.spawn(imageFromURL27, {"image":"https://bafybeidrfs4hhv2lexrkhvyybrsl2q3ylm65yiicnaox754ro5oveoajh4.ipfs.dweb.link/MicrosoftTeams-image%20%284%29.png"}, createChannel(channelId, imageFromURL27, channelBus))
script1.spawn(imageFromURL28, {"image":"https://bafybeidrfs4hhv2lexrkhvyybrsl2q3ylm65yiicnaox754ro5oveoajh4.ipfs.dweb.link/MicrosoftTeams-image%20%284%29.png"}, createChannel(channelId, imageFromURL28, channelBus))
script1.spawn(imageFromURL23, {"image":"https://bafybeideio7gmviciy2uettth3agxb622qok64rbonz5zhktw4ldx6g7sy.ipfs.dweb.link/IDFC_Twitter.PNG"}, createChannel(channelId, imageFromURL23, channelBus))
script1.spawn(imageFromURL24, {"image":"https://bafybeideio7gmviciy2uettth3agxb622qok64rbonz5zhktw4ldx6g7sy.ipfs.dweb.link/IDFC_Twitter.PNG"}, createChannel(channelId, imageFromURL24, channelBus))
script1.spawn(imageFromURL25, {"image":"https://bafybeigg5lytpqcqdtziwwzhhvqplidk7k5bwe3fitk6pnmptqqgqoxdsa.ipfs.dweb.link/IDFC_YT.PNG"}, createChannel(channelId, imageFromURL25, channelBus))
script6.spawn(plainText6, {"text":"Block\nStage Entry","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText6, channelBus))
script6.spawn(plainText5, {"text":"Block\nEvent Entry","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText5, channelBus))
script6.spawn(plainText11, {"text":"IDFC First Bank","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText11, channelBus))
script6.spawn(plainText12, {"text":"IDFC First Bank","font":"SF_Heavy","color":"#808080"}, createChannel(channelId, plainText12, channelBus))
script18.spawn(invisibleRamp2, {"enabled":true}, createChannel(channelId, invisibleRamp2, channelBus))