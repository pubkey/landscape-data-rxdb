// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'rxdb',
	Name: 'RxDB',
	Description: 'A fast, local-first, reactive Database for JavaScript Applications',
	MaturityLevel: 'Production-Ready',
	GetStarted: 'https://rxdb.info/quickstart.html',
	GitHub: 'https://github.com/pubkey/rxdb',
	Website: 'https://rxdb.info/',
	Deployment: ['Self-hosted', 'Third-party Integrations'],
	License: 'FSL-Apach 2.0',
	UniquenessNote:
		'RxDB focuses on local-first reactivity (observable queries) with pluggable storage engines and multiple replication options (HTTP endpoints, CouchDB, GraphQL, WebSocket, WebRTC P2P).',
	AppTarget: {
		LanguageSDK: { data: ['typescript', 'javascript'] },
		ClientBundleSize: {
			data: '~40kB',
			comment: 'depends on the used storage'
		},
		FrameworkIntegrations: {
			data: ['React', 'Angular', 'Vue', 'Svelte']
		},
		Platform: {
			data: ['Browser', 'Node', 'Android', 'iOS', 'Desktop'],
			comment: 'Core targets web + Node; mobile via React Native / Capacitor / native bridges depending on storage/replication setup.',
		}
	},
	Networking: {
		Topology: {
			data: 'Client-Server',
			comment: 'P2P is also possible via WebRTC replication.',
		},
		Protocol: {
			data: ['HTTP', 'SSE', 'WebSockets', 'P2P WiFi', 'WebRTC']
		}
	},
	ServerSideData: {
		PersistenceMechanism: {
			data: [
				'MongoDB',
				'SQLite',
				'Custom'
			]
		},
		DataModelParadigm: { data: 'Document' },
		ExistingDatabaseSupport: {
			data: 'Yes',
			comment: 'Via replication plugins / custom replication endpoints (backend-dependent)'
		}
	},
	ClientSideData: {
		QueryAPI: { data: ['Async', 'Reactive queries', 'Signals-based Reactivity'] },
		PersistenceMechanism: {
			data: ['IndexedDB', 'OPFS', 'SQLite', 'LocalStorage', 'Custom'],
			comment: 'Pluggable storage engines; exact options vary by environment and plugins.',
		},
		PersistenceFeatures: { data: 'Indexes' },
		DataModel: { data: 'Document' },
		OfflineReads: { data: 'Full Support' },
		OfflineWrites: { data: 'Local conflict resolution' },
		DataSize: {
			data: 'Depends on which storage is used'
		},
		SchemaManagement: {
			data: ['Schema definition', 'Schema migrations', 'Schema validation on write', 'Derived types'],
			comment: 'Uses JSON Schema; migration support via plugins.',
		},
		OptimisticUpdates: {
			data: 'Yes'
		}
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { data: ['Full Replication', 'Partial Replication'] },
		ConflictHandling: {
			data: 'Custom conflict resolution supported',
			comment: 'Conflict handling depends on replication strategy; RxDB supports providing custom handlers (and can integrate CRDT-style approaches via plugins).',
		},
		WhereResolutionOccurs: { data: 'Client' },
		WhatGetsSynced: {
			data: {
				ClientToClient: 'Docs',
				ClientToServer: 'Docs',
				ServerToClient: 'Docs'
			},
		},
		Authority: {
			data: 'Centralized',
			comment: 'Most deployments use a server; can be decentralized in P2P WebRTC setups.',
		},
		Latency: {
			data: '~10-100ms',
			comment: 'Network sync latency depends on transport; local reads are instant.',
		},
		Throughput: {
			data: 'Varies by replication plugin/backend and document sizes',
		},
		Concurrency: {
			data: 'Multi-device + multi-tab capable (replication coordination is supported)',
		},
	},
	AuthIdentity: {
		Encryption: {
			data: 'Yes',
			comment: 'Encryption-at-rest is available via plugins.',
		},
		AuthenticationMethod: {
			data: ['Full Custom'],
			comment:
				'Authentication/authorization is typically handled by the replication backend (e.g., your API).',
		},
		AuthorizationPermissions: {
			data: 'Custom',
			comment: 'Usually enforced server-side in your replication endpoints/backends.',
		},
	},
	UIRelated: {
		RichTextEditing: { data: 'No' },
		Components: {
			data: [],
			comment: 'RxDB is a database layer, not a UI component library.',
		},
	},
	DevelopmentWorkflowsDX: {
		DebuggingTools: {
			data: ['DevTools', 'Data Inspector'],
			comment:
				'Includes development-mode checks; inspection/debugging often done via browser storage inspectors and logging.',
		},
		CLI: { data: 'N/A' },
		TypeSupport: {
			data: 'TypeScript supported; typings depend on your schema and app setup',
		},
	},
	UserControlDataOwnership: 'Data is stored locally on the user\'s device by default; syncing is optional and under application control.',
})
