import { View, Text, ActivityIndicator } from "react-native";
import { useProximity } from "../../hooks/useProximity";

export function ProximityStatusBar() {
  const { mode, peerDeviceName, syncStatus } = useProximity();

  if (mode === 'off') {
    return null;
  }

  const statusConfig = getStatusConfig(mode, syncStatus, peerDeviceName);

  return (
    <View className="bg-gray-800 border-b border-gray-700 px-4 py-3 items-center">
      <Text className="text-white text-sm font-bold mb-0.5">
        Modo Compra Conjunta
      </Text>
      <View className="flex-row items-center gap-1.5">
        {mode === 'discovering' && (
          <ActivityIndicator size="small" color="#60A5FA" />
        )}
        <Text className="text-gray-300 text-xs">
          {statusConfig.subtitle}
        </Text>
        {(mode === 'connected' && syncStatus === 'syncing') && (
          <ActivityIndicator size="small" color="#34D399" />
        )}
      </View>
    </View>
  );
}

function getStatusConfig(
  mode: string,
  syncStatus: string,
  peerDeviceName: string | null
): { subtitle: string } {
  switch (mode) {
    case 'discovering':
      return { subtitle: 'Procurando dispositivos...' };
    case 'connected':
      if (syncStatus === 'syncing') {
        return { subtitle: `${peerDeviceName || 'Dispositivo'} • Sincronizando...` };
      }
      return { subtitle: `${peerDeviceName || 'Dispositivo'} • Conectado` };
    case 'reconnecting':
      return { subtitle: `${peerDeviceName || 'Dispositivo'} • Reconectando...` };
    default:
      return { subtitle: '' };
  }
}
