import { Component, ReactNode, ErrorInfo } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component:', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#070b14] text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Display Reset</h2>
            <p className="text-sm text-slate-300 mb-6">
              Mani Stationary interface encountered a rendering adjustment. Click below to refresh.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="btn-3d-gold px-6 py-2.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Display</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
